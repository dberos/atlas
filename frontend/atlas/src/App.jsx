import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home';
import Undergraduates from './pages/Undergraduates';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/undergraduates' element={<Undergraduates/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </Router>
  );
}

export default App;
