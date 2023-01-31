import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import SocialPanel from './components/SocialPanel';
import FrontPage from './pages/FrontPage';
import Article from './pages/Article';
import Footer from './components/Footer';
import TestPage from './pages/FrontPage';
import ArticleDetail from './pages/ArticleDetail';
import { NewsContextProvider } from './context/NewsContext';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <div>

      <BrowserRouter>
        <NewsContextProvider>
          <AuthContextProvider>

            <Navbar />

            <Routes>

              <Route path='/' element={<FrontPage />} />
              <Route path='/article' element={<Article />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/signup' element={<SignUp />} />

              <Route path="/article/:id" element={<ArticleDetail />} />


            </Routes>
            <Footer />
          </AuthContextProvider>
        </NewsContextProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
