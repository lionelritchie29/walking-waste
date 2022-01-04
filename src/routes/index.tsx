import { MenuIcon } from '@heroicons/react/solid';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import MainFeatureCard from '../components/home/MainFeatureCard';
import Sidebar from '../components/home/Sidebar';
import { USER_KEY } from '../constant';

import HomeTopImg from '../images/home-top.png';
import HomeBottomImg from '../images/home-bottom.png';
import HomeMiddleImg from '../images/home-middle.png';
import { UserContext } from '../providers/UserProvider';

interface Props {}

const HomePage = (props: Props) => {
  const [user, setUser] = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const features = [
    {
      title: 'Donasi',
      desc: 'Pisahkan, bungkus, dan donasikan sampah',
      buttonText: 'Donasikan Sampah',
      buttonAction: () => {
        navigate('/donate');
      },
      image: HomeTopImg,
    },
    {
      title: 'Langkah',
      desc: 'Bagaimana cara memilah sampah yang benar?',
      buttonText: 'Pelajari Caranya',
      buttonAction: () => {
        navigate('/donation-step');
      },
      image: HomeMiddleImg,
    },
    {
      title: 'Manfaat',
      desc: 'Apa saja manfaat memilah sampah',
      buttonText: 'Cari Tahu Manfaatnya',
      buttonAction: () => {
        navigate('/articles');
      },
      image: HomeBottomImg,
    },
  ];

  return (
    <div className='relative'>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <section className='bg-custom-green pt-20'>
        <div className='bg-white rounded-t-2xl px-4 pt-4 pb-8 h-full md:min-h-screen'>
          <div className='flex justify-between'>
            <MenuIcon
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className='cursor text-custom-green w-10 h-10'
            />

            <div className='text-custom-green'>
              <div className='text-2xl font-bold'>Hai, {user?.name}</div>
              <div className='font-semibold text-right'>70 Point</div>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-8 mt-8'>
            {features.map((feature) => (
              <MainFeatureCard
                key={feature.title}
                image={feature.image}
                title={feature.title}
                desc={feature.desc}
                buttonText={feature.buttonText}
                buttonAction={feature.buttonAction}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
