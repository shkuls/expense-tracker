import { BrowserRouter  , Route , Routes } from 'react-router-dom';
import './App.css';
import Auth from './pages/auth/index'
import ExTrack from './pages/expense-tracker/index';//If you give name in small caps it will be considered as HTML tag such as <p>, <div> So your component should always be starting with CAPS.


function App() {
  return (
    <div className="App bg">
      <BrowserRouter>
      <Routes>
        <Route path='/exp' element={<ExTrack/>} />
        <Route path='/'  element={<Auth/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
