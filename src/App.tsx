import { Outlet } from 'react-router';

function App() {
  return (
    <main>
      <h1 className='bg-blue-500 text-red-500'>Hehe</h1>
      <Outlet />
    </main>
  );
}

export default App;
