import React from 'react'

import Img1 from "../assets/image/huddy/1.png"
import Img2 from "../assets/image/huddy/2.png"
import Img3 from "../assets/image/huddy/3.png"
import Img4 from "../assets/image/huddy/4.png"
import Img5 from "../assets/image/huddy/5.png"
import Img6 from "../assets/image/huddy/6.png"
import Img7 from "../assets/image/huddy/7.png"
import Img8 from "../assets/image/huddy/8.png"
import Img9 from "../assets/image/huddy/9.png"
import Img10 from "../assets/image/huddy/10.png"

import { Link } from 'react-router-dom'

export const t1 = [
  {id:1, name:"C-Store", title:"Casual Denim Shorts", Price:599,price:899, Discount:"30% Off", image:Img1},
  {id:2, name:"C-Store", title:"High-Waist Cotton Shorts", Price:499,price:799, Discount:"30% Off", image:Img2},
  {id:3, name:"C-Store", title:"Summer Beach Shorts", Price:399,price:799, Discount:"40% Off", image:Img3},
  {id:4, name:"C-Store", title:"Ripped Denim Shorts", Price:499,price:899, Discount:"40% Off", image:Img4},
  {id:5, name:"C-Store", title:"Solid Black Shorts", Price:599,price:999, Discount:"40% Off", image:Img5},
  {id:6, name:"C-Store", title:"Printed Cotton Shorts", Price:399,price:899, Discount:"30% Off", image:Img6},
  {id:7, name:"C-Store", title:"Relaxed Fit Shorts", Price:499,price:899, Discount:"30% Off", image:Img7},
  {id:8, name:"C-Store", title:"Athleisure Sport Shorts", Price:699,price:999, Discount:"30% Off", image:Img8},
  {id:9, name:"C-Store", title:"Classic Blue Denim Shorts", Price:599,price:899, Discount:"40% Off", image:Img9},
    {id:10, name:"C-Store", title:"Classic Blue Denim Shorts", Price:599,price:899, Discount:"40% Off", image:Img10},
]

const HomeCargo = () => {
  return (
    <div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 ml:grid-cols-4 gap-6 mt-10 items-center justify-center   ml-10 mr-10'>
        {t1.map((item) => (
          <div key={item.id} className=" rounded p-1 shadow hover:shadow-ml  transition">
            <Link to={`/homecargodummy/${item.id}`}><img src={item.image} alt={item.name} className='hover:brightness-75 cursor-pointer w-full h-120 object-cover' /></Link>
            <Link><span><p className="font-bold text-gray-800 mt-1 ml-1">{item.name}</p></span></Link>
                        <Link><h2 className="text-sm font-medium text-[#4E5664] ml-1">{item.title}</h2></Link>
                        <div className='flex'>
                          <span><Link><p className="text-lg font-semibold text-black ml-1" data-testid="product-card-selling-price">₹{item.Price}</p></Link></span>
                          <p className='text-black font-thin  text-1xl ml-1 line-through '>₹{item.price}</p>
                          <span><Link><p className="text-sm font-semibold text-green-600 whitespace-nowrap" data-testid="product-card-discount ml-1">{item.Discount}</p></Link></span>
                        </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default HomeCargo

