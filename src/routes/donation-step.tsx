import React, { useRef, useState } from 'react';

import firstStepImg from '../images/step1.jpg';
import secondStepImg from '../images/step2.jpg';
import thirdStepImg from '../images/step3.jpg';

import firstStepDetailImg from '../images/stepdetail1.png';
import secondStepDetailImg from '../images/stepdetail2.png';
import thirdStepDetailImg from '../images/stepdetail3.png';

import Carousel from 'react-tiny-slider';
import { Link } from 'react-router-dom';
import DonationStep from '../components/donation-step/DonationStep';
import DonationStepDetail from '../components/donation-step/DonationStepDetail';

interface Props {}

const DonationStepPage = (props: Props) => {
  const carousel = useRef(null);
  const understandBtn = useRef(null);
  const dots = useRef(null);

  const steps = [
    {
      index: 0,
      title: 'Sampah Plastik',
      color: '#f8ca67',
      desc: 'Mari pelajari cara menyortir sampah plastik dengan benar',
      image: firstStepImg,
      detailImage: firstStepDetailImg,
      details: [
        'Mulai pilih sampah berbahan dasar plastik. Contohnya: botol plastik, kantong plastik, alat rumah tangga berbahan dasar plastik, dll',
        'Pisahkan sampah plastik basah dan kering',
        'Keringkan sampah plastik basah',
        'Jika plastik berbentuk botol, maka diremukkan',
        'Kumpulkan semua sampah plastik ke dalam wadah yang kering',
      ],
    },
    {
      index: 1,
      title: 'Sampah Beling',
      color: '#21d09e',
      desc: 'Mari pelajari cara menyortir sampah beling dengan benar',
      image: secondStepImg,
      detailImage: secondStepDetailImg,
      details: [
        'Mulai pilih sampah berbahan dasar kaca/beling',
        'Pisahkan sampah beling kering dan basah',
        'Bersihkan noda yang tersisa pada sampah beling yang basah',
        'Pastikan sampah beling sudah kering',
        'Kumpulkan sampah beling kering dan basah dalam wadah yang sama (pastikan kuat menahan beling dalam jumlah yang banyak).',
      ],
    },
    {
      index: 2,
      title: 'Sampah Kertas',
      color: '#48dbfc',
      desc: 'Mari pelajari cara menyortir sampah kertas dengan benar',
      image: thirdStepImg,
      detailImage: thirdStepDetailImg,
      details: [
        'Mulai pilih sampah berbahan dasar kertas. Contohnya: koran, majalah, kardus, karton, kertas pembungkus makanan',
        'Lipat sampah berbentuk bangun ruang menjadi pipih. Contohnya: karton susu yang berbentuk balok perlu dilipat dan dipipihkan.',
        'Kumpulkan dalam satu wadah/tempat yang kering.',
      ],
    },
  ];

  const [currStep, setCurrStep] = useState(steps[0]);
  const [isOpen, setIsOpen] = useState(false);

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
      <DonationStepDetail
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        title={currStep.title}
        image={currStep.detailImage}
        steps={currStep.details}
      />

      <div>
        <Carousel
          mouseDrag
          loop={false}
          startIndex={currStep.index}
          ref={carousel}
          controls={false}
          onTouchEnd={(info) => onSlideChanged(info.navCurrentIndex!)}
          onClick={(idx, info, event) => {
            console.log(idx);
            setCurrStep(steps[idx!]);
            setIsOpen(true);
          }}>
          {steps.map((step, idx) => (
            <DonationStep
              key={step.title}
              title={step.title}
              desc={step.desc}
              image={step.image}
              color={step.color}
              idx={idx}
            />
          ))}
        </Carousel>

        <div className='flex justify-center mt-3' id='dots' ref={dots}>
          {steps.map((step, idx) => (
            <span
              key={step.title}
              className={`block mr-1 w-2 h-2 rounded-full bg-gray-300`}
              style={{
                background:
                  steps[idx].title === currStep.title ? currStep.color : '#ccc',
              }}></span>
          ))}
        </div>

        <Link to='/' className='flex justify-center w-2/3 mx-auto mt-6'>
          <button
            ref={understandBtn}
            className='rounded-full px-4 py-2 w-full font-bold text-white'
            style={{ background: currStep.color }}>
            Saya paham
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DonationStepPage;
