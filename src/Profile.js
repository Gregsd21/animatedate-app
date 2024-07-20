import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 

const Profile = ({ user, logout }) => { 
  const [hobbies, setHobbies] = useState([]); 
  const [newHobby, setNewHobby] = useState(''); 
  const navigate = useNavigate(); 
  
  const addHobby = () => { 
    setHobbies([...hobbies, newHobby]); 
    setNewHobby(''); 
  }; 

  const handleKeyPress = (e) => { 
    if (e.key === 'Enter') { 
      addHobby(); 
    } 
  }; 

  const searchCompanions = () => { 
    navigate('/search-results'); 
  }; 
  
  const handleLogout = () => {
	  logout();
	  navigate('/');
  };

  return ( 
    <div> 
      <h2>Welcome to your profile, {user.username}!</h2> 
      <div> 
        <h3>List your Hobbies and Likes here</h3> 
        <input 
          type="text" 
          placeholder="Enter hobby or like" 
          value={newHobby} 
          onChange={(e) => setNewHobby(e.target.value)} 
          onKeyPress={handleKeyPress} 
        /> 
        <button onClick={addHobby}>Add</button> 
        <div> 
          {hobbies.map((hobby, index) => ( 
            <p key={index}>{hobby}</p> 
          ))} 
        </div> 
      </div> 
      <div> 
        <h3>Find your 2D companion</h3> 
        <input type="text" placeholder="Search by city and state" /> 
        <button onClick={searchCompanions}>Search</button> 
      </div> 
    </div> 
  ); 
}; 
  
export default Profile; 