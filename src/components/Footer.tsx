import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="legal-data">
					<p>&copy; 2024 КимЛиПак. Все права защищены.</p>
					<p>Адрес: ул. Пушкина, 0, Город: Далёкий, Страна: Великая</p>
					<p>
						<Link to="/privacy-policy">Политика конфиденциальности</Link> |
						<Link to="/terms-of-service"> Условия использования</Link>
					</p>
				</div>
				<div className='footer-links'>
					<ul className='links-out'>
						<li><a href="">Как подобрать машину?</a></li>
						<li><a href="">Что делать?</a></li>
						<li><a href="">Как дышать?</a></li>
						<li><a href="https://www.drive2.ru/l/637731313712905767/">Как я покупал авто в Корее</a></li>
						<li><a href="">Не знаю</a></li>
						<li><a href="https://www.drive2.ru/b/680459160202001964/">Записки перекупа #100</a></li>
					</ul>
				</div>
				<div className='social-links'>
					<a href="#" aria-label="YouTube">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
							<path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"/>
						</svg>
					</a>
					<a href="#" aria-label="WhatsApp">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
							<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"/>
							<path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"/>
						</svg>
					</a>
					<a href="#" aria-label="Telegram">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
							<path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"/>
						</svg>
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
