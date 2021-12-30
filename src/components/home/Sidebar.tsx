import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/solid';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { USER_KEY } from '../../constant';
import { UserContext } from '../../providers/UserProvider';
import { useNavigate } from 'react-router-dom';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const links = [
    {
      title: 'Notifikasi',
      to: '/',
    },
    {
      title: 'Point and Reward',
      to: '/rewards',
    },
    {
      title: 'Alamat Tersimpan',
      to: '/saved-address',
    },
    {
      title: 'Riwayat',
      to: '/history',
    },
    {
      title: 'Pusat Bantuan',
      to: '/help-center',
    },
  ];

  return (
    <div
      className={`absolute top-0 left-0 w-full h-screen bg-custom-green transition-all duration-200 ${
        isOpen ? '' : '-translate-x-full'
      }`}>
      <div>
        <ChevronLeftIcon
          onClick={() => setIsOpen(!isOpen)}
          className='cursor w-10 h-10 text-white absolute top-6 left-4'
        />
      </div>

      <div className='flex mt-20 justify-center items-center'>
        <div>
          <img
            className='w-28 ring-4 ring-green-900 rounded-full'
            src='https://i.pravatar.cc/300'
            alt=''
          />
        </div>

        <div className='ml-4'>
          <h2 className='text-custom-blue font-semibold text-3xl'>
            {user?.name}
          </h2>
          <Link to='/' className='text-gray-50 text-lg'>
            Edit Profil
          </Link>
        </div>
      </div>

      <div className='grid grid-cols-1 mt-10'>
        {links.map((link) => (
          <Link key={link.title} to={link.to}>
            <div
              className='text-white text-xl py-6 px-12 flex justify-between items-center'
              style={{ borderBottom: '1px solid #444' }}>
              {link.title}
              <div>
                <ChevronRightIcon className='font-normal w-8 h-8' />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className='mt-4 text-center'>
        <button
          onClick={() => {
            navigate('/login');
            localStorage.removeItem(USER_KEY);
            setUser(null);
          }}
          className='bg-red-500 text-white w-3/4 hover:bg-red-600 px-4 py-2 rounded-full'>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
