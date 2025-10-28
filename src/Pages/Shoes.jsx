import React from 'react'
import Img1 from "../assets/image/man-shoes/1.png"
import Img2 from "../assets/image/man-shoes/2.png"
import Img3 from "../assets/image/man-shoes/3.png"
import Img4 from "../assets/image/man-shoes/4.png"
import Img5 from "../assets/image/man-shoes/5.png"
import Img6 from "../assets/image/man-shoes/6.png"
import Img7 from "../assets/image/man-shoes/7.png"
import Img8 from "../assets/image/man-shoes/8.png"
import Img9 from "../assets/image/man-shoes/9.png"
import Img10 from "../assets/image/man-shoes/10.png"
import Img11 from "../assets/image/man-shoes/11.png"
import Img12 from "../assets/image/man-shoes/12.png"
import Img13 from "../assets/image/man-shoes/13.png"
import Img14 from "../assets/image/man-shoes/14.png"
import Img15 from "../assets/image/man-shoes/15.png"
import Img16 from "../assets/image/man-shoes/16.png"
import Img17 from "../assets/image/man-shoes/17.png"
import Img18 from "../assets/image/man-shoes/18.png"


import { Link } from 'react-router-dom'

 export const t =[
   {id:1, name:"C-Store", title:"Classic White Sneakers", Price:599, Discount:"30-40% Off", image:Img1},
   {id:2, name:"C-Store", title:"Black Running Shoes", Price:599, Discount:"30-40% Off", image:Img2},
   {id:3, name:"C-Store", title:"Casual Blue Sneakers", Price:599, Discount:"30-40% Off", image:Img3},
   {id:4, name:"C-Store", title:"Stylish Red Sports Shoes", Price:599, Discount:"30-40% Off", image:Img4},
   {id:5, name:"C-Store", title:"Grey Mesh Running Shoes", Price:599, Discount:"30-40% Off", image:Img5},
   {id:6, name:"C-Store", title:"Brown Leather Loafers", Price:599, Discount:"30-40% Off", image:Img6},
   {id:7, name:"C-Store", title:"Formal Black Derby Shoes", Price:599, Discount:"30-40% Off", image:Img7},
   {id:8, name:"C-Store", title:"Slip-On Casual Shoes", Price:599, Discount:"30-40% Off", image:Img8},
   {id:9, name:"C-Store", title:"High-Top Black Sneakers", Price:599, Discount:"30-40% Off", image:Img9},
   {id:10, name:"C-Store", title:"White Sports Trainers", Price:599, Discount:"30-40% Off", image:Img10},
   {id:11, name:"C-Store", title:"Tan Casual Loafers", Price:599, Discount:"30-40% Off", image:Img11},
   {id:12, name:"C-Store", title:"Grey Casual Sneakers", Price:599, Discount:"30-40% Off", image:Img12},
   {id:13, name:"C-Store", title:"Classic Black Formal Shoes", Price:599, Discount:"30-40% Off", image:Img13},
   {id:14, name:"C-Store", title:"Blue Lace-Up Sneakers", Price:599, Discount:"30-40% Off", image:Img14},
   {id:15, name:"C-Store", title:"Chunky White Sneakers", Price:599, Discount:"30-40% Off", image:Img15},
   {id:16, name:"C-Store", title:"Black Slip-On Loafers", Price:599, Discount:"30-40% Off", image:Img16},
   {id:17, name:"C-Store", title:"Sporty Grey Sneakers", Price:599, Discount:"30-40% Off", image:Img17},
   {id:18, name:"C-Store", title:"Red Casual Sneakers", Price:599, Discount:"30-40% Off", image:Img18},
];

const Shoes = () => {


  return (

    <div>
    {/* <section className="mb-0 sm:mb-3 pb-1" data-testid="banner-wrapper">
      <figure className="w-full h-full">
        <img
          alt="Banner"
          data-testid="banner-image"
          loading="eager"
          width={1250}
          height={400}
          decoding="async"
          className="w-full h-auto object-cover"
          src="https://images.bewakoof.com/uploads/category/desktop/Desktop-backpack-1750919623.jpg"
        />
      </figure>
    </section> */}
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 ml:grid-cols-4 gap-6 mt-10 items-center justify-center   ml-10 mr-10'>
        {t.map((item) => (
          <div key={item.id} className=" rounded p-1 shadow hover:shadow-ml  transition">
              <Link to={`/shoesdummy/${item.id}`}><img src={item.image} alt={item.name} className='hover:brightness-75 cursor-pointer w-full h-120 object-cover' /></Link>
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

export default Shoes

