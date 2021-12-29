import React from 'react';

interface Props {
  title: string;
  desc: string;
  buttonText: string;
  buttonAction: () => void;
  image: string;
}

const MainFeatureCard: React.FC<Props> = ({
  title,
  desc,
  buttonText,
  buttonAction,
  image,
}) => {
  return (
    <div
      className='rounded-3xl px-6 py-4 border border-gray-50 shadow flex'
      style={{
        boxShadow: '-2px 3px 46px -17px rgba(186,186,186,0.69) inset',
      }}>
      <div className='w-2/3'>
        <h2 className='text-3xl text-custom-blue font-bold'>{title}</h2>
        <p className='text-black font-semibold'>{desc}</p>
        <button
          onClick={buttonAction}
          className='-ml-2 bg-custom-blue-2 rounded-full uppercase text-xs mt-1 px-4 py-3 text-gray-900 font-bold'>
          {buttonText}
        </button>
      </div>

      <div className='w-1/3 flex justify-center items-center'>
        <img src={image} className='w-full' alt={title} />
      </div>
    </div>
  );
};

export default MainFeatureCard;
