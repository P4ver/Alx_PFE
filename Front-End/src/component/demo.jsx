import React from 'react';

const Demo = () => {
    return (
        <div >
            <section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-md text-center">
      <h2 class="font-serif text-2xl font-bold sm:text-3xl">AlxCards</h2>
    </div>

    <div class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">

    <article class="relative flex flex-col overflow-hidden rounded-lg border bg-gradient-to-br from-blue-500 to-green-500">
        <div class="aspect-square overflow-hidden">
          <img class="w-full h-full object-contain" src="https://tech.alxafrica.com/hs-fs/hubfs/ALX%20Logo-08.png?width=1512&height=926&name=ALX%20Logo-08.png" alt="" />
        </div>

        {/* <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold text-white"><span className='font-bold bg-slate-700 p-1 rounded-md'>EN </span> - RTFM</p>
          </div>
          <h3 class="mb-2 text-sm text-gray-100"><span className='font-bold text-white-500 font-bold bg-slate-700 p-1 rounded-md '>FR </span>- Lisez le **** manuel.</h3>
        <p className='text-gray-100 text-xs'>Read The Fucking Manual</p>
        </div> */}


        <button class="group mx-auto mb-2 flex h-[150px] w-[150px] items-stretch overflow-hidden rounded-full text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-3xl uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
        </button>
      </article>
      

      <article class="relative flex flex-col overflow-hidden rounded-lg border bg-gradient-to-br from-blue-500 to-green-500">
        <div class="aspect-square overflow-hidden">
            <img class="w-full h-full object-contain" src="https://tech.alxafrica.com/hs-fs/hubfs/ALX%20Logo-08.png?width=1512&height=926&name=ALX%20Logo-08.png" alt="" />
        </div>
        {/* <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div> */}
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold text-white"><span className='font-bold text-white-500 bg-slate-700 p-1 rounded-md'>EN </span> - Market Segmentation</p>
            {/* <del class="text-xs text-gray-400"> $79.00 </del>  */}
          </div> 
          <h3 class="mb-2 text-sm text-gray-100"><span className='font-bold text-white-500 font-bold bg-slate-700 p-1 rounded-md'>FR </span>- Segmentation du marché </h3>
        <p className='text-gray-100 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestias voluptates numquam, ipsa sit ducimus itaque blanditiis error illo saepe, veritatis nemo quibusdam accusamus placeat nisi sunt earum vitae neque?.</p>
        </div>

        {/* <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>  */}
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border bg-gradient-to-br from-blue-500 to-green-500">
        <div class="aspect-square overflow-hidden">
                    <img class="w-full h-full object-contain" src="https://tech.alxafrica.com/hs-fs/hubfs/ALX%20Logo-08.png?width=1512&height=926&name=ALX%20Logo-08.png" alt="" />
        </div>
        {/* <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div> */}
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold text-white"><span className='font-bold bg-slate-700 p-1 rounded-md'>EN </span> - Do Hard Things</p>
            {/* <del class="text-xs text-gray-400"> $79.00 </del> */}
          </div>
          <h3 class="mb-2 text-sm text-gray-100"><span className='font-bold text-white-500 font-bold bg-slate-700 p-1 rounded-md'>FR </span>- ALX</h3>
          <p className='text-gray-100 text-xs'>an innovative educational platform empowering young Africans with essential skills, leadership qualities, and networks to thrive in the 21st-century job market.</p>
        </div>
        {/* <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button> */}
      </article>
      

      <article class="relative flex flex-col overflow-hidden rounded-lg border bg-gradient-to-br from-blue-500 to-green-500">
        <div class="aspect-square overflow-hidden">
                    <img class="w-full h-full object-contain" src="https://tech.alxafrica.com/hs-fs/hubfs/ALX%20Logo-08.png?width=1512&height=926&name=ALX%20Logo-08.png" alt="" />
        </div>

        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold text-white"><span className='font-bold bg-slate-700 p-1 rounded-md'>EN </span> - Strategic Alliances</p>
            {/* <del class="text-xs text-gray-400"> $79.00 </del> */}
          </div>
          <h3 class="mb-2 text-sm text-gray-100"><span className='font-bold text-white-500 font-bold bg-slate-700 p-1 rounded-md'>FR </span>- Alliances stratégiques</h3>
          <p className='text-gray-100 text-xs'>Collaborative agreements between two or more organizations to pursue mutual goals while remaining independent entities.</p>
        </div>
        {/* <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button> */}
      </article>
      
    </div>
  </div>
</section>

        </div>
    );
};

export default Demo;