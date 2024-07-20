import React from 'react'; 
import { useNavigate } from 'react-router-dom';

const Header = ({ logout }) => {
	const navigate = useNavigate();
	const handleLogout = ()=> {
		logout();
		navigate('/');
	};
	return (
  <header> 
    <h1>AnimateDate! Meet your perfect person in 2D By grearn6019-project-app</h1> 
	<button onClick={handleLogout}>Logout</button>
  </header> 
); 
};
 
export default Header; 