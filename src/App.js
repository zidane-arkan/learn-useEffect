import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

const data = [
  {
  id: '1'
  },
  {
  id: '2',
  }
];
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkLogin = localStorage.getItem('sudahLogin');
  useEffect(() => {
    if (checkLogin === '1') {
      setIsLoggedIn(true);
    }
  }, [checkLogin]);
  const loginHandler = (email, password) => {
    localStorage.setItem('sudahLogin', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('sudahLogin', '0');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
