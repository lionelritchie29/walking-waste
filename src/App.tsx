import { useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import DummyNotification from './components/DummyNotification';
import { USER_KEY } from './constant';
import { NotificationContext } from './providers/NotificationProvider';
import { UserContext } from './providers/UserProvider';

function App() {
  const [user, setUser] = useContext(UserContext);
  const [showNotif, setShowNotif] = useContext(NotificationContext);
  const navigate = useNavigate();

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (dimensions.width > 512) {
      alert(
        'This web app is suitable for mobile phone only, if you are on a web browser, than you must open resize the browser width below 512px',
      );
    }
  }, []);

  useEffect(() => {
    configAuth();
  }, []);

  const configAuth = async () => {
    if (localStorage.getItem(USER_KEY)) {
      await setUser(JSON.parse(localStorage.getItem(USER_KEY)!));
    } else {
      navigate('/login');
    }
  };

  if (dimensions.width > 512)
    return (
      <div className='flex flex-col justify-center items-center h-screen text-xs w-1/2 mx-auto'>
        This web app can only be opened on screen less than 512px (mobile only).
        Resize your browser if you are on a web browser and refresh the page!
        <div className='mt-4'>Sorry for the inconvenience 😊</div>
      </div>
    );

  return (
    <>
      <DummyNotification show={showNotif} setShow={setShowNotif} />
      <main className='bg-gray-200 md:min-h-screen'>
        <div className='max-w-md mx-auto'>
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
