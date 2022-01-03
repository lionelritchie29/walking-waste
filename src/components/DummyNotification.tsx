import React from 'react';
import LogoImg from '../images/logo.png';

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const DummyNotification: React.FC<Props> = ({ show, setShow }) => {
  return (
    <div
      onClick={() => {
        setShow(false);
      }}
      className={`shadow-xl w-full absolute z-50 p-2 transition-all duration-500 ${
        show ? '' : '-translate-y-full'
      }`}>
      <div className='bg-gray-400 rounded-t-xl flex justify-between px-3 py-2'>
        <div className='flex'>
          <div className='bg-custom-green p-1'>
            <img src={LogoImg} alt='Logo' className='w-4 h-4' />
          </div>
          <span className='block ml-1'>WALKING WASTE</span>
        </div>

        <div style={{ color: '#18155D' }}>Just now</div>
      </div>

      <div className='bg-white rounded-b-xl' style={{ color: '#18155D' }}>
        <div className='px-3 py-2'>
          <span className='block font-bold text-lg'>Poin dan Reward</span>
          <span className='block text-sm'>
            Selamat! Anda berhasil mendapatkan 45 poin! Segera tukarkan dengan
            hadiah menarik lainnya!
          </span>
        </div>

        <div className='flex justify-center p-1'>
          <div className='w-16 h-1 bg-gray-400 rounded-full'></div>
        </div>
      </div>
    </div>
  );
};

export default DummyNotification;
