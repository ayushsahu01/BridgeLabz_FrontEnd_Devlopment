import React from 'react';
import './Home.css';
function Home() {
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState('');
    const incrementCount = () => {
        setCount(count + 1);
    }
    const decrementCount = () => {
        setCount(count - 1);
    }   
    const resetCount = () => {
        setCount(0);
    }
    return (
        <div className="home-container">
            <h1>Welcome to Home page</h1>
            <p>Count: {count}</p>
            <div className='button-container'>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            </div>
            <button onClick={resetCount}>Reset</button>
            <div className='input-container'>Name : <input className='input' type="text" placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value)} /></div>
            
            <p>Hii, I am {name} </p>
        </div>
        
    );
}

export default Home;
