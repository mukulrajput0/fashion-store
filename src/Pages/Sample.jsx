  import React from 'react'
 import A from "../assets/image/shoes/shoes.jpg"

  import { IoLocation } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import { a } from './Man';

  const Sample = () => {
    const  {id} =useParams()
    const pro=a.find((item)=>item.id===parseInt(id))
    return (
      <div >
        <div className=' shadow-xl/30 flex bg-white-500 w-330 ml-70 gap-8 mt-20' >
        <div>
            <img className='object-contain sc w-200 h-160 ml-10 mt-10 mb-30 rounded-lg ' src={pro.image} alt="" />
            </div>
            <div>
              <p className='text-black-500 mt-8 font-bold text-3xl' >{pro.Price}</p>
              <p className='text-black-500  text-1xl' >{pro.Discount}</p>
              <span className='text-black-500 text-5xl'>qwert</span>
              <span className='text-black-400 text-3xl line-through'>wertq</span>
                 <span className='text-blue-500 mt-8 font-bold text-3xl'>regwe</span><br />
                 <p className='text-gray-400'>inclusive of all taxes</p>
              <button className='bg-green-300 w-30 mt-10' type="submit">BUY 3 for 10000</button>
            <button className='bg-gray-200 w-30 ml-2 mt-10' type="submit">100 % Orignal</button>
              <p className='text-black-500 text-2xl mt-10'>Select Size</p>
           <div className='flex space-x-2'>
            <button className='w-14 h-10 bg-white-10 border mt-3 hover:bg-blue-500'>S</button>
            <button className='w-14 h-10 bg-white-10 border mt-3 hover:bg-gray-500'>M</button>
            <button className='w-14 h-10 bg-white-10 border mt-3 hover:bg-green-500'>L</button>
          <button className='w-14 h-10 bg-white-10 border mt-3 hover:bg-orange-500'>XL</button>
            <button className='w-14 h-10 bg-white-10 border mt-3 hover:bg-red-500'>S</button>
            <button className='w-14 h-10 bg-white-10 border mt-3 hover:bg-yellow-500'>S</button>
           </div>
           
       <div>
            <button className="bg-yellow-400 border hover:bg-yellow-300 w-47 text-black font-semibold py-2  px-4 rounded mt-4">ADD TO BAG </button>
                <button className="bg-white-900 border w-47 ml-2 hover:bg-gray-200 text-black font-semibold py-2 px-4 rounded mt-4"> WISHLIST
               </button>
       </div>
       <div className='flex items-center mt-5'>
      <span className='text-2xl'><IoLocation /></span>
      <span className='ml-4 font-bold text-1xl '>Check for Delivery Details</span>
       </div>
              {/* <p className='text-2xl'>Select Size:</p>
              <input className='border border-black p-2 w-60' type="number" name="number" id="number" /> */}
              {/* <p className='text-2xl'>Quantity:</p> */}
              {/* <input className='border border-black p-2 w-40' type="number" name="number" id="number" /> */}
              {/* <input type="text" name="" id="" /> */}
               <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2  px-4 rounded mt-30">Buy Now </button>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded mt-30"> Add to Cart
               </button>

            </div>

        </div>
      </div>
    )
  }

  export default Sample
