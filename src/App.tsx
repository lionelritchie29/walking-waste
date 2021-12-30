import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { USER_KEY } from './constant';
import { UserContext } from './providers/UserProvider';

function App() {
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.innerWidth > 512) {
      alert('This web app is suitable for mobile phone only');
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

  return (
    <main className='bg-gray-200 md:min-h-screen'>
      <div className='max-w-md mx-auto'>
        <Outlet />
      </div>
    </main>
  );
}

export default App;
