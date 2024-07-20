import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import AgeButton from './AgeButton';
import GuitarSeren from './GuitarSeren.png';

const Login = ({ setUser }) => {
 const [username, setUsername] = useState('');
 const [email, setEmail] = useState(''); 
 const [password, setPassword] = useState('');
 const [age, setAge] = useState(18); 
 const navigate = useNavigate(); 
 const [error, setError] = useState('');
 const handleSubmit = (e) => {
 e.preventDefault();
 // Basic validation
 if (!username || !email || !password) {
 setError('Please make sure to fill in all fields');
 return;}
 // Simulate authentication
 if (username === 'Greg' && email === 'grearn6019@students.ecpi.edu' && password === 'password') {
 setUser({ username, email, age }); 
    navigate('/profile'); 
 } else {
 setError('Invalid username, email, or password');
 }
 };

  
 return (
 <div>
 <h2>Login or Create Account</h2>
 {error && <p>{error}</p>}
 <form onSubmit={handleSubmit}>
 <input
 type="text"
 placeholder="Username"
 value={username}
 onChange={(e) => setUsername(e.target.value)}
 />
 <br />
 <input
 type="text"
 placeholder="Email"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 />
 <br />
 <input
 type="password"
 placeholder="Password"
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 />
 <br />
  <div> 
	  <p> Enter Age: </p>
        <AgeButton/> 
      </div> 
 <br />
 <button type="submit" onClick={setUser}>Login</button>
 </form>
 </div>
 );
};
export default Login;