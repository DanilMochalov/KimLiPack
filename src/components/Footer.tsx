import React from "react";
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => { 
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="useful-links">
                    <div className="links-column">
                        <ul>
                            <li><a href="#">Link 1</a></li>
                            <li><a href="#">Link 2</a></li>
                            <li><a href="#">Link 3</a></li>
                        </ul>
                    </div>
                    <div className="links-column">
                        <ul>
                            <li><a href="#">Link 4</a></li>
                            <li><a href="#">Link 5</a></li>
                            <li><a href="#">Link 6</a></li>
                        </ul>
                    </div>
                    <div className="social-icons">
                        <a href="#" className="icon">Icon1</a>
                        <a href="#" className="icon">Icon2</a>
                    </div>
                </div>
                <div className="legal-data">
                    <p>&copy; 2024 КимЛиПак. Все права защищены.</p>
                    <p>Адрес: ул. Пушкина, 0, Город: Далёкий, Страна: Великая</p>
                    <p>
                        <Link to="/privacy-policy">Политика конфиденциальности</Link> | 
                        <Link to="/terms-of-service"> Условия использования</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
