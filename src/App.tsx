import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { PokemonDetails } from './pages/PokemonDetails'
import './styles/style.scss';

const App = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/pokemon-details' element={<PokemonDetails />} />
                <Route path='*' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App