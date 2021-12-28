import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <main className='max-w-3xl'>
      <ToastContainer />
      <Outlet />
    </main>
  );
}

export default App;
