import { ChevronLeftIcon } from '@heroicons/react/solid';
import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../../providers/UserProvider';

import SampahKertasImg from '../../images/sampah_kertas.png';
import SampahBelingImg from '../../images/sampah_beling.png';
import SampahPlastikImg from '../../images/sampah_plastik.png';

import Carousel from 'react-tiny-slider';

interface Props {}

const DonatePage = (props: Props) => {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);
  const carousel = useRef(null);
  const dots = useRef(null);

  const types = [
    {
      name: 'Sampah Plastik',
      image: SampahPlastikImg,
    },
    {
      name: 'Sampah Beling',
      image: SampahBelingImg,
    },
    {
      name: 'Sampah Kertas',
      image: SampahKertasImg,
    },
  ];

  const [currStep, setCurrStep] = useState(types[0]);

  const onSlideChanged = (idx: number) => {
    var node = dots as any;

    for (let i = 0; i < node.current.childNodes.length; i++) {
      node.current.childNodes[i].style.background = '#ccc';
    }

    node.current.childNodes[idx].style.background = '#333';
  };

  return (
    <div
      style={{ backgroundColor: '#387e3f' }}
      className='min-h-screen pt-8 pb-6'>
      <div className='flex items-center px-6'>
        <button>
          <ChevronLeftIcon
            onClick={() => {
              navigate('/');
            }}
            className='cursor w-12 h-12 text-white'
          />
        </button>

        <div>
          <span
            className='block text-xs font-bold'
            style={{ color: '#b6cda2' }}>
            Jemput di:
          </span>
          <span className='block font-bold underline text-lg -mt-2 text-white'>
            {user?.address.street}
          </span>
        </div>
      </div>

      <div className='mt-24'>
        <Carousel
          ref={carousel}
          controls={false}
          mouseDrag
          gutter={50}
          fixedWidth={200}
          center
          onTouchEnd={(info) => {
            onSlideChanged((info as any).displayIndex - 1);
          }}>
          {types.map((type) => (
            <div key={type.name}>
              <div
                style={{
                  background: '#e5d9c1',
                  boxShadow: '7px 7px 0px -2px rgba(196,168,121,1)',
                }}
                className='p-4 rounded-2xl mb-3 border border-yellow-700'>
                <div>
                  <img
                    className='w-full object-contain h-40'
                    src={type.image}
                    alt={type.name}
                  />
                </div>
                <h2 className='text-center font-bold text-amber-900 text-xl'>
                  ({type.name})
                </h2>
              </div>
            </div>
          ))}
        </Carousel>

        <div className='flex justify-center mt-3' id='dots' ref={dots}>
          {types.map((type, idx) => (
            <span
              key={type.name}
              className={`block mr-1 w-2 h-2 rounded-full bg-gray-300`}
              style={{
                background: types[idx].name === currStep.name ? '#333' : '#ccc',
              }}></span>
          ))}
        </div>
      </div>

      <div className='mt-2 text-white px-6'>
        <h3 className='text-2xl font-semibold text-center'>Berat Sampah</h3>

        <div className='flex justify-around font-bold text-lg mx-auto mt-3'>
          <div className='w-1/2 ml-20'>
            <ul className='list-disc'>
              <li>{'< 1 kg'}</li>
              <li>{'1 kg'}</li>
              <li>{'2 kg'}</li>
            </ul>
          </div>
          <div className='w-1/2'>
            <ul className='text-left list-disc'>
              <li>{'< 3-5 kg'}</li>
              <li>{'5-10 kg'}</li>
              <li>{'>10kg'}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='text-center mt-12'>
        <button
          onClick={() => navigate('/donate/active')}
          className='bg-white px-8 py-2 rounded-xl text-xl font-extrabold border border-black'>
          Konfirmasi
        </button>
      </div>
    </div>
  );
};

export default DonatePage;
