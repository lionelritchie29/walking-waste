import { ArrowRightIcon } from '@heroicons/react/solid';
import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { USER_KEY } from '../constant';
import { User } from '../models/User';
import { UserContext } from '../providers/UserProvider';
import { UsersService } from '../services/UsersService';

interface Props {}

type FormData = {
  email: string;
  password: string;
};

const LoginPage = (props: Props) => {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, []);

  const onSubmit = handleSubmit(async ({ email, password }) => {
    toast.info('Logging you in...');
    const user = await UsersService.validate(email, password);
    if (user) {
      toast.dismiss();
      toast.success(`Welcome back, ${(user as User).name}`);
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      await setUser(user);
      navigate('/');
    } else {
      toast.dismiss();
      toast.error('Ups, wrong credentials...');
    }
  });

  return (
    <section className='h-screen w-full flex justify-center items-center relative'>
      <form onSubmit={onSubmit} className='flex-grow mx-6'>
        <h1 className='font-semibold mb-4 text-2xl text-custom-green'>Halo!</h1>

        <div className='space-y-2'>
          <input
            type='text'
            className='border border-gray-400 w-full mx-auto rounded-full px-3 py-2 text-gray-400'
            placeholder='Email'
            {...register('email', {
              required: 'Email harus diisi',
              pattern: {
                value:
                  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Email tidak valid',
              },
            })}
          />
          {errors.email && (
            <small className='text-red-500 text-center ml-3'>
              {errors.email.message}
            </small>
          )}

          <input
            type='password'
            className='border border-gray-400 w-full mx-auto rounded-full px-3 py-2 text-gray-400'
            placeholder='Password'
            {...register('password', {
              required: 'Password harus diisi',
              minLength: {
                value: 8,
                message: 'Password harus terdiri dari 8 karakter',
              },
            })}
          />
          {errors.password && (
            <small className='text-red-500 text-center ml-3'>
              {errors.password.message}
            </small>
          )}
        </div>

        <button
          type='submit'
          className='font-semibold text-3xl mt-4 text-custom-green'>
          Masuk <ArrowRightIcon className='w-6 h-6 inline' />
        </button>
      </form>
    </section>
  );
};

export default LoginPage;
