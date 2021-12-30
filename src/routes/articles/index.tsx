import { ArrowLeftIcon } from '@heroicons/react/solid';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import Carousel from 'react-tiny-slider';

import ArticleOneImg from '../../images/article1.png';
import ArticleTwoImg from '../../images/article2.png';
import ArticleThreeImg from '../../images/article3.png';
import ArticleFourImg from '../../images/article4.png';
import ArticleDetailPage from './detail';

interface Props {}

const ArticlePage = (props: Props) => {
  const navigate = useNavigate();
  const carousel = useRef(null);

  const articles = [
    {
      title: 'Pentingnya memilah sampah',
      writer: 'Walking Waste Team',
      time: '10 minggu lalu',
      content:
        'Masyarakat Indonesia seringkali tidak sadar akan pentingnya pemilahan sampah yang akan kita buang. Hal ini disebabkan karena tidak melakukan pemilahan sampah rumah tangga mereka (KataData, 2019) dan 66,8% tidak melakukan pemilahan sampah dan memilih untuk membakar sampah tanpa dipilah sesuai kategorinya (Susenas, 2017)',
      populer: true,
      image: ArticleOneImg,
    },
    {
      title: 'Bahaya membuang sampah',
      writer: 'Walking Waste Team',
      time: '9 minggu lalu',
      content:
        'Masyarakat Indonesia seringkali tidak sadar akan pentingnya pemilahan sampah yang akan kita buang. Hal ini disebabkan karena tidak melakukan pemilahan sampah rumah tangga mereka (KataData, 2019) dan 66,8% tidak melakukan pemilahan sampah dan memilih untuk membakar sampah tanpa dipilah sesuai kategorinya (Susenas, 2017)',
      populer: true,
      image: ArticleTwoImg,
    },
    {
      title: 'Dampak penumpukan sampah',
      writer: 'Walking Waste Team',
      time: '5 menit lalu',
      content:
        'Masyarakat Indonesia seringkali tidak sadar akan pentingnya pemilahan sampah yang akan kita buang. Hal ini disebabkan karena tidak melakukan pemilahan sampah rumah tangga mereka (KataData, 2019) dan 66,8% tidak melakukan pemilahan sampah dan memilih untuk membakar sampah tanpa dipilah sesuai kategorinya (Susenas, 2017)',
      populer: false,
      image: ArticleThreeImg,
    },
    {
      title: 'Manfaat memilah sampah',
      writer: 'Walking Waste Team',
      time: '15 menit lalu',
      content:
        'Masyarakat Indonesia seringkali tidak sadar akan pentingnya pemilahan sampah yang akan kita buang. Hal ini disebabkan karena tidak melakukan pemilahan sampah rumah tangga mereka (KataData, 2019) dan 66,8% tidak melakukan pemilahan sampah dan memilih untuk membakar sampah tanpa dipilah sesuai kategorinya (Susenas, 2017)',
      populer: false,
      image: ArticleFourImg,
    },
  ];

  return (
    <div className='min-h-screen pb-6' style={{ background: '#236D5E' }}>
      <div className='pt-8 bg-white'>
        <div className='px-6'>
          <button>
            <ArrowLeftIcon
              onClick={() => {
                navigate('/');
              }}
              className='cursor w-10 h-10'
            />
          </button>
        </div>

        <h1 className='font-bold text-4xl mt-4 px-6'>Populer</h1>
        <div>
          <Carousel
            ref={carousel}
            controls={false}
            loop={false}
            mouseDrag
            gutter={20}
            edgePadding={20}
            fixedWidth={250}>
            {articles
              .filter((a) => a.populer)
              .map((article) => (
                <div>
                  <div
                    className='p-4 rounded-2xl'
                    style={{ background: '#90C6B9' }}>
                    <img
                      src={article.image}
                      className='w-full h-32 object-contain'
                      alt=''
                    />
                  </div>
                  <h2 className='font-bold text-xl truncate'>
                    {article.title}
                  </h2>
                  <div className='flex justify-between font-semibold -mt-1 text-sm'>
                    <span className='block'>{article.writer}</span>
                    <span className='block'>{article.time}</span>
                  </div>
                </div>
              ))}
          </Carousel>
        </div>

        <div className='flex justify-center pt-10 pb-4'>
          <div className='w-16 bg-gray-300 h-2 rounded-full'></div>
        </div>
      </div>

      <div className='px-6'>
        <h1 className='font-bold text-white text-3xl pt-6'>Artikel Terbaru</h1>

        <div className='grid grid-cols-1 gap-6'>
          {articles
            .filter((a) => !a.populer)
            .map((a) => (
              <div className='flex'>
                <div
                  style={{ background: '#FDF8E8' }}
                  className='p-2 rounded-2xl'>
                  <img
                    className='w-24 object-contain h-16'
                    src={a.image}
                    alt={a.title}
                  />
                </div>

                <div className='text-white ml-4'>
                  <h4 className='text-lg font-semibold'>{a.title}</h4>
                  <div className='flex justify-between text-xs font-semibold'>
                    <span className='block'>{a.writer}</span>
                    <span className='block'>{a.time}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
