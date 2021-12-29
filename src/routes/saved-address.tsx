import { ChevronLeftIcon, HomeIcon, PhoneIcon } from '@heroicons/react/solid';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../providers/UserProvider';
import SavedAddressFooterImg from '../images/saved_address_footer.png';

interface Props {}

const SavedAddressPage = (props: Props) => {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);

  return (
    <>
      <div className='bg-custom-dark px-6 pt-8 pb-6 text-white'>
        <div className='flex justify-between items-center'>
          <button>
            <ChevronLeftIcon
              onClick={() => {
                navigate('/');
              }}
              className='cursor w-6 h-6'
            />
          </button>
          <h1 className='font-bold text-xl text-center'>Alamat Tersimpan</h1>
          <div></div>
        </div>

        <form className='mt-12'>
          <h2 className='text-lg'>
            Kontak <PhoneIcon className='inline w-4 h-4 -mt-1' />
          </h2>

          <div className='space-y-3 mt-4 text-gray-800'>
            <input
              type='text'
              className='block border border-gray-700 rounded-md px-3 py-1 w-full'
              placeholder='Nama Lengkap'
              value={user?.name}
            />

            <input
              type='text'
              className='block border border-gray-700 rounded-md px-3 py-1 w-full'
              placeholder='Nomor Handphone'
              value={user?.phone}
            />
          </div>
        </form>

        <form className='mt-6'>
          <h2 className='text-lg'>
            Alamat <HomeIcon className='inline w-4 h-4 -mt-1' />
          </h2>

          <div className='space-y-3 mt-4 text-gray-800'>
            <input
              type='text'
              className='block border border-gray-700 rounded-md px-3 py-1 w-full'
              placeholder='Provinsi, Kota, Kecamatan, Kode Pos'
              value={`${user?.address.ward}, ${user?.address.district}, ${user?.address.postal_code}`}
            />

            <input
              type='text'
              className='block border border-gray-700 rounded-md px-3 py-1 w-full'
              placeholder='Nama Jalan, Gedung, No. Rumah'
              value={`${user?.address.street}, RT ${user?.address.rt}, RW ${user?.address.rw}`}
            />

            <input
              type='text'
              className='block border border-gray-700 rounded-md px-3 py-1 w-full'
              placeholder='Detail Lainnya (Cth: Blok/Unit, No. Patokan)'
              value={user?.address.address_detail}
            />
          </div>
        </form>
      </div>
      <div className='bg-white'>
        <img src={SavedAddressFooterImg} className='w-full' alt='' />
      </div>
    </>
  );
};

export default SavedAddressPage;
