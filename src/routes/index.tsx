import { MenuIcon } from '@heroicons/react/solid';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import MainFeatureCard from '../components/home/MainFeatureCard';
import Sidebar from '../components/home/Sidebar';
import { USER_KEY } from '../constant';

import dummyImg from '../images/dummy.jpg';
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
      buttonAction: () => {},
      image: dummyImg,
    },
    {
      title: 'Langkah',
      desc: 'Bagaimana cara memilah sampah yang benar?',
      buttonText: 'Pelajari Caranya',
      buttonAction: () => {},
      image: dummyImg,
    },
    {
      title: 'Manfaat',
      desc: 'Apa saja manfaat memilah sampah',
      buttonText: 'Cari Tahu Manfaatnya',
      buttonAction: () => {},
      image: dummyImg,
    },
  ];

  return (
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <section className='bg-custom-green pt-20'>
        <div className='bg-white rounded-t-2xl px-4 pt-4 h-full md:min-h-screen'>
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
    </>
  );
};

export default HomePage;
