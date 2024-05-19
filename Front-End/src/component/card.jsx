import React from 'react';
import { MdDelete, MdEdit } from "react-icons/md";

function Card({text1, text2, description, handleDelete, handleEdit}) {
    return (
        <div >
            <article className="relative flex flex-col drop-shadow-lg overflow-hidden rounded-lg border bg-gradient-to-br from-blue-500 to-green-500">
                <div className="aspect-square overflow-hidden">
                    <img className="w-full h-full object-contain" src="https://tech.alxafrica.com/hs-fs/hubfs/ALX%20Logo-08.png?width=1512&height=926&name=ALX%20Logo-08.png" alt="" />
                </div>
                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div className="mb-2 flex">
                    <p className="mr-3 text-sm font-semibold text-white"><span className='font-bold bg-slate-700 p-1 rounded-md'>EN </span> - {text1}</p>
                </div>
                <h3 className="mb-2 text-sm text-gray-100"><span className='font-bold text-white font-bold bg-slate-700 p-1 rounded-md'>FR </span>- {text2}</h3>
                <p className='text-gray-100 text-xs'>{description}</p>
                <button onClick={handleDelete} className='absolute top-2 left-2 text-white w-6 h-6 bg-slate-800 rounded-[50%] flex justify-center items-center'><MdDelete/></button>
                <button onClick={handleEdit} className='absolute top-2 left-10 text-white w-6 h-6 bg-slate-800 rounded-[50%] flex justify-center items-center'><MdEdit/></button>
                </div>
            </article>     
        </div>
    );
}

export default Card;