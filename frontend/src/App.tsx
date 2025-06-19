import { Routes, Route } from 'react-router'
import Home from './components/Home'
import BoardDetails from './components/BoardDeatils'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './App.css'

const App = () => {
	return (
		<div className="App">
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
