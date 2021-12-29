import React from 'react';

interface Props {
  title: string;
  desc: string;
  image: string;
  active: boolean;
}

const RewardCard = ({ title, desc, image, active }: Props) => {
  return (
    <div>
      <div className='flex bg-custom-gray px-4 py-2 rounded-xl'>
        <div className='w-1/3 flex items-center'>
          <img src={image} className='w-full' alt='' />
        </div>

        <div className='w-2/3 ml-4'>
          <h3 className='text-lg font-bold'>{title}</h3>
          <p
            className={`text-gray-600 text-sm font-semibold mt-1 ${
              active ? 'text-left' : 'text-right'
            }`}>
            {desc}
          </p>
        </div>
      </div>

      <div className='text-right mr-3'>
        <button className='font-bold text-custom-blue mt-1 text-lg'>
          Gunakan Sekarang
        </button>
      </div>
    </div>
  );
};

export default RewardCard;
