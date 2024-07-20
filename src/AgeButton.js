import React, { useState } from 'react';

function AgeButton() {
	
	const [clicks, setClicks] = useState(18);
	
    const [error, setError] = useState(false);
	
	const increment = () => { if (error) setError(false); setClicks(clicks + 1);
	};
	const decrement = () => { if (clicks > 18) { setClicks(clicks - 1);
	}
	else { 
    setError(true); 
    }
	};
	
 
return (
	<div>
	<h2> Set Age: {clicks} </h2>
	{error && <p>{'Age Must be 18 or Older!'}</p>}
	<button onClick={increment}>Add</button>
	<button onClick={decrement}>Subtract</button>
	<p> Your Age: {clicks}</p>  
	<p>( Must be 18 or Older *) </p>
	</div>
	);
}
export default AgeButton;