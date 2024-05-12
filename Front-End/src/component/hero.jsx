import React from 'react';

function Hero(props) {
    return (
        <div>
            
            <div class="lg:bg-[linear-gradient(90deg,_white_40%,blue)] h-screen">
            <header class="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-white md:mx-auto md:flex-row md:items-center">
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
                    <li class="font-bold md:mr-12"><a href="#home">Home</a></li>
                    <li class="md:mr-12"><a href="#">About Us</a></li>
                    <li class="md:mr-12"><a href="#">Features</a></li>
                </ul>
                </nav>
            </header>

            <div class="mx-auto mt-20 px-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 home">
                <div class="flex flex-col items-center justify-between lg:flex-row">
                <div class="lg:max-w-lg lg:pr-5">
                    <div class="max-w-xl">
                    <h2 class="mb-6 max-w-lg text-3xl leading-snug tracking-tight text-blue-600 sm:text-5xl sm:leading-snug">
                        <span class="my-1 inline-block font-serif font-bold text-5xl text-blue-600">AlxCards</span>
                        
                    </h2>
                    <p class="text-base text-gray-700">Personalized Flashcards for Effortless Learning</p>

                    <div>
                        <a href="https://github.com/P4ver/Alx_PFE" target="_blank" class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl m-4">
                        Explore AlxCards
                        </a>
                    </div>

                    </div>
                </div>
                <div class="relative text-blue-600 lg:ml-32 lg:w-1/2 hidden lg:block">
                    <div class="border-b-8 border-b-blue-600 max-w-lg mx-auto mb-10">
                    <img class="w-full h-full object-contain" src="https://tech.alxafrica.com/hs-fs/hubfs/ALX%20Logo-08.png?width=1512&height=926&name=ALX%20Logo-08.png" alt="" />
                    {/* <img class="w-full h-full object-contain" src="/images/sisa0dVB-OE35qZ9CRvF2.png" alt="" /> */}
                    </div>
                </div>
                </div>
            </div>
            </div> 

        </div>
    );
}

export default Hero;