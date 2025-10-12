import React from 'react'

import Img12 from "../assets/image/man-touser/1.png"
import Img13 from "../assets/image/man-touser/2.png"
import Img14 from "../assets/image/man-touser/3.png"
import Img15 from "../assets/image/man-touser/4.png"
import Img16 from "../assets/image/man-touser/5.png"
import Img17 from "../assets/image/man-touser/6.png"
import Img18 from "../assets/image/man-touser/7.png"
import Img19 from "../assets/image/man-touser/8.png"
import Img20 from "../assets/image/man-touser/9.png"
import Img21 from "../assets/image/man-touser/10.png"
import Img22 from "../assets/image/man-touser/11.png"
import Img23 from "../assets/image/man-touser/12.png"
import Img24 from "../assets/image/man-touser/13.png"
import Img25 from "../assets/image/man-touser/14.png"
import Img26 from "../assets/image/man-touser/16.png"

import { Link } from 'react-router-dom'

 const t1 =[
  {id:1, name:"C-Store", title:"Black Slim Fit Trouser", Price:599, Discount:"30-40% Off", image:Img12},
  {id:2, name:"C-Store", title:"Beige Cotton Chinos", Price:599, Discount:"30-40% Off", image:Img13},
  {id:3, name:"C-Store", title:"Grey Formal Trouser", Price:599, Discount:"30-40% Off", image:Img14},
  {id:4, name:"C-Store", title:"Navy Blue Slim Trouser", Price:599, Discount:"30-40% Off", image:Img15},
  {id:5, name:"C-Store", title:"Olive Green Cargo Trouser", Price:599, Discount:"30-40% Off", image:Img16},
  {id:6, name:"C-Store", title:"Light Grey Joggers", Price:599, Discount:"30-40% Off", image:Img17},
  {id:7, name:"C-Store", title:"Khaki Straight Fit Trouser", Price:599, Discount:"30-40% Off", image:Img18},
  {id:8, name:"C-Store", title:"Dark Brown Casual Trouser", Price:599, Discount:"30-40% Off", image:Img19},
  {id:9, name:"C-Store", title:"Charcoal Black Chinos", Price:599, Discount:"30-40% Off", image:Img20},
  {id:10, name:"C-Store", title:"Steel Blue Formal Trouser", Price:599, Discount:"30-40% Off", image:Img21},
  {id:11, name:"C-Store", title:"Tan Regular Fit Trouser", Price:599, Discount:"30-40% Off", image:Img22},
  {id:12, name:"C-Store", title:"White Slim Fit Chinos", Price:599, Discount:"30-40% Off", image:Img23},
  {id:13, name:"C-Store", title:"Dark Olive Cargo Trouser", Price:599, Discount:"30-40% Off", image:Img24},
  {id:14, name:"C-Store", title:"Denim Blue Joggers", Price:599, Discount:"30-40% Off", image:Img25},
  {id:15, name:"C-Store", title:"Classic Black Formal Trouser", Price:599, Discount:"30-40% Off", image:Img26},
]


const HomeTouser = () => {
  return (
    <div>

     {/* banner */}

  <section 
      className="mb-0 sm:mb-3 pb-1" 
      data-testid="banner-wrapper"
    >
      <figure className="w-full h-full">
        <img
          alt="Banner"
          data-testid="banner-image"
          fetchpriority="high"
          loading="eager"
          width={1250}
          height={400}
          decoding="async"
          className="w-full h-auto object-cover"
          sizes="(min-width: 1740px) 1354px, (min-width: 1540px) 1267px, (min-width: 1360px) 1105px, (min-width: 1040px) calc(66vw + 221px), 100vw"
          src="https://images.bewakoof.com/uploads/category/desktop/desktop-insidebanner-tracksjoggers-men-1755444913.jpg"
        />
      </figure>
    </section>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 ml:grid-cols-4 gap-6 mt-10 items-center justify-center   ml-10 mr-10'>
        {t1.map((item) => (
          <div key={item.id} className=" rounded p-1 shadow hover:shadow-ml  transition">
            <img src={item.image} alt={item.name} className='hover:brightness-75 cursor-pointer w-full h-120 object-cover' />
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

export default HomeTouser
