import React, { useRef, useState } from 'react';
import firstStepImg from '../images/step1.jpg';
import secondStepImg from '../images/step2.jpg';
import thirdStepImg from '../images/step3.jpg';
import Carousel from 'react-tiny-slider';
import { Link } from 'react-router-dom';

interface Props {}

const DonationStepPage = (props: Props) => {
  const carousel = useRef(null);
  const understandBtn = useRef(null);
  const dots = useRef(null);
  const [currSlideIdx, setCurrSlideIdx] = useState(0);

  const steps = [
    {
      title: 'Sampah Plastik',
      color: '#f8ca67',
      desc: 'Mari pelajari cara menyortir sampah plastik dengan benar',
      image: firstStepImg,
    },
    {
      title: 'Sampah Beling',
      color: '#21d09e',
      desc: 'Mari pelajari cara menyortir sampah beling dengan benar',
      image: secondStepImg,
    },
    {
      title: 'Sampah Kertas',
      color: '#48dbfc',
      desc: 'Mari pelajari cara menyortir sampah kertas dengan benar',
      image: thirdStepImg,
    },
  ];

  const onSlideChanged = (idx: number) => {
    var node = dots as any;

    for (let i = 0; i < node.current.childNodes.length; i++) {
      node.current.childNodes[i].style.background = '#ccc';
    }

    node.current.childNodes[idx].style.background = steps[idx].color;
    (understandBtn as any).current.style.background = steps[idx].color;
  };

  return (
    <div className='bg-white pt-6'>
      <div>
        <Carousel
          mouseDrag
          loop={false}
          ref={carousel}
          controls={false}
          onTouchEnd={(info) => onSlideChanged(info.navCurrentIndex!)}>
          {steps.map((step, idx) => (
            <div>
              <div
                key={step.title}
                className={`flex items-center ${
                  idx % 2 === 0 ? 'flex-col' : 'flex-col-reverse'
                }`}>
                <div className='w-2/3 mx-auto'>
                  <h1
                    style={{ color: step.color }}
                    className='font-bold text-3xl text-center'>
                    {step.title}
                  </h1>
                  <p className='text-center mx-auto text-lg'>{step.desc}</p>

                  <button
                    className='font-bold mt-2 px-3 py-2 w-full rounded-full'
                    style={{
                      border: `4px solid ${step.color}`,
                      color: step.color,
                    }}>
                    Mulai Sekarang
                  </button>
                </div>

                <div
                  className={`w-11/12 mx-auto ${
                    idx % 2 === 0 ? 'mt-16' : 'mb-16'
                  }`}>
                  <img src={step.image} className='w-full' alt={step.title} />
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        <div className='flex justify-center mt-3' id='dots' ref={dots}>
          {steps.map((step, idx) => (
            <span
              key={step.title}
              className={`block mr-1 w-2 h-2 rounded-full bg-gray-300`}></span>
          ))}
        </div>

        <Link to='/' className='flex justify-center w-2/3 mx-auto mt-6'>
          <button
            ref={understandBtn}
            className='rounded-full px-4 py-2 w-full font-bold text-white'>
            Saya paham
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DonationStepPage;
