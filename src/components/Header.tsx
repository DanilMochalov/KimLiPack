import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
	return (
		<header className="header">
			<div className="header-logo">
				<Link to="/">
					<img src="/path/to/logo.png" alt="Company Logo" />
				</Link>
			</div>
			<nav className="header-nav">
				<Link to="/" className="menu-item">
					Главная
				</Link>
				<Link to="/catalog" className="menu-item">
					Каталог
				</Link>
				<Link to="/blog" className="menu-item">
					Блог
				</Link>
			</nav>
			<button className="order-button">Заказать</button>
		</header>
	)
}

export default Header
