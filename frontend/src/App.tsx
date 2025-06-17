import Dashboard from './components/Dashboard'
import { Routes, Route } from "react-router"
import Home from './components/Home'

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='*' element={<p>404</p>} />
			</Routes>
		</div>
	)
}

export default App
