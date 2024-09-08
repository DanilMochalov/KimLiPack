import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
	return (
		<header className="header">
			<div className="header-logo">
				<Link to="/">Logo</Link>
			</div>
			<nav className="header-nav">
				<Link to="/">Главная</Link>
				<Link to="/catalog">Каталог</Link>
				<Link to="/blog">Блог</Link>
			</nav>
			<button className="header-button">Заказать</button>
		</header>
	)
}

export default Header
