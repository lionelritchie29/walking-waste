import React from 'react';

interface Props {
  title: string;
  color: string;
  desc: string;
  image: string;
  idx: number;
}

const DonationStep: React.FC<Props> = ({ title, color, desc, image, idx }) => {
  return (
    <div>
      <div
        className={`flex items-center ${
          idx % 2 === 0 ? 'flex-col' : 'flex-col-reverse'
        }`}>
        <div className='w-2/3 mx-auto'>
          <h1
            style={{ color: color }}
            className='font-bold text-3xl text-center'>
            {title}
          </h1>
          <p className='text-center mx-auto text-lg'>{desc}</p>

          <button
            className='font-bold mt-2 px-3 py-2 w-full rounded-full'
            style={{
              border: `4px solid ${color}`,
              color: color,
            }}>
            Mulai Sekarang
          </button>
        </div>

        <div
          className={`w-11/12 mx-auto ${
            idx % 2 === 0 ? 'mt-16' : 'mb-16'
          }`}>
          <img src={image} className='w-full' alt={title} />
        </div>
      </div>
    </div>
  );
};

export default DonationStep;
