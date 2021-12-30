import { ChevronLeftIcon, XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import DonateDoneFooterImg from '../../images/donate_done_footer.jpg';
import DriverImg from '../../images/driver_dummy.png';

interface Props {}

const DonateDonePage = (props: Props) => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());

  const getMonthName = (month: number) => {
    switch (month) {
      case 1:
        return 'January';
      case 2:
        return 'February';
      case 3:
        return 'March';
      case 4:
        return 'April';
      case 5:
        return 'May';
      case 6:
        return 'June';
      case 7:
        return 'July';
      case 8:
        return 'August';
      case 9:
        return 'September';
      case 10:
        return 'October';
      case 11:
        return 'November';
      case 12:
        return 'December';
    }
  };

  return (
    <div className='min-h-screen pb-6 bg-custom-dark'>
      <div className='px-6 pt-8' style={{ background: '#E7FAF8' }}>
        <div>
          <button>
            <XIcon
              onClick={() => {
                navigate('/');
              }}
              className='cursor w-10 h-10 text-custom-green'
            />
          </button>
        </div>

        <div className='text-center text-lg'>
          {date.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
          , {date.getDate()} {getMonthName(date.getMonth())}{' '}
          {date.getFullYear()}
        </div>

        <div className='flex justify-center items-center mt-2'>
          <div className='rounded-full w-4 h-4 bg-gray-400'></div>
          <div className='border-b-2 border-gray-400 w-12'></div>
          <div className='rounded-full w-4 h-4 bg-custom-green'></div>
        </div>

        <div className='flex justify-center text-lg'>Tiba</div>

        <div className='text-center mt-8'>
          <div className='text-xl'>Berat Sampah</div>
          <div className='text-4xl text-custom-green font-bold'>5 kg</div>
        </div>

        <div className='font-bold text-2xl mt-6 flex justify-between border-t-4 border-b-4 border-gray-300'>
          <span className='text-gray-800'>Poin Tambahan</span>
          <span className='text-custom-green'>+50</span>
        </div>

        <div className='text-gray-400 font-bold text-center text-lg mt-8'>
          Penilaian anda sangat berarti bagi kami
        </div>
      </div>

      <div>
        <img src={DonateDoneFooterImg} className='w-full' alt='' />
      </div>

      <div className='px-6 bg-custom-dark'>
        <h2 className='text-center font-bold text-white text-3xl'>
          Terima Kasih
        </h2>

        <div className='flex justify-center items-center mt-3'>
          <div className='w-1/4'>
            <img src={DriverImg} className='w-2/3 mx-auto' />
          </div>
          <span className='block text-white font-semibold text-xl'>
            Gunawan
          </span>
        </div>

        <div className='text-center text-white font-bold text-xl mt-6'>
          Penilaian Layanan
        </div>

        <ul className='flex text-6xl text-yellow-300 justify-center'>
          <li>★</li>
          <li>★</li>
          <li>★</li>
          <li>★</li>
          <li>★</li>
        </ul>
      </div>
    </div>
  );
};

export default DonateDonePage;
