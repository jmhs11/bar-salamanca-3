import { Route, Routes } from 'react-router-dom';
import Carta from './pages/Carta';
import Error404 from './pages/Error404';
import Home from './pages/Home';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/carta' element={<Carta />} />
				<Route path='*' element={<Error404 />} />
			</Routes>
		</>
	);
};

export default App;
