import { Routes, Route } from 'react-router'
import Home from './components/Home'
import BoardDetails from './components/BoardDeatils'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './App.css'
import { useEffect, useState } from 'react'

const App = () => {
	const [darkMode, setDarkMode] = useState(false)

	useEffect(() => {
		const root = document.documentElement
		if (darkMode) {
			root.classList.add('dark')
		} else {
			root.classList.remove('dark')
		}
	}, [darkMode])

	return (
		<div className="App">
			<button
				className="dark-light-toggle"
				onClick={() => setDarkMode(!darkMode)}
			>
				Toggle {darkMode ? 'Light' : 'Dark'}
			</button>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/details/:id" element={<BoardDetails />} />
				<Route path="*" element={<p>404</p>} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
