import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.scss';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
        <div className="burger-menu-content">
          <nav className="burger-nav">
            <Link to="/" className="menu-item" onClick={closeMenu}>Главная</Link>
            <Link to="/catalog" className="menu-item" onClick={closeMenu}>Каталог</Link>
            <Link to="/blog" className="menu-item" onClick={closeMenu}>Блог</Link>
            <Link to="/privacy-policy" className="menu-item" onClick={closeMenu}>Политика конфиденциальности</Link>
            <Link to="/terms-of-service" className="menu-item" onClick={closeMenu}>Условия использования</Link>
          </nav>
        </div>
        <button className="burger-button" onClick={toggleMenu}>
          <span className="burger-icon"></span>
          <span className="close-icon"></span>
        </button>
      </div>
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default BurgerMenu;
