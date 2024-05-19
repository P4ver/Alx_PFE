import React from 'react';

function About() {
    return (
    <>
        <div class="mx-auto flex max-w-lg flex-col px-4 py-10 lg:max-w-screen-xl lg:flex-row">
        <div class="max-w-md pr-20 lg:pt-28">
            <img src="https://uploads-ssl.webflow.com/6105315644a26f77912a1ada/63eea844ae4e3022154e2878_Holberton-p-500.png" alt="" />
        </div>
        <div class="">
            <h2 class="mb-10 max-w-lg text-4xl font-bold leading-snug lg:text-5xl lg:leading-snug"><span class="text-indigo-600">About</span> . . .</h2>
            <div class="grid gap-y-12 gap-x-8 lg:grid-cols-2">
            <div>
                <p class="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10">Portfolio Project</p>
                <p class="text-lg text-gray-800">AlxCards is a Portfolio Project for Holberton School, showcasing skills in software engineering and web development.</p>
                <a href="https://www.holbertonschool.com/" target="_blank" className="text-red-600 font-semibold">visit Holberton School.</a>
            </div>
            <div>
                <p class="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10">Inspiration</p>
                <p class="text-lg text-gray-800">AlxCards was inspired by a personal struggle with traditional study methods and a passion for revolutionizing learning.</p>
            </div>
            <div>
                <p class="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10">Timeline</p>
                <p class="text-lg text-gray-800">Developed during my time at Holberton School, AlxCards represents months of dedication to creating an efficient study tool.</p>
            </div>
            <div>
                <p class="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10">AlxCards GitHub Repository</p>
                {/* <p class="text-lg text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nihil reprehenderit laboriosam, exercitationem consectetur deserunt aliquam ab maiores!</p> */}
                <div className='flex justify-center'>
                    <a href="https://github.com/P4ver/Alx_PFE" target="_blank" class="inline-block bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-[60px] rounded-3xl mt-1">
                    GitHub AlxCards Project
                    </a>
                </div>
                <div className='flex justify-center'>

                    <div className='p-2'>
                        <a href="https://www.linkedin.com/in/habti-mohammed" target="_blank" class="inline-block bg-blue-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-3xl mt-1">
                        LinkedIn
                        </a>
                    </div>
                    <div className='p-2'>
                        <a href="https://github.com/P4ver/" target="_blank" class="inline-block bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-3xl mt-1">
                        GitHub
                        </a>
                    </div>
                    <div className='p-2'>
                        <a href="https://twitter.com/mohammed_habti" target="_blank" class="inline-block bg-blue-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-3xl mt-1">
                        Twitter
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>

    </>

    );
}

export default About;