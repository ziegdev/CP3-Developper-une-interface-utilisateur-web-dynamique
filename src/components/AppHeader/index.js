import React from 'react';
<<<<<<< HEAD

=======
import LoginForm from 'src/containers/LoginForm';
import logo from 'src/assets/logo.png';
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
import './style.scss';

const AppHeader = () => (
  <header className="header">
<<<<<<< HEAD
    <img src="src/assets/logo.png" className="header-logo" alt="Logo oRecipes" />
=======
    <img src={logo} className="header-logo" alt="Logo oRecipes" />
    <LoginForm />
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
  </header>
);

export default AppHeader;
