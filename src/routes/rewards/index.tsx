import React from 'react';
import { Link } from 'react-router-dom';
import dummyOneImg from '../../images/dummy1.jpg';
import bobaImg from '../../images/boba.png';
import { ChevronLeftIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';

interface Props {}

const RewardPage = (props: Props) => {
  const navigate = useNavigate();

  const rewards = [
    {
      title: 'Makanan dan Minuman',
      image: dummyOneImg,
      to: '/rewards/my',
    },
    {
      title: 'Wisata',
      image: dummyOneImg,
      to: '/rewards/my',
    },
    {
      title: 'Belanja',
      image: dummyOneImg,
      to: '/rewards/my',
    },
  ];

  return (
    <section className='bg-white px-6 pt-8 pb-6'>
      <div className='flex justify-between items-end border-b border-gray-900 pb-2'>
        <div className='flex'>
          <button>
            <ChevronLeftIcon
              onClick={() => {
                navigate('/');
              }}
              className='cursor w-10 h-10'
            />
          </button>
          <h1 className='font-bold text-3xl'>Rewards</h1>
        </div>

        <div className='text-right'>
          <span className='block text-custom-green font-bold text-lg'>
            Rewards Saya
          </span>
          <span className='block font-bold text-custom-blue'>890 point</span>
        </div>
      </div>

      <div className='flex'>
        <div className='w-1/2 border-r border-gray-900 grid grid-cols-1 gap-y-8 px-4 py-8'>
          {rewards.map((r) => (
            <div key={r.title}>
              <Link to={r.to} className='block'>
                <div className='p-4 bg-custom-gray rounded-lg'>
                  <img src={dummyOneImg} className='w-full' alt={r.title} />
                </div>
              </Link>
              <h3 className='font-bold text-base text-center text-custom-green'>
                {r.title}
              </h3>
            </div>
          ))}
        </div>

        <div className='w-1/2 py-4 pl-4 text-center flex items-center'>
          <div>
            <h2 className='text-gray-700 font-bold text-xl'>1 Bobakinian</h2>

            <div className='px-4 py-8 bg-custom-gray rounded-lg mt-3'>
              <img src={bobaImg} className='w-full' alt='Boba' />
            </div>

            <span className='block text-custom-blue text-xl font-bold mt-3 pb-3 border-b border-gray-900'>
              150 Poin
            </span>

            <button className='px-5 py-4 text-custom-green2 w-full rounded-lg bg-custom-blue-3 text-3xl font-bold mt-8'>
              Tukar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardPage;
