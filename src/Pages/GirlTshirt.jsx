import React from 'react'
import Img1 from "../assets/image/girl-tshirt/1.png"
import Img2 from "../assets/image/girl-tshirt/2.png"
import Img3 from "../assets/image/girl-tshirt/3.png"
import Img4 from "../assets/image/girl-tshirt/4.png"
import Img5 from "../assets/image/girl-tshirt/5.png"
import Img6 from "../assets/image/girl-tshirt/6.png"
import Img7 from "../assets/image/girl-tshirt/7.png"
import Img8 from "../assets/image/girl-tshirt/8.png"
import Img9 from "../assets/image/girl-tshirt/9.png"
import Img10 from "../assets/image/girl-tshirt/10.png"
import Img11 from "../assets/image/girl-tshirt/11.png"

import { Link } from 'react-router-dom'

export const t = [
    {id:1, name:"C-Store", title:"Oversized Graphic Print Tee", Price:599, Discount:"30-40% Off", image:Img1},
    {id:2, name:"C-Store", title:"Casual Round Neck T-Shirt", Price:599, Discount:"30-40% Off", image:Img2},
    {id:3, name:"C-Store", title:"Floral Print Cotton Tee", Price:599, Discount:"30-40% Off", image:Img3},
    {id:4, name:"C-Store", title:"Solid White Basic T-Shirt", Price:599, Discount:"30-40% Off", image:Img4},
    {id:5, name:"C-Store", title:"Striped Crew Neck Tee", Price:599, Discount:"30-40% Off", image:Img5},
    {id:6, name:"C-Store", title:"Black Oversized T-Shirt", Price:599, Discount:"30-40% Off", image:Img6},
    {id:7, name:"C-Store", title:"Trendy Crop Fit Tee", Price:599, Discount:"30-40% Off", image:Img7},
    {id:8, name:"C-Store", title:"Summer Yellow Graphic Tee", Price:599, Discount:"30-40% Off", image:Img8},
    {id:9, name:"C-Store", title:"Classic Polo Collar T-Shirt", Price:599, Discount:"30-40% Off", image:Img9},
    {id:10, name:"C-Store", title:"Casual V-Neck T-Shirt", Price:599, Discount:"30-40% Off", image:Img10},
    {id:11, name:"C-Store", title:"Trendy Slogan Printed Tee", Price:599, Discount:"30-40% Off", image:Img11},
  ]
const GirlTshirt = () => {
  
    

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
          width="1250"
          height="400"
          decoding="async"
          className="w-full h-auto object-cover"
          sizes="(min-width: 1740px) 1354px, 
                 (min-width: 1540px) 1267px, 
                 (min-width: 1360px) 1105px, 
                 (min-width: 1040px) calc(66vw + 221px), 
                 100vw"
          src="https://images.bewakoof.com/uploads/category/desktop/desktop-Os-tee-1750141532.jpg"
        />
      </figure>
    </section>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 ml:grid-cols-4 gap-6 mt-10 items-center justify-center   ml-10 mr-10'>
        {t.map((item) => (
          <div key={item.id} className=" rounded p-1 shadow hover:shadow-ml  transition">
              <Link to={`/girltshirtdummy/${item.id}`}><img src={item.image} alt={item.name} className='hover:brightness-75 cursor-pointer w-full h-120 object-cover' /></Link>
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

export default GirlTshirt
