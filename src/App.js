import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import SocialPanel from './components/SocialPanel';
import FrontPage from './pages/FrontPage';
import Article from './pages/Article';
import Footer from './components/Footer';
import TestPage from './pages/TestPage';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<FrontPage />} />
          <Route path='/article' element={<Article />}
          />
            <Route path='/test' element={<TestPage />}
          />

        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
