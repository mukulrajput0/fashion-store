//   import React from 'react'
// //  import A from "../assets/image/shoes/shoes.jpg"

//   import { IoLocation } from "react-icons/io5";
// import { useParams } from 'react-router-dom';
// import { t1 } from './FullDress';
// import { LuShoppingBag } from "react-icons/lu";
// import { useDispatch } from 'react-redux';
// import { addToCard } from '../slice/counterSlice';

//   const FullDressDummy = () => {
//     const  {id} =useParams()
//     const pro1=t1.find((item)=>item.id===parseInt(id))
//     const dispatch = useDispatch();
//   const sizes = ["S", "M", "L", "XL", "2XL", "3XL"];

//     return (
//       <div className='flex shadow-xl/30 flex bg-white w-320 ml-75 gap-8 mt-8 mb-20'>
//         <div>
//             <img className='object-contain w-220 h-180 ml-16 mt-7 mb-30  rounded-lg ' src={pro1.image} alt="" />
//           </div>
//         {/* <div className=' shadow-xl/30 flex bg-red-500 w-320 ml-75 gap-8 mt-8 mb-20' > */}
//             <div className='mr-20 mt-5 '>
//               <span className='text-black-500 font-semibold text-4xl ml-3'>{pro1.name}</span>
//               <p className='text-black font-thin mt-1 text-1xl ml-3'>{pro1.title}</p>
//               {/* <span className='text-black-400 text-3xl line-through'>{pro1.title}</span> */}

//               <div className='flex'>
//                 <p className='text-black-500 mt-5 font-bold text-2xl ml-3' >₹{pro1.Price}</p>
//                 <p className='text-black font-thin mt-6 text-1xl ml-1 line-through '>₹{pro1.price}</p>
//               <p className='text-black-500 mt-7 ml-1 font-bold text-green-700 text-2xl' >{pro1.Discount}</p>
//               </div>

//                  <span className='text-black  lg:text-sm mt-4 ml-3'>inclusive of all taxes</span><br />

//              <div className='flex gap-2 ml-3'>
//                 <p className='text-black font-semibold border border-sm border-black border-line w-50 h-10 text-center py-1'>DESIGN OF THE WEEK</p>
//                 <p className='text-black font-semibold border border-sm border-black border-line w-36 h-10 text-center py-1'>100% COTTON</p>
//              </div>

//          <div className="w-full ml-3">
//       <div className="flex items-center justify-between mb-4">
//         <span className="font-semibold text-base text-black">Select Size</span>
//         <div className="cursor-pointer">
//           <span className="font-semibold text-sm text-[#207BB4]">
//             SIZE GUIDE
//           </span>
//         </div>
//       </div>

//       <div className="flex gap-3 overflow-x-auto hide-scrollbar">
//         {sizes.map((size) => (
//           <label
//             key={size}
//             data-testid={`size-${size}`}
//             className="px-4 py-2 border rounded-md cursor-pointer hover:bg-gray-100 text-sm font-medium"
//           >
//             {size}
//           </label>
//         ))}
//       </div>
//     </div>
           
//        <div className='flex'>
//             <button onClick={()=> dispatch(addToCard(pro1))} className="flex  gap-2 bg-yellow-400 ml-3 border hover:bg-yellow-300 text-black font-semibold py-2 px-6 rounded mt-4 "><LuShoppingBag className="w-35 h-5 " />ADD TO BAG</button>
//                 <button className="bg-white-900 border w-47 ml-2 hover:bg-gray-200 text-black font-semibold py-2 px-4 rounded mt-4"> WISHLIST
//                </button>
//        </div>
//        <div className='flex items-center mt-5 ml-2'>
//       <span className='text-2xl'><IoLocation /></span>
//       <span className='ml-4 font-semibold text-2xl '>Check for Delivery Details</span>
//        </div>
//      <form className='flex ml-[-1rem] mb-5'>
//        <input className=" bg-yellow-400 ml-10 border text-black font-semibold py-2 px-35 rounded mt-4" type="text" name='pincode' maxLength="6" placeholder='Enter Pincode'/>
//       <button className='mt-3 font-semibold ' type='submit'><span className='ml-[-5rem]'>Check</span></button>
//      </form>
//      <div className='ml-6 w-120 '>
//          <p className='bg-blue-300 w-120 h-9 text-center  rounded'>This product is eligible for FREE SHIPPING</p>
//      </div>
//      <p className='ml-6 mt-2 font-semibold text-2xl '>Save extra with these offers</p>

            
//              <div>
//                 <button className=" ml-7 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 w-58 px-4 rounded mt-7">Buy Now </button>
//                 <button onClick={()=> dispatch(addToCard(pro1))}  className="ml-2 bg-#008C2D-600 bg-red-500 hover:bg-green-700 text-white font-semibold w-54 py-2 px-4 rounded mt-7"> Add to Cart
//                </button>
//              </div>

//             </div>

//         {/* </div> */}
//       </div>
//     )
//   }

//   export default FullDressDummy
