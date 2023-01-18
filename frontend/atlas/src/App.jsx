import {useLayoutEffect, useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { IsLogged } from './components/Global/NavBar/Login/IsLogged'
import NavBar from './components/Global/NavBar/NavBar';
import Footer from './components/Global/Footer/Footer';
import Home from './pages/Home';
import Undergraduates from './pages/Undergraduates';
import ResultsUndergraduates from './pages/ResultsUndergraduates';
import Companies from './pages/Companies';
import FAQs from './pages/FAQs';
import FAQsUndergraduates from './pages/FAQsUndergraduates';
import FAQsCompanies from './pages/FAQsCompanies';
import Profile from './pages/Profile';
import SavedUndergraduates from './pages/SavedUndergraduates';
import SubmittedUndergraduates from './pages/SubmittedUndergraduates';
import SavedCompanies from './pages/SavedCompanies';
import SubmittedCompanies from './pages/SubmittedCompanies';

function App() {

  const [logged, setLogged] = useState(false);

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

  // Protected routes e.g profile
  const Protected = ({children}) => {
    const email = localStorage.getItem('email');
    return (
      !email ?
        <Navigate to="/" replace/> :
          children
    )
  }

  useEffect(() => {
    const user = localStorage.getItem('email');
    if(user) {
      setLogged(true);
    }
    else {
      setLogged(false);
    }
   }, [setLogged])

  return (
    <Router>
      <Wrapper>
        <IsLogged.Provider value={{logged, setLogged}}>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/undergraduates' element={<Undergraduates/>}/>
            <Route path='/undergraduates/results/:selections' element={<ResultsUndergraduates/>}/>
            <Route path='/companies' element={<Companies/>}/>
            <Route path='/faqs' element={<FAQs/>}/>
            <Route path='/faqs/undergraduates' element={<FAQsUndergraduates/>}/>
            <Route path='/faqs/companies' element={<FAQsCompanies/>}/>
            <Route 
            path='/profile'
            element={
              <Protected>
                <Profile/>
              </Protected>
            }
            />
            <Route 
            path='/profile/undergraduates/saved'
            element={
              <Protected>
                <SavedUndergraduates/>
              </Protected>
            }
            />
            <Route 
            path='/profile/undergraduates/submitted'
            element={
              <Protected>
                <SubmittedUndergraduates/>
              </Protected>
            }
            />
            <Route 
            path='/profile/companies/saved'
            element={
              <Protected>
                <SavedCompanies/>
              </Protected>
            }
            />
            <Route 
            path='/profile/companies/submitted'
            element={
              <Protected>
                <SubmittedCompanies/>
              </Protected>
            }
            />
            <Route path='*' element={<Navigate to='/'/>}/>
          </Routes>
          <Footer/>
        </IsLogged.Provider>
      </Wrapper>
    </Router>
  );
}

export default App;
