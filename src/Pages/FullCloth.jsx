import React from 'react'

import Img12 from "../assets/image/full/f.png"
import Img13 from "../assets/image/full/f1.png"
import Img14 from "../assets/image/full/f2.png"
import Img15 from "../assets/image/full/f3.png"
import Img16 from "../assets/image/full/f4.png"
import Img17 from "../assets/image/full/f5.png"
import Img18 from "../assets/image/full/f6.png"
import Img19 from "../assets/image/full/f7.png"
import Img20 from "../assets/image/full/f8.png"
import Img21 from "../assets/image/full/f9.png"
import Img22 from "../assets/image/full/f10.png"
import Img23 from "../assets/image/full/f11.png"
import Img24 from "../assets/image/full/f12.png"
import Img25 from "../assets/image/full/f13.png"
import { Link } from 'react-router-dom'

export const t1 = [
  {id:1, name:"C-Store", title:"Casual Printed T-Shirt", Price:599, Discount:"30-40% Off", image:Img12},
  {id:2, name:"C-Store", title:"Oversized Cotton Tee", Price:599, Discount:"30-40% Off", image:Img13},
  {id:3, name:"C-Store", title:"Classic Black T-Shirt", Price:599, Discount:"30-40% Off", image:Img14},
  {id:4, name:"C-Store", title:"White Graphic Tee", Price:599, Discount:"30-40% Off", image:Img15},
  {id:5, name:"C-Store", title:"Trendy Summer Top", Price:599, Discount:"30-40% Off", image:Img16},
  {id:6, name:"C-Store", title:"Casual Round Neck Tee", Price:599, Discount:"30-40% Off", image:Img17},
  {id:7, name:"C-Store", title:"Stylish Printed Shirt", Price:599, Discount:"30-40% Off", image:Img18},
  {id:8, name:"C-Store", title:"Everyday Casual Wear", Price:599, Discount:"30-40% Off", image:Img19},
  {id:9, name:"C-Store", title:"Trendy Oversized Fit", Price:599, Discount:"30-40% Off", image:Img20},
  {id:10, name:"C-Store", title:"Premium Polo T-Shirt", Price:599, Discount:"30-40% Off", image:Img21},
  {id:11, name:"C-Store", title:"Full Sleeve Cotton Tee", Price:599, Discount:"30-40% Off", image:Img22},
  {id:12, name:"C-Store", title:"Casual Streetwear Tee", Price:599, Discount:"30-40% Off", image:Img23},
  {id:13, name:"C-Store", title:"Trendy Colorblock Tee", Price:599, Discount:"30-40% Off", image:Img24},
  {id:14, name:"C-Store", title:"Graphic Oversized Tee", Price:599, Discount:"30-40% Off", image:Img25},
];


const FullCloth = () => {
  return (
    <div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 ml:grid-cols-4 gap-6 mt-10 items-center justify-center   ml-10 mr-10'>
        {t1.map((item) => (
          <div key={item.id} className=" rounded p-1 shadow hover:shadow-ml  transition">
               <Link to={`/fullclothdummy/${item.id}`}><img src={item.image} alt={item.name} className='hover:brightness-75 cursor-pointer w-full h-120 object-cover' /></Link>
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

export default FullCloth
