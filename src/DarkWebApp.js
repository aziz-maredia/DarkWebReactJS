import React from 'react';
import './DarkWebApp.css';
import Menu from './Menu';
import Main from './Main';

function DarkWebApp() {
  return (

  <header>
      <div className="menu-container">
          <Menu />
      </div>
      <main>
          <Main />
      </main>
	</header>
  );
}

export default DarkWebApp;
