import Dashboard from './components/Dashboard'
import { Routes, Route } from "react-router"
import Home from './components/Home'
import BoardDetails from './components/BoardDeatils'

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/details/:id' element={<BoardDetails />} />
				<Route path='*' element={<p>404</p>} />
			</Routes>
		</div>
	)
}

export default App
