import React from 'react'

import Img12 from "../assets/image/hall-pent/1.png"
import Img13 from "../assets/image/hall-pent/2.png"
import Img14 from "../assets/image/hall-pent/3.png"
import Img15 from "../assets/image/hall-pent/4.png"
import Img16 from "../assets/image/hall-pent/5.png"
import Img17 from "../assets/image/hall-pent/6.png"
import Img18 from "../assets/image/hall-pent/7.png"
import Img19 from "../assets/image/hall-pent/8.png"
import Img20 from "../assets/image/hall-pent/9.png"
import Img21 from "../assets/image/hall-pent/10.png"
import Img22 from "../assets/image/hall-pent/11.png"

import { Link } from 'react-router-dom'

 const t1 = [
  { id: 1, name: "C-Store", title: "Casual Cotton Half Pant", Price: 599,price:899, Discount: "30-40% Off", image: Img12 },
  { id: 2, name: "C-Store", title: "Slim Fit Half Pant", Price: 599,price:899, Discount: "30-40% Off", image: Img13 },
  { id: 3, name: "C-Store", title: "Solid Black Shorts", Price: 499,price:899, Discount: "30-40% Off", image: Img14 },
  { id: 4, name: "C-Store", title: "Sports Half Pant", Price: 699,price:899, Discount: "30-40% Off", image: Img15 },
  { id: 5, name: "C-Store", title: "Denim Look Half Pant", Price: 599,price:899, Discount: "30-40% Off", image: Img16 },
  { id: 6, name: "C-Store", title: "Summer Casual Shorts", Price: 499,price:899, Discount: "30-40% Off", image: Img17 },
  { id: 7, name: "C-Store", title: "Cargo Style Half Pant", Price: 699,price:899, Discount: "30-40% Off", image: Img18 },
  { id: 8, name: "C-Store", title: "Light Grey Shorts", Price: 499,price:899, Discount: "30-40% Off", image: Img19 },
  { id: 9, name: "C-Store", title: "Athletic Half Pant", Price: 599,price:899, Discount: "30-40% Off", image: Img20 },
  { id: 10, name: "C-Store", title: "Classic Blue Shorts", Price: 699,price:899, Discount: "30-40% Off", image: Img21 },
  { id: 11, name: "C-Store", title: "Printed Casual Half Pant", Price: 599,price:899, Discount: "30-40% Off", image: Img22 },
]

const HomeHalf = () => {
  return (
    <div>

     {/* banner */}

  <div className='flex shadow-xl/30 flex bg-white w-320 ml-75 gap-8 mt-8 mb-20'>
                       <div>
                           <img className='object-contain w-220 h-180 ml-16 mt-7 mb-30  rounded-lg ' src={pro1.image} alt="" />
                         </div>
                       {/* <div className=' shadow-xl/30 flex bg-red-500 w-320 ml-75 gap-8 mt-8 mb-20' > */}
                           <div className='mr-20 mt-5 '>
                             <span className='text-black-500 font-semibold text-4xl ml-3'>{pro1.name}</span>
                             <p className='text-black font-thin mt-1 text-1xl ml-3'>{pro1.title}</p>
                             {/* <span className='text-black-400 text-3xl line-through'>{pro1.title}</span> */}
               
                             <div className='flex'>
                               <p className='text-black-500 mt-5 font-bold text-2xl ml-3' >₹{pro1.Price}</p>
                               <p className='text-black font-thin mt-6 text-1xl ml-1 line-through '>₹{pro1.price}</p>
                             <p className='text-black-500 mt-7 ml-1 font-bold text-green-700 text-2xl' >{pro1.Discount}</p>
                             </div>
               
                                <span className='text-black  lg:text-sm mt-4 ml-3'>inclusive of all taxes</span><br />
               
                            <div className='flex gap-2 ml-3'>
                               <p className='text-black font-semibold border border-sm border-black border-line w-50 h-10 text-center py-1'>DESIGN OF THE WEEK</p>
                               <p className='text-black font-semibold border border-sm border-black border-line w-36 h-10 text-center py-1'>100% COTTON</p>
                            </div>
               
                          
                      <div className='flex'>
                           <button className="flex  gap-2 bg-yellow-400 ml-3 border hover:bg-yellow-300 text-black font-semibold py-2 px-6 rounded mt-4 "><LuShoppingBag className="w-35 h-5 " />ADD TO BAG</button>
                               <button className="bg-white-900 border w-47 ml-2 hover:bg-gray-200 text-black font-semibold py-2 px-4 rounded mt-4"> WISHLIST
                              </button>
                      </div>
                      <div className='flex items-center mt-5 ml-2'>
                     <span className='text-2xl'><IoLocation /></span>
                     <span className='ml-4 font-semibold text-2xl '>Check for Delivery Details</span>
                      </div>
                    <form className='flex ml-[-1rem] mb-5'>
                      <input className=" bg-yellow-400 ml-10 border text-black font-semibold py-2 px-35 rounded mt-4" type="text" name='pincode' maxLength="6" placeholder='Enter Pincode'/>
                     <button className='mt-3 font-semibold ' type='submit'><span className='ml-[-5rem]'>Check</span></button>
                    </form>
                    <div className='ml-6 w-120 '>
                        <p className='bg-blue-300 w-120 h-9 text-center  rounded'>This product is eligible for FREE SHIPPING</p>
                    </div>
                    <p className='ml-6 mt-2 font-semibold text-2xl '>Save extra with these offers</p>
               
                           
                            <div>
                               <button className=" ml-7 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 w-58 px-4 rounded mt-7">Buy Now </button>
                               <button className="ml-2 bg-#008C2D-600 bg-red-500 hover:bg-green-700 text-white font-semibold w-54 py-2 px-4 rounded mt-7"> Add to Cart
                              </button>
                            </div>
               
                           </div>
               
                       {/* </div> */}
                     </div>
      
    </div>
  )
}

export default HomeHalf
