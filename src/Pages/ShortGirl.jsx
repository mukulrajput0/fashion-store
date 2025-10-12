import React from 'react'

import Img12 from "../assets/image/short-girl/s.png"
import Img13 from "../assets/image/short-girl/s1.png"
import Img14 from "../assets/image/short-girl/s2.png"
import Img15 from "../assets/image/short-girl/s3.png"
import Img16 from "../assets/image/short-girl/s4.png"
import Img17 from "../assets/image/short-girl/s5.png"
import Img18 from "../assets/image/short-girl/s6.png"
import Img19 from "../assets/image/short-girl/s7.png"
import Img20 from "../assets/image/short-girl/s8.png"
import Img21 from "../assets/image/short-girl/s9.png"
import Img22 from "../assets/image/short-girl/s10.png"
import Img23 from "../assets/image/short-girl/s11.png"
import Img24 from "../assets/image/short-girl/s12.png"

import { Link } from 'react-router-dom'

export const t1 = [
  {id:1, name:"C-Store", title:"Casual Denim Shorts", Price:599,price:899, Discount:"30% Off", image:Img12},
  {id:2, name:"C-Store", title:"High-Waist Cotton Shorts", Price:499,price:799, Discount:"30% Off", image:Img13},
  {id:3, name:"C-Store", title:"Summer Beach Shorts", Price:399,price:799, Discount:"40% Off", image:Img14},
  {id:4, name:"C-Store", title:"Ripped Denim Shorts", Price:499,price:899, Discount:"40% Off", image:Img15},
  {id:5, name:"C-Store", title:"Solid Black Shorts", Price:599,price:999, Discount:"40% Off", image:Img16},
  {id:6, name:"C-Store", title:"Printed Cotton Shorts", Price:399,price:899, Discount:"30% Off", image:Img17},
  {id:7, name:"C-Store", title:"Relaxed Fit Shorts", Price:499,price:899, Discount:"30% Off", image:Img18},
  {id:8, name:"C-Store", title:"Athleisure Sport Shorts", Price:699,price:999, Discount:"30% Off", image:Img19},
  {id:9, name:"C-Store", title:"Classic Blue Denim Shorts", Price:599,price:899, Discount:"40% Off", image:Img20},
  {id:10, name:"C-Store", title:"Drawstring Casual Shorts", Price:499,price:799, Discount:"40% Off", image:Img21},
  {id:11, name:"C-Store", title:"Light Wash Denim Shorts", Price:499,price:899, Discount:"30% Off", image:Img22},
  {id:12, name:"C-Store", title:"Slim Fit Stretch Shorts", Price:699,price:899, Discount:"30% Off", image:Img23},
  {id:13, name:"C-Store", title:"Trendy Summer Shorts", Price:399,price:899, Discount:"40% Off", image:Img24},
]

const ShortGirl = () => {
  return (
    <div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 ml:grid-cols-4 gap-6 mt-10 items-center justify-center   ml-10 mr-10'>
        {t1.map((item) => (
          <div key={item.id} className=" rounded p-1 shadow hover:shadow-ml  transition">
            <Link to={`/shortgirldummy/${item.id}`}><img src={item.image} alt={item.name} className='hover:brightness-75 cursor-pointer w-full h-120 object-cover' /></Link>
            <Link><span><p className="font-bold text-gray-800 mt-1 ml-1">{item.name}</p></span></Link>
                        <Link><h2 className="text-sm font-medium text-[#4E5664] ml-1">{item.title}</h2></Link>
                        <div className='flex'>
                          <span><Link><p className="text-lg font-semibold text-black ml-1" data-testid="product-card-selling-price">₹{item.Price}</p></Link></span>
                          <span><Link><p className="text-sm font-semibold text-green-600 whitespace-nowrap" data-testid="product-card-discount ml-1">{item.Discount}</p></Link></span>
                        </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default ShortGirl
