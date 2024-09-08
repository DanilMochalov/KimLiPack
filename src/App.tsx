import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Blog from './pages/Blog'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/catalog" element={<Catalog />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				<Route path="/terms-of-service" element={<TermsOfService />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
