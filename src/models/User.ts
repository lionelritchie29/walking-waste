export type User = {
  name: string;
  email: string;
  phone: string;
  password: string;
  address: {
    street: string;
    rt: string;
    rw: string;
    ward: string;
    district: string;
    postal_code: string;
    address_detail: string | '';
  };
};
