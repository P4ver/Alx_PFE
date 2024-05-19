import React from 'react';
import img from './pictures/alxcard.png';
import img2 from './pictures/createpost.png'
import img3 from './pictures/3.png'
function Features(props) {
    return (
        <div>
            <section class="mx-auto max-w-screen-xl  py-12 text-blue-900 sm:py-16 lg:py-20">
            <div class="mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-2xl text-center">
                <p class="text-sm font-medium text-blue-700">Features</p>
                <h2 class="mt-2 text-3xl font-bold sm:text-4xl xl:text-5xl">AlxCards </h2>
                </div>

                <div class="mt-10 grid grid-cols-1 gap-y-10 text-center sm:mx-auto sm:max-w-sm md:mt-20 md:max-w-full md:grid-cols-3 md:gap-x-6 md:text-left lg:gap-x-16">
                <div class="">
                    <h3 class="text-2xl font-bold">Easy Creation</h3>
                    <img class="mx-auto h-56 w-fit max-w-full bg-blue-600 object-contain mt-4 border-l-[20px] border-blue-600" src={img2} />
                    <p class="mt-6 text-base text-blue-800">Quickly create flashcards with AlxCards' user-friendly interface. Simply input your questions and answers, and you're ready to study!</p>
                </div>

                <div class="">
                    <h3 class="text-2xl font-bold">On-the-Go Study</h3>
                    <img class="mx-auto h-56 w-fit max-w-full bg-blue-600 object-contain mt-4 border-l-[20px] border-blue-600" src={img3} alt="" />
                    <p class="mt-6 text-base text-blue-800">Access your flashcards anytime, anywhere. AlxCards is compatible with all devices, allowing you to study on-the-go.</p>
                </div>

                <div class="">
                    <h3 class="text-2xl font-bold">Customizable Design</h3>
                    <img class="mx-auto h-56 w-fit max-w-full bg-blue-600 object-contain mt-4 border-l-[20px] border-blue-600" src={img} alt="" />
                    <p class="mt-6 text-base text-blue-800">Personalize your flashcards with customizable design options. Change colors, fonts, and layouts to suit your preferences and enhance your learning experience.</p>
                </div>
                </div>
            </div>
            </section>

        </div>
    );
}

export default Features;