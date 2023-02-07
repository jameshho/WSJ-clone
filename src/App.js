import './index.scss'
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
import Account from './pages/Account';
import ProtectedRoute from './hooks/ProtectedRoute';
import TryArticle from './pages/TryArticle';
import TestShowArticle from './pages/TestShowArticle';
import TryNewStuff from './pages/TryNewStuff';
import ArticleDetailFirebase from './pages/ArticleDetailFirebase';
import ScrollToTop from './context/ScrollToTop';


function App() {
  return (
    <div>

      <BrowserRouter>
        <NewsContextProvider>
          <AuthContextProvider>

            <Navbar />
            <ScrollToTop>

              <Routes>

                <Route path='/' element={<FrontPage />} />
                <Route path='/article' element={<Article />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
                <Route path="/tryarticle" element={<TryArticle />} />
                <Route path="/testshowarticle" element={<TestShowArticle />} />
                <Route path="/trynewstuff" element={<TryNewStuff />} />



                <Route path="/article/:id" element={<ArticleDetail />} />
                {/* <Route path="/testshowarticle/:id" element={<ArticleDetailFirebase/>} /> */}
                <Route path="/testshowarticle/:id" element={<TestShowArticle />} />


              </Routes>
            </ScrollToTop>
            <Footer />
          </AuthContextProvider>
        </NewsContextProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
