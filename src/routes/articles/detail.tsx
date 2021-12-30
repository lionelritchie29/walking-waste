import { ArrowLeftIcon, ChevronDownIcon } from '@heroicons/react/solid';
import React from 'react';
import { useNavigate, useParams } from 'react-router';

import ArticleOneImg from '../../images/article1.png';
import ArticleTwoImg from '../../images/article2.png';
import ArticleThreeImg from '../../images/article3.png';
import ArticleFourImg from '../../images/article4.png';

interface Props {}

const ArticleDetailPage = (props: Props) => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const articles = [
    {
      slug: 'pentingnya-memilah-sampah',
      title: 'Pentingnya memilah sampah',
      writer: 'Walking Waste Team',
      time: '10 minggu lalu',
      content:
        'Masyarakat Indonesia seringkali tidak sadar akan pentingnya pemilahan sampah yang akan kita buang. Hal ini disebabkan karena tidak melakukan pemilahan sampah rumah tangga mereka (KataData, 2019) dan 66,8% tidak melakukan pemilahan sampah dan memilih untuk membakar sampah tanpa dipilah sesuai kategorinya (Susenas, 2017)',
      populer: true,
      image: ArticleOneImg,
    },
    {
      slug: 'bahaya-membuang-sampah',
      title: 'Bahaya membuang sampah',
      writer: 'Walking Waste Team',
      time: '9 minggu lalu',
      content:
        'Masyarakat Indonesia seringkali tidak sadar akan pentingnya pemilahan sampah yang akan kita buang. Hal ini disebabkan karena tidak melakukan pemilahan sampah rumah tangga mereka (KataData, 2019) dan 66,8% tidak melakukan pemilahan sampah dan memilih untuk membakar sampah tanpa dipilah sesuai kategorinya (Susenas, 2017)',
      populer: true,
      image: ArticleTwoImg,
    },
    {
      slug: 'dampak-penumpukan-sampah',
      title: 'Dampak penumpukan sampah',
      writer: 'Walking Waste Team',
      time: '5 menit lalu',
      content:
        'Masyarakat Indonesia seringkali tidak sadar akan pentingnya pemilahan sampah yang akan kita buang. Hal ini disebabkan karena tidak melakukan pemilahan sampah rumah tangga mereka (KataData, 2019) dan 66,8% tidak melakukan pemilahan sampah dan memilih untuk membakar sampah tanpa dipilah sesuai kategorinya (Susenas, 2017)',
      populer: false,
      image: ArticleThreeImg,
    },
    {
      slug: 'manfaat-memilah-sampah',
      title: 'Manfaat memilah sampah',
      writer: 'Walking Waste Team',
      time: '15 menit lalu',
      content:
        'Masyarakat Indonesia seringkali tidak sadar akan pentingnya pemilahan sampah yang akan kita buang. Hal ini disebabkan karena tidak melakukan pemilahan sampah rumah tangga mereka (KataData, 2019) dan 66,8% tidak melakukan pemilahan sampah dan memilih untuk membakar sampah tanpa dipilah sesuai kategorinya (Susenas, 2017)',
      populer: false,
      image: ArticleFourImg,
    },
  ];

  const article = articles.find((a) => a.slug === slug);

  return (
    <div className='min-h-screen pb-6' style={{ background: '#236D5E' }}>
      <div
        className='pt-8 rounded-b-xl border-b-8 border-green-800'
        style={{ background: '#90C6B9' }}>
        <div className='px-6'>
          <button>
            <ArrowLeftIcon
              onClick={() => {
                navigate('/articles');
              }}
              className='cursor w-10 h-10'
            />
          </button>
        </div>

        <div className='p-3 mt-12'>
          <img
            src={article?.image}
            className='w-full h-48 object-contain'
            alt=''
          />
        </div>
      </div>

      <div className='px-6'>
        <div className='flex justify-center mt-2'>
          <div className='w-16 h-2 bg-gray-300 rounded-full'></div>
        </div>

        <h1 className='text-3xl font-bold text-white'>{article?.title}</h1>

        <div className='flex justify-between text-semibold text-gray-400 text-lg'>
          <span className='block'>{article?.writer}</span>
          <span className='block'>{article?.time}</span>
        </div>

        <p className='mt-4 text-lg text-gray-50'>{article?.content}</p>

        <div className='flex justify-center'>
          <ChevronDownIcon className='w-16 h-16' style={{ color: '#D4D4C9' }} />
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
