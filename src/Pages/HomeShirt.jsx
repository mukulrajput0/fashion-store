import React from 'react'

import Img12 from "../assets/image/man-shirt/1.png"
import Img13 from "../assets/image/man-shirt/2.png"
import Img14 from "../assets/image/man-shirt/3.png"
import Img15 from "../assets/image/man-shirt/4.png"
import Img16 from "../assets/image/man-shirt/5.png"
import Img17 from "../assets/image/man-shirt/6.png"
import Img18 from "../assets/image/man-shirt/7.png"
import Img19 from "../assets/image/man-shirt/8.png"
import Img20 from "../assets/image/man-shirt/9.png"
import Img21 from "../assets/image/man-shirt/10.png"
import Img22 from "../assets/image/man-shirt/11.png"
import Img23 from "../assets/image/man-shirt/12.png"
import Img24 from "../assets/image/man-shirt/13.png"
import Img25 from "../assets/image/man-shirt/14.png"
import Img26 from "../assets/image/man-shirt/15.png"
import Img27 from "../assets/image/man-shirt/16.png"
import Img28 from "../assets/image/man-shirt/17.png"
import Img29 from "../assets/image/man-shirt/18.png"
import Img30 from "../assets/image/man-shirt/19.png"
import Img31 from "../assets/image/man-shirt/20.png"

import { Link } from 'react-router-dom'

 export const t1 =[
  {id:1, name:"C-Store", title:"Classic White Shirt", Price:699,price:999, Discount:"30-40% Off", image:Img12},
  {id:2, name:"C-Store", title:"Slim Fit Black Shirt", Price:599,price:899, Discount:"30-40% Off", image:Img13},
  {id:3, name:"C-Store", title:"Sky Blue Formal Shirt", Price:399,price:699, Discount:"30-40% Off", image:Img14},
  {id:4, name:"C-Store", title:"Olive Green Casual Shirt", Price:299,price:600, Discount:"30-40% Off", image:Img15},
  {id:5, name:"C-Store", title:"Light Grey Cotton Shirt", Price:300,price:500, Discount:"30-40% Off", image:Img16},
  {id:6, name:"C-Store", title:"Denim Blue Shirt", Price:599,price:999, Discount:"30-40% Off", image:Img17},
  {id:7, name:"C-Store", title:"Checked Red & Black Shirt", Price:499,price:899, Discount:"30-40% Off", image:Img18},
  {id:8, name:"C-Store", title:"Beige Linen Shirt", Price:399,price:700, Discount:"30-40% Off", image:Img19},
  {id:9, name:"C-Store", title:"Navy Blue Printed Shirt", Price:499,price:999, Discount:"30-40% Off", image:Img20},
  {id:10, name:"C-Store", title:"Light Pink Formal Shirt", Price:399,price:800, Discount:"30-40% Off", image:Img21},
  {id:11, name:"C-Store", title:"Charcoal Grey Shirt", Price:499,price:800, Discount:"30-40% Off", image:Img22},
  {id:12, name:"C-Store", title:"Striped White & Blue Shirt", Price:599,price:999, Discount:"30-40% Off", image:Img23},
  {id:13, name:"C-Store", title:"Mustard Yellow Shirt", Price:300,price:700, Discount:"30-40% Off", image:Img24},
  {id:14, name:"C-Store", title:"Light Brown Casual Shirt", Price:299,price:800, Discount:"30-40% Off", image:Img25},
  {id:15, name:"C-Store", title:"Dark Green Military Shirt", Price:499,price:1000, Discount:"30-40% Off", image:Img26},
  {id:16, name:"C-Store", title:"Classic Blue Formal Shirt", Price:400,price:900, Discount:"30-40% Off", image:Img27},
  {id:17, name:"C-Store", title:"Floral Printed Shirt", Price:399,price:800, Discount:"30-40% Off", image:Img28},
  {id:18, name:"C-Store", title:"Black & White Checked Shirt", Price:500,price:1000, Discount:"30-40% Off", image:Img29},
  {id:19, name:"C-Store", title:"Rust Orange Casual Shirt", Price:499,price:800, Discount:"30-40% Off", image:Img30},
  {id:20, name:"C-Store", title:"Steel Grey Formal Shirt", Price:299,price:699, Discount:"30-40% Off", image:Img31},
]


export const HomeShirt = () => {
  return (
    <div>

     {/* banner */}

   <section className="w-full mb-0 sm:mb-3 pb-1">
      <figure className="w-full h-full">
        <img
          src="https://images.bewakoof.com/uploads/category/desktop/Inside-banner_1440x400_Desktop_(2)-1749811440.jpg"
          alt="Banner"
          className="w-full h-auto object-cover rounded-md shadow"
          loading="eager"
          width={1250}
          height={400}
        />
      </figure>
    </section>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 ml:grid-cols-4 gap-6 mt-10 items-center justify-center   ml-10 mr-10'>
        {t1.map((item) => (
          <div key={item.id} className=" rounded p-1 shadow hover:shadow-ml  transition">
             <Link to={`/homeshirtdummy/${item.id}`}><img src={item.image} alt={item.name} className='hover:brightness-75 cursor-pointer w-full h-120 object-cover' /></Link>
            <Link><span><p className="font-bold text-gray-800 mt-1 ml-1">{item.name}</p></span></Link>
                        <Link><h2 className="text-sm font-medium text-[#4E5664] ml-1">{item.title}</h2></Link>
                        <div className='flex'>
                          <span><Link><p className="text-lg font-semibold text-black ml-1" data-testid="product-card-selling-price">₹{item.Price}</p></Link></span>
                           <p className='text-black font-thin text-1xl ml-1 line-through '>₹{item.price}</p>
                          <span><Link><p className="text-sm font-semibold text-green-600 whitespace-nowrap" data-testid="product-card-discount ml-1">{item.Discount}</p></Link></span>
                        </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default HomeShirt
