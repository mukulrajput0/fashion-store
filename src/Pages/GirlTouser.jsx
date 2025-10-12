import React from 'react'

import Img12 from "../assets/image/touser/t.png"
import Img13 from "../assets/image/touser/t1.png"
import Img14 from "../assets/image/touser/t2.png"
import Img15 from "../assets/image/touser/t3.png"
import Img16 from "../assets/image/touser/t4.png"
import Img17 from "../assets/image/touser/t5.png"
import Img18 from "../assets/image/touser/t6.png"
import Img19 from "../assets/image/touser/t7.png"
import Img20 from "../assets/image/touser/t8.png"
import Img21 from "../assets/image/touser/t9.png"
import Img22 from "../assets/image/touser/t10.png"
import { Link } from 'react-router-dom'

export const t1 = [
  {id:1, name:"C-Store", title:"Classic Straight Fit Trousers", Price:599, price:999,Discount:"30-40% Off", image:Img12},
  {id:2, name:"C-Store", title:"High Waist Formal Pants", Price:499,price:899, Discount:"30-40% Off", image:Img13},
  {id:3, name:"C-Store", title:"Casual Wide-Leg Trousers", Price:399,price:799, Discount:"30-40% Off", image:Img14},
  {id:4, name:"C-Store", title:"Slim Fit Cigarette Pants", Price:699,price:999, Discount:"30-40% Off", image:Img15},
  {id:5, name:"C-Store", title:"Elegant Pleated Trousers", Price:499,price:899, Discount:"30-40% Off", image:Img16},
  {id:6, name:"C-Store", title:"Everyday Cotton Pants", Price:599,price:999, Discount:"30-40% Off", image:Img17},
  {id:7, name:"C-Store", title:"Formal Office Trousers", Price:799,price:1199, Discount:"30-40% Off", image:Img18},
  {id:8, name:"C-Store", title:"Trendy Flared Pants", Price:499,price:1000, Discount:"30-40% Off", image:Img19},
  {id:9, name:"C-Store", title:"High Rise Straight Pants", Price:399,price:899, Discount:"30-40% Off", image:Img20},
  {id:10, name:"C-Store", title:"Comfort Stretch Trousers", Price:799,price:1299, Discount:"30-40% Off", image:Img21},
  {id:11, name:"C-Store", title:"Chic Ankle-Length Pants", Price:699,price:100, Discount:"30-40% Off", image:Img22},
];


const GirlTouser = () => {
  return (
    <div>
      <section
      className="mb-0 sm:mb-3 pb-1"
      data-testid="banner-wrapper"
    >
      <figure className="w-full h-full">
        <img
          alt="Banner"
          data-testid="banner-image"
          loading="eager"
          width={1250}
          height={400}
          decoding="async"
          className="w-full h-auto object-cover"
          src="https://images.bewakoof.com/uploads/category/desktop/Desktop-CC-coupon-code--2--1753794908.jpg"
        />
      </figure>
    </section>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 ml:grid-cols-4 gap-6 mt-10 items-center justify-center   ml-10 mr-10'>
        {t1.map((item) => (
          <div key={item.id} className=" rounded p-1 shadow hover:shadow-ml  transition">
            <Link to={`/girltouserdummy/${item.id}`}><img src={item.image} alt={item.name} className='hover:brightness-75 cursor-pointer w-full h-120 object-cover' /></Link>
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

export default GirlTouser
