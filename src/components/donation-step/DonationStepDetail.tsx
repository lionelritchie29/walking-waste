import { ChevronLeftIcon } from '@heroicons/react/solid';
import React from 'react';
import { useNavigate } from 'react-router';

interface Props {
  image: string;
  title: string;
  steps: string[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DonationStepDetail = ({
  image,
  title,
  steps,
  isOpen,
  setIsOpen,
}: Props) => {
  return (
    <div
      className={`absolute bg-custom-green top-0 left-0 h-full min-h-screen w-full z-20 transition-all duration-200 ${
        isOpen ? '' : '-translate-x-full'
      }`}>
      <div className='absolute top-6 left-4 text-white'>
        <button>
          <ChevronLeftIcon
            onClick={() => {
              setIsOpen(false);
            }}
            className='cursor w-10 h-10'
          />
        </button>
      </div>

      <div className='bg-custom-yellow pt-24'>
        <div className='w-2/3 mx-auto'>
          <img src={image} className='w-full' alt='' />
        </div>
      </div>

      <div className='bg-custom-yellow h-6 rounded-b-full'></div>

      <div>
        <h1 className='text-white text-2xl mt-4 font-bold text-center mx-4'>
          Langkah - langkah memilah {title}
        </h1>

        <ul className='mt-3 w-5/6 mx-auto text-white text-sm font-semibold'>
          {steps.map((step, idx) => (
            <li key={idx} className='flex'>
              <span className='block mr-1'>{idx + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DonationStepDetail;
