import React from 'react'

import Img12 from "../assets/image/girl-lower/l.png"
import Img13 from "../assets/image/girl-lower/l1.png"
import Img14 from "../assets/image/girl-lower/l2.png"
import Img15 from "../assets/image/girl-lower/l3.png"
import Img16 from "../assets/image/girl-lower/l4.png"
import Img17 from "../assets/image/girl-lower/l5.png"
import Img18 from "../assets/image/girl-lower/l6.png"
import Img19 from "../assets/image/girl-lower/l7.png"
import Img20 from "../assets/image/girl-lower/l8.png"
import Img21 from "../assets/image/girl-lower/l9.png"
import Img22 from "../assets/image/girl-lower/l10.png"
import Img23 from "../assets/image/girl-lower/l11.png"
import { Link } from 'react-router-dom'

export const t1 = [
  {id:1, name:"C-Store", title:"Casual Cotton Joggers", Price:599, Discount:"30-40% Off", image:Img12},
  {id:2, name:"C-Store", title:"High Waist Leggings", Price:599, Discount:"30-40% Off", image:Img13},
  {id:3, name:"C-Store", title:"Classic Black Track Pants", Price:599, Discount:"30-40% Off", image:Img14},
  {id:4, name:"C-Store", title:"Trendy Wide-Leg Pants", Price:599, Discount:"30-40% Off", image:Img15},
  {id:5, name:"C-Store", title:"Stretch Fit Leggings", Price:599, Discount:"30-40% Off", image:Img16},
  {id:6, name:"C-Store", title:"Casual Lounge Pants", Price:599, Discount:"30-40% Off", image:Img17},
  {id:7, name:"C-Store", title:"Slim Fit Track Pants", Price:599, Discount:"30-40% Off", image:Img18},
  {id:8, name:"C-Store", title:"Trendy Cargo Pants", Price:599, Discount:"30-40% Off", image:Img19},
  {id:9, name:"C-Store", title:"Everyday Yoga Leggings", Price:599, Discount:"30-40% Off", image:Img20},
  {id:10, name:"C-Store", title:"Printed Jogger Pants", Price:599, Discount:"30-40% Off", image:Img21},
  {id:11, name:"C-Store", title:"Comfort Lounge Joggers", Price:599, Discount:"30-40% Off", image:Img22},
  {id:12, name:"C-Store", title:"Stylish Ankle-Length Pants", Price:599, Discount:"30-40% Off", image:Img23},
];


const GirlLower = () => {
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
          src="https://images.bewakoof.com/uploads/category/desktop/desktop-insidebanner-tracksjoggers-women-1755444986.jpg"
        />
      </figure>
    </section>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 ml:grid-cols-4 gap-6 mt-10 items-center justify-center   ml-10 mr-10'>
              {t1.map((item) => (    
                <div key={item.id} className=" rounded p-1 shadow hover:shadow-ml  transition">
                  <Link to={`/girllowerdummy/${item.id}`}><img src={item.image} alt={item.name} className='hover:brightness-75 cursor-pointer w-full h-120 object-cover' /></Link>
                  {/* <span><p className=" text-black flex font-light text-[13px] ">{item.title.slice(0,30)}..</p></span> */}
                  <Link><span><p className="font-bold text-gray-800 mt-1 ml-1">{item.name}</p></span></Link>
                              {/* <Link><h2 className="text-sm font-medium text-[#4E5664] ml-1">{item.title.slice(0,30)}..</h2></Link> */}
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

export default GirlLower
