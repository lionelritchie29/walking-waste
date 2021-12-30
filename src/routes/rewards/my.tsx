import { ChevronLeftIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import RewardCard from '../../components/rewards/RewardCard';
import dummyOneImg from '../../images/dummy1.jpg';

interface Props {}

const MyRewardsPage = (props: Props) => {
  const navigate = useNavigate();

  const tabs = [
    {
      title: 'Masih Berlaku',
    },
    {
      title: 'Kadaluwarsa',
    },
  ];

  const rewards = [
    {
      title: 'Potongan belanja 20% di Rishoes shop',
      desc: 'Berlaku sampai 25 Februari 2022',
      active: true,
      image: dummyOneImg,
    },
    {
      title: 'Gratis 1 gelas Kopi Jiwa',
      desc: 'Berlaku sampai 3 Maret 2022',
      active: true,
      image: dummyOneImg,
    },
    {
      title: 'Cashback 50% LikaShop',
      desc: 'Berlaku sampai 11 April 2022',
      active: true,
      image: dummyOneImg,
    },
    {
      title: 'Potongan Tiket 20% Dunia Land',
      desc: 'Kadaluwarsa',
      active: false,
      image: dummyOneImg,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className='bg-white px-6 pt-8 pb-6'>
      <div className='flex justify-between'>
        <button>
          <ChevronLeftIcon
            onClick={() => {
              navigate('/rewards');
            }}
            className='cursor w-10 h-10'
          />
        </button>
        <h1 className='font-bold text-3xl text-center'>Rewards Saya</h1>
        <div></div>
      </div>

      <div className='flex justify-between mt-2 text-lg border-b-2 border-gray-900'>
        {tabs.map((t) => (
          <div
            onClick={() => setActiveTab(t)}
            key={t.title}
            className={`font-bold py-2 pr-2 ${
              t.title === activeTab.title
                ? 'text-custom-green'
                : 'text-gray-400'
            }`}>
            {t.title}
          </div>
        ))}
      </div>

      <div className='grid grid-cols-1 gap-6 mt-4'>
        {activeTab.title === 'Masih Berlaku' &&
          rewards.map(
            (r) =>
              r.active && (
                <RewardCard
                  key={r.title}
                  active={r.active}
                  title={r.title}
                  desc={r.desc}
                  image={r.image}
                />
              ),
          )}

        {activeTab.title === 'Kadaluwarsa' &&
          rewards.map(
            (r) =>
              !r.active && (
                <RewardCard
                  key={r.title}
                  active={r.active}
                  title={r.title}
                  desc={r.desc}
                  image={r.image}
                />
              ),
          )}
      </div>
    </div>
  );
};

export default MyRewardsPage;
