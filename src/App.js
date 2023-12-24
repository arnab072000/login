//import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;

import React, { useState } from "react";

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);


  const handleSudmit = (e) => {
    e.preventDefault();

    if(username === "user" && password === "password"){
      setError("");
      setIsSubmit(true);
    } else {
      setError("Invalid username or password");
      setIsSubmit(false)
    }
  }
  return(
    <div>
      <h1>Login Page</h1>
      { isSubmit ? (
        <div>
          <p>Welcome, {username}!</p>
        </div>
      ) :
      (<form onSubmit={handleSudmit}>
        {error && <p className="error">{error}</p>}
        <div>
          <label htmlFor='username'>Username:</label>
          <input
          type='text'
          id='username'
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          />
        </div>

        <div>
          <label htmlFor='password'>Password:</label>
          <input
          type='text'
          id='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
        </div>

        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>)};
    </div>
  )
}

export default App;
