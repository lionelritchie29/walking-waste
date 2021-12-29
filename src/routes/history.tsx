import { ChevronLeftIcon } from '@heroicons/react/solid';
import React from 'react';
import { useNavigate } from 'react-router';
import DummyTwoImg from '../images/dummy2.png';

interface Props {}

const HistoryPage = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div className='bg-white px-6 pt-8 pb-6'>
      <div className='flex justify-between border-b border-gray-400 pb-3'>
        <button>
          <ChevronLeftIcon
            onClick={() => {
              navigate('/');
            }}
            className='cursor w-10 h-10'
          />
        </button>
        <h1 className='font-bold text-3xl text-center'>Riwayat Aktivitas</h1>
        <div></div>
      </div>

      <div className='bg-custom-gray px-3 mt-4 rounded-full font-bold text-custom-green inline-block'>
        Pengambilan
      </div>

      <div className='text-right mt-8'>
        <p className='font-bold'>Belum pernah pakai Walking Waste?</p>
        <div className='font-bold bg-custom-gray inline-block w-5/6 p-3 text-center text-gray-500 mt-3 rounded-3xl'>
          Silahkan pesan untuk pengambilan sampah
        </div>
      </div>

      <div className='w-5/6 mx-auto mt-16'>
        <img src={DummyTwoImg} className='w-full' alt='' />
      </div>
    </div>
  );
};

export default HistoryPage;
