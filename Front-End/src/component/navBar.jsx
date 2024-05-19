import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function NavBar({checkData}) {
    const navigate = useNavigate();

    const handleLogout = async () => {
      try {
        await axios.post('http://localhost:5000/logout', {}, { withCredentials: true });
        navigate('/login'); // Redirect to login page after logout
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };
    return (
        <div>
            
                <header class="relative flex w-screen-xl flex-col overflow-hidden px-4 py-4 text-blue-700  shadow-md md:mx-auto md:flex-row md:items-center ">
                    <a href="#" class="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black text-blue-800">
                    P4VER
                    </a>
                    <input type="checkbox" class="peer hidden" id="navbar-open" />
                    <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
                        <span class="sr-only">Toggle Navigation</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <nav aria-label="Header Navigation" class="flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all peer-checked:mt-8 peer-checked:max-h-56 md:ml-24 md:max-h-full md:flex-row md:items-start">
                    <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
                        <li class="font-bold md:mr-12"><a href="/">Home</a></li>
                        {/* <li class="md:mr-12"><a href="#about">About Us</a></li> */}
                        <li className='md:mr-12'><Link to="/#about">About</Link></li>
                        <li className='md:mr-12'><Link to="/#features">Features</Link></li>
                        {/* <li class="md:mr-12"><a href="#features">Features</a></li> */}
                        <li class="md:mr-12"><a href="/myalxcards">My alxCards</a></li>
                        {/* <li class="md:mr-12"><a href="/login">login</a></li> */}
                        
                        <li class="md:mr-12">
                            {checkData == 200
                            ? 
                                <button onClick={handleLogout}>Logout</button>
                            :
                            <a href="/login">login</a>
                            } 
                        </li>
                    </ul>
                    </nav>
                </header>
        </div>
    );
}

export default NavBar;