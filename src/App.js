import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import data from './data'

import LandingPage from './components/LandingPage'
import Main from './components/HomePage'
import Login from './components/LoginPage'
import SignUp from './components/RegisterPage'
import List from './components/List'
import Book from './components/Book'


function App() {

  return (  
    <Router>
    <div>
      <Routes>
            {/* <Route path="/" element={<LandingPage />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/" element={<Main />}></Route>
            <Route path="/List" element={<List />}></Route>
            <Route path="/Book" element={<Book />}></Route>
            
      </Routes>
    </div>
    </Router>
    // <LandingPage />
  );
}

export default App;
