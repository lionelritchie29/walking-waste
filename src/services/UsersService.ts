import { User } from '../models/User';
import { AES, enc } from 'crypto-js';
import axios, { AxiosResponse } from 'axios';

export class UsersService {
  static APP_SECRET = import.meta.env.VITE_APP_SECRET as string;
  static API_URL = `${import.meta.env.VITE_API_BASE_URL}${
    import.meta.env.VITE_API_USERS_DB_ID
  }?apiKey=${import.meta.env.VITE_API_KEY}`;

  public static async addUser(user: User): Promise<boolean> {
    try {
      const { data: users }: AxiosResponse<User[]> = await axios.get(
        this.API_URL,
      );
      const hashedPass = AES.encrypt(user.password, this.APP_SECRET).toString();
      const newUser = { ...user, password: hashedPass };
      users.push(newUser);

      const res = await axios.put(this.API_URL, users);
      if (res.status !== 200) {
        return false;
      }

      return true;
    } catch (e: any) {
      console.error(e);
      return false;
    }
  }

  public static async checkExist(email: string): Promise<boolean> {
    try {
      const { data: users }: AxiosResponse<User[]> = await axios.get(
        this.API_URL,
      );
      if (users.some((u) => u.email === email)) {
        return true;
      }

      return false;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  public static async validate(
    email: string,
    password: string,
  ): Promise<User | boolean> {
    const { data: users }: AxiosResponse<User[]> = await axios.get(
      this.API_URL,
    );
    const user = users.find((u) => u.email === email);

    if (user) {
      const decryptedPass = AES.decrypt(
        user.password,
        this.APP_SECRET,
      ).toString(enc.Utf8);
      if (password === decryptedPass) {
        return user;
      } else {
        return false;
      }
    }
    return false;
  }
}
