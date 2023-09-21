import './styles/index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
      return (
            <BrowserRouter>
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                              path="/FicheLogement"
                              element={<FicheLogement />}
                        />
                        <Route path="/About" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                  </Routes>
            </BrowserRouter>
      );
}

export default App;
