import React, { useRef, useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { Else, If, Then } from 'react-if';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Props {}

type FormData = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
};

type SecondFormData = {
  street: string;
  rt: string;
  rw: string;
  district: string;
  postal_code: string;
};

const Register = (props: Props) => {
  const [isSecondStep, setIsSecondStep] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const {
    register: secondRegister,
    handleSubmit: secondHandleSubmit,
    formState: { errors: secondErrors },
  } = useForm<SecondFormData>();

  const password = useRef({});
  password.current = watch('password', '');

  const onFirstStepSubmit = handleSubmit((data) => {
    setIsSecondStep(true);
  });

  const onSecondStepSubmit = secondHandleSubmit((data: any) => {
    console.log(data);
  });

  return (
    <section className='bg-green-800 h-screen w-full flex justify-center items-center relative'>
      <If condition={!isSecondStep}>
        <Then>
          <form onSubmit={onFirstStepSubmit} className='flex-grow mx-6'>
            <h1 className='font-semibold mb-4 text-xl text-white text-center'>
              Buat akun baru
            </h1>

            <div className='space-y-2'>
              <input
                type='text'
                className='border border-gray-400 w-full mx-auto rounded-full px-3 py-2 text-gray-400'
                placeholder='Nama Lengkap'
                {...register('name', {
                  required: 'Nama lengkap harus diisi',
                  minLength: {
                    value: 3,
                    message: 'Nama lengkap minimal harus terdiri dari 3 huruf',
                  },
                })}
              />
              {errors.name && (
                <small className='text-red-500 text-center ml-3'>
                  {errors.name.message}
                </small>
              )}

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
                type='text'
                className='border border-gray-400 w-full mx-auto rounded-full px-3 py-2 text-gray-400'
                placeholder='Nomor Telepon'
                {...register('phone', {
                  required: 'Nomor telepon harus diisi',
                  minLength: {
                    value: 7,
                    message: 'Nomor telepon minimal  7 karakter',
                  },
                  maxLength: {
                    value: 13,
                    message: 'Nomor telepon maksimal  13 karakter',
                  },
                })}
              />
              {errors.phone && (
                <small className='text-red-500 text-center ml-3'>
                  {errors.phone.message}
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

              <input
                type='password'
                className='border border-gray-400 w-full mx-auto rounded-full px-3 py-2 text-gray-400'
                placeholder='Ketik Ulang Password'
                {...register('confirm_password', {
                  required: 'Konfirmasi password harus diisi',
                  validate: (value) =>
                    value === password.current ||
                    'Konfirmasi password harus sama dengan password',
                })}
              />
            </div>
            {errors.confirm_password && (
              <small className='text-red-500 text-center ml-3'>
                {errors.confirm_password.message}
              </small>
            )}

            <button
              type='submit'
              className='text-white font-semibold text-2xl ml-5 mt-4'>
              Selanjutnya <ArrowRightIcon className='w-6 h-6 inline' />
            </button>
          </form>
        </Then>
        <Else>
          <form className='flex-grow mx-6'>
            <h1 className='font-semibold mb-4 text-xl text-white text-center'>
              Daftarkan alamatmu
            </h1>

            <div className='space-y-2'>
              <input
                type='text'
                className='border border-gray-400 w-full mx-auto rounded-full px-3 py-2 text-gray-400'
                placeholder='Nama jalan'
                {...secondRegister('street', {
                  required: 'Nama jalan harus diisi',
                })}
              />
              {secondErrors.street && (
                <small className='text-red-500 text-center ml-3'>
                  {secondErrors.street.message}
                </small>
              )}

              <div className='flex'>
                <div className='w-1/2'>
                  <input
                    type='text'
                    className='w-full border border-gray-400 mx-auto rounded-full px-3 py-2 text-gray-400'
                    placeholder='RT'
                    {...secondRegister('rt', {
                      required: 'Nomor RT harus diisi',
                    })}
                  />
                  {secondErrors.rt && (
                    <small className='text-red-500 text-center ml-3'>
                      {secondErrors.rt.message}
                    </small>
                  )}
                </div>

                <div className='w-1/2 ml-3 '>
                  <input
                    type='text'
                    className='w-full border border-gray-400 mx-auto rounded-full px-3 py-2 text-gray-400'
                    placeholder='RW'
                    {...secondRegister('rw', {
                      required: 'Nomor RW harus diisi',
                    })}
                  />
                  {secondErrors.rw && (
                    <small className='text-red-500 text-center ml-3'>
                      {secondErrors.rw.message}
                    </small>
                  )}
                </div>
              </div>

              <input
                type='text'
                className='border border-gray-400 w-full mx-auto rounded-full px-3 py-2 text-gray-400'
                placeholder='Kecamatan'
                {...secondRegister('district', {
                  required: 'kecamatan harus diisi',
                })}
              />
              {secondErrors.district && (
                <small className='text-red-500 text-center ml-3'>
                  {secondErrors.district.message}
                </small>
              )}

              <input
                type='text'
                className='border border-gray-400 w-full mx-auto rounded-full px-3 py-2 text-gray-400'
                placeholder='Kode pos'
                {...secondRegister('postal_code', {
                  required: 'Kode pos harus diisi',
                })}
              />
              {secondErrors.postal_code && (
                <small className='text-red-500 text-center ml-3'>
                  {secondErrors.postal_code.message}
                </small>
              )}

              <input
                type='text'
                className='border border-gray-400 w-full mx-auto rounded-full px-3 py-2 text-gray-400'
                placeholder='Keterangan sekitar alamat'
              />
            </div>

            <button
              onClick={onSecondStepSubmit}
              className='text-white font-semibold text-2xl ml-5 mt-4'>
              Daftar <ArrowRightIcon className='w-6 h-6 inline' />
            </button>
          </form>
        </Else>
      </If>
    </section>
  );
};

export default Register;
