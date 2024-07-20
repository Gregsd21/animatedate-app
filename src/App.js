import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './Header'; 
import Footer from './Footer'; 
import Login from './Login'; 
import Profile from './Profile'; 
import SearchResults from './SearchResults'; 
import GuitarSeren from './GuitarSeren.png';
import './App.css';
  
const App = () => { 
  const [user, setUser] = useState(null); 
  const logout = () => {
	  setUser(null);
  };
  const handleLogin = (username) => {
  setUser(username);
 };
  return ( 
    <Router> 
	 <div className="overlay"></div> {GuitarSeren}
      <div className="App"> 
        <Header logout={logout} /> 
        <Routes> 
          <Route path="/" element={<Login setUser={setUser} />} /> 
          <Route path="/profile" element={<Profile user={user} logout={logout} />} /> 
          <Route path="/search-results" element={<SearchResults />} /> 
        </Routes> 
        <Footer /> 
      </div> 
    </Router> 
  ); 
}; 

  
export default App; 