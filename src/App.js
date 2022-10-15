import { useEffect, useState } from 'react';
import LoginView from '../src/views/LoginView';
import HomeView from '../src/views/HomeView';
import NavBar from './components/NavBar';

function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setPage('home');
    } else {
      setPage('login');
    }
  }, []);

  return (
    <>
      <NavBar />

      {page === 'home' && <HomeView />}
      {page === 'login' && <LoginView setPage={setPage} />}
    </>
  );
}

export default App;
