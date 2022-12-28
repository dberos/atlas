import {useLayoutEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation} from 'react-router-dom'
import NavBar from './components/Global/NavBar/NavBar';
import Footer from './components/Global/Footer/Footer';
import Home from './pages/Home';
import Undergraduates from './pages/Undergraduates';
import Companies from './pages/Companies';

function App() {

  // Scroll to top at every redirect
  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
    }, [location.pathname])
    return children;
  } 

  return (
    <Router>
      <Wrapper>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/undergraduates' element={<Undergraduates/>}/>
          <Route path='/companies' element={<Companies/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
        <Footer/>
      </Wrapper>
    </Router>
  );
}

export default App;
