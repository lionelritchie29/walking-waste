import { ChevronLeftIcon } from '@heroicons/react/solid';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

import DriverImg from '../../images/driver_dummy.png';
import ChatImg from '../../images/chat_dummy.jpg';
import PhoneImg from '../../images/phone_dummy.jpg';

interface Props {}

const DonateActivePage = (props: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/donate/done');
    }, 8000);
  }, []);

  return (
    <div className='min-h-screen pb-6' style={{ background: '#E7FAF8' }}>
      <div className='bg-custom-dark pt-8'>
        <button>
          <ChevronLeftIcon
            onClick={() => {
              navigate('/donate');
            }}
            className='cursor w-12 h-12 text-white'
          />
        </button>

        <div className='h-48'></div>
      </div>

      <div>
        <div className=' flex justify-center'>
          <div className='mapouter p-3 bg-white -mt-24'>
            <div className='gmap_canvas'>
              <iframe
                width='275'
                height='275'
                id='gmap_canvas'
                src={`https://maps.google.com/maps?q=binus%20university&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                frameBorder={0}
                scrolling='no'
                marginHeight={0}
                marginWidth={0}></iframe>
            </div>
          </div>
        </div>

        <div className='flex mt-6 justify-center items-center'>
          <div className='border-r border-gray-700'>
            <img src={DriverImg} className='w-2/3 mx-auto' alt='' />
          </div>

          <div className='ml-8'>
            <span className='block text-2xl font-semibold'>Gunawan</span>
            <span className='block text-red-500 text-lg -mt-2'>
              Tiba dalam 3 menit
            </span>
          </div>
        </div>

        <div className='bg-white p-3 rounded-xl flex mx-6 mt-3'>
          <div className='w-1/2'>
            <img
              src={PhoneImg}
              className='h-12 mx-auto object-contain'
              alt=''
            />
          </div>

          <div className='w-1/2'>
            <img src={ChatImg} className='h-12 mx-auto object-contain' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateActivePage;
