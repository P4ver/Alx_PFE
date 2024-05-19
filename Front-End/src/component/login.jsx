import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from './navBar';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/login',
        { username, password },
        { withCredentials: true }
      );

      if (response.status === 200) {
        setMessage('Logged in successfully');
        navigate('/myalxcards'); // Redirect to products page
      }
    } catch (error) {
      setMessage('Invalid credentials');
    }
  };

  return (
    <>
    {/* <NavBar/> */}
        <div className=" mx-auto login-form max-w-[500px]">

      <form onSubmit={handleSubmit} className='relative space-y-3 rounded-md bg-white p-6 shadow-xl lg:p-10 border border-gray-100 m-10'>
        <p className='text-3xl py-2 font-bold'>Login</p>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            className='mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring'
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*********"
            required
            className='mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring'
          />
        </div>
        <button type="submit" className='mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white outline-none focus:ring'>Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    </>

  );
};

export default Login;






// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         'http://localhost:5000/login',
//         { username, password },
//         { withCredentials: true }
//       );

//       if (response.status === 200) {
//         setMessage('Logged in successfully');
//       }
//     } catch (error) {
//       setMessage('Invalid credentials');
//     }
//   };

//   return (
//     <div className="login-form">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/login', {
//         username,
//         password,
//       });

//       if (response.status === 200) {
//         setMessage('Logged in successfully');
//       }
//     } catch (error) {
//       setMessage('Invalid credentials');
//     }
//   };

//   return (
//     <div className="login-form">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default Login;
