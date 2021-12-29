import { ChevronLeftIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid';
import React from 'react';
import { useNavigate } from 'react-router';

interface Props {}

const HelpCenterPage = (props: Props) => {
  const navigate = useNavigate();

  const faqs = [
    {
      title: 'Barang terbawa oleh petugas?',
    },
    {
      title: 'Bagaimana cara mengakses settings?',
    },
    {
      title: 'Bagaimana cara mengubah alamat penjemputan',
    },
    {
      title: 'Bagaimana cara menghubungi petugas?',
    },
  ];

  return (
    <div className='bg-white px-6 pt-8 pb-6 bg-custom-dark text-white min-h-screen relative'>
      <div className='flex justify-between'>
        <button>
          <ChevronLeftIcon
            onClick={() => {
              navigate('/');
            }}
            className='cursor w-10 h-10'
          />
        </button>
        <h1 className='font-bold text-3xl text-center'>Pusat Bantuan</h1>
        <div></div>
      </div>

      <div>
        <input
          type='text'
          className='w-full border border-green-600 px-3 py-2 rounded-lg text-gray-800 mt-10'
          placeholder='Ketik pertanyaan anda disini'
        />
      </div>

      <h2 className='font-bold text-lg mt-4'>Pertanyaan umum:</h2>

      <div className='grid grid-cols-2 gap-4 mt-2'>
        {faqs.map((q) => (
          <div className='bg-white shadow border border-green-800 p-4 font-semibold text-custom-green rounded-xl'>
            {q.title}
          </div>
        ))}
      </div>

      <h2 className='font-bold text-lg mt-4'>Kritik dan Saran:</h2>
      <textarea
        rows={3}
        className='w-full rounded-xl p-2 text-gray-800 border border-green-800'
        placeholder='Anda bisa ketik disini'></textarea>

      <div className='absolute bottom-0 left-0 w-full p-4 flex justify-between items-end'>
        <div>
          <span className='block font-bold'>Call Center</span>
          <span className='block'>
            <PhoneIcon className='inline w-4 h-4 mr-1 -mt-1' />
            (021) 64555
          </span>
        </div>

        <div>
          <span className='block'>
            <MailIcon className='inline w-4 h-4 mr-1 -mt-1' />
            0877 8888 8888
          </span>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;
