import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// 🔹 Images
import Img from "../assets/image/T-shirt-man/t-shirt4.jpg"
import Img1 from "../assets/image/jeans/jeans1.jpg"
import Img2 from "../assets/image/shirt-man/shirt3.jpg"
import Img3 from "../assets/image/jeans/jeans2.jpg"
import Img4 from "../assets/image/shirt-man/shirt2.jpg"
import Img5 from "../assets/image/T-shirt-man/t-shirt3.jpg"
import Img6 from "../assets/image/shoes/shoes.jpg"
import Img7 from "../assets/image/jeans/jeans3.jpg"
import Img8 from "../assets/image/shirt-man/shirt4.jpg"
import Img9 from "../assets/image/T-shirt-man/t-shirt4.jpg"
import Img16 from "../assets/image/t/t2.png"
import Img15 from "../assets/image/t/t1.png"
import Img17 from "../assets/image/t/t3.png"
import Img18 from "../assets/image/t/t4.png"
import Img19 from "../assets/image/t/t5.png"
import Img20 from "../assets/image/t/t10.png"
import Img21 from "../assets/image/t/t7.png"
import Img25 from "../assets/image/back-print/14.png"
import Img26 from "../assets/image/back-print/15.png"
import Img27 from "../assets/image/back-print/16.png"
import Img28 from '../assets/image/T-shirt-man/1.png'
import Img29 from '../assets/image/T-shirt-man/2.png'
import Img30 from '../assets/image/T-shirt-man/3.png'
import Img31 from '../assets/image/T-shirt-man/4.png'
import Img32 from '../assets/image/T-shirt-man/5.png'
import Img33 from '../assets/image/T-shirt-man/6.png'
import Img34 from '../assets/image/T-shirt-man/7.png'
import Img35 from '../assets/image/T-shirt-man/8.png'
import Img36 from '../assets/image/T-shirt-man/9.png'
import Img37 from '../assets/image/T-shirt-man/10.png'
import Img38 from '../assets/image/T-shirt-man/11.png'
import Img39 from '../assets/image/T-shirt-man/12.png'
// import Img40 from '../assets/image/T-shirt-man/13.png'

// 🔹 First Collection
export const a = [
  {id:16, name:"C-Store", title:"White Minimal Back Print Tee", Price:599,price:899, Discount:"30-40% Off", image:Img28},
  { id: 1,name:"C-Store", title:"Casual T-Shirt", Price: 499, price: 999, Discount: "40% Off", image: Img29 },
  { id: 2,name:"C-Store", title:"Classic Denim Jeans", Price: 599, price: 899, Discount: "40% Off", image: Img30 },
  { id: 3,name:"C-Store", title:"Formal Shirt", Price: 500, price: 1000, Discount: "40% Off", image: Img31 },
  { id: 4,name:"C-Store", title:"Slim Fit Jeans", Price: 699, price: 999, Discount: "40% Off", image: Img32 },
  { id: 5,name:"C-Store", title:"Checked Shirt", Price: 499, price: 899, Discount: "40% Off", image: Img33 },
   { id: 5,name:"C-Store", title:"Oversized Tee Blue", Price: 599, price: 899, Discount: "30% Off", image: Img34 },
  { id: 6,name:"C-Store", title:"Graphic Tee", Price: 799, price: 1099, Discount: "40% Off", image: Img35 },
  { id: 7,name:"C-Store", title:"Sports Shoes", Price: 1500, price:2000, Discount: "40% Off", image: Img36 },
  { id: 8,name:"C-Store", title:"Ripped Jeans", Price: 499, price: 899, Discount: "40% Off", image: Img37 },
  { id: 9,name:"C-Store", title:"Casual Shirt", Price: 899, price: 1499, Discount: "40% Off", image: Img38 },
  { id: 10,name:"C-Store", title:"Round Neck Tee", Price: 499, price: 899, Discount: "40% Off", image: Img39 },
  // { id: 11,name:"C-Store", title:"Running Shoes", Price: 6000, Discount: "30-40% Off", image: Img40 },
  // { id: 12,name:"C-Store", title:"Stretch Jeans", Price: 899, Discount: "30-40% Off", image: Img11 },
]

// 🔹 Second Collection
export const b = [
  { id: 1,name:"C-Store", title:"Oversized Tee White", Price: 599, price: 999, Discount: "30% Off", image: Img17 },
  { id: 2,name:"C-Store", title:"Oversized Tee Black", Price: 499, price: 799, Discount: "30% Off", image: Img18 },
  { id: 3,name:"C-Store", title:"Oversized Tee Yellow", Price: 599, price: 899, Discount: "30% Off", image: Img19 },
  { id: 4,name:"C-Store", title:"Oversized Tee Red", Price: 699, price: 999, Discount: "30% Off", image: Img20 },
  { id: 5,name:"C-Store", title:"Oversized Tee Blue", Price: 599, price: 899, Discount: "30% Off", image: Img21 },
]

// 🔹 Third Collection
export const c = [
  { id: 7,name:"C-Store", title:"Basic Tee Black", Price: 399, price: 899, Discount: "40% Off", image: Img16 },
  { id: 6,name:"C-Store", title:"Basic Tee White", Price: 299, price: 500, Discount: "30% Off", image: Img15 },
  { id: 8,name:"C-Store", title:"Basic Tee Grey", Price: 399, price: 700, Discount: "30% Off", image: Img17 },
  {id:14, name:"C-Store", title:"Denim Blue Back Print Tee", Price:599,price:999, Discount:"30-40% Off", image:Img25},
    {id:15, name:"C-Store", title:"Black Typography Oversized T-shirt", Price:599,price:899, Discount:"30-40% Off", image:Img26},
    {id:16, name:"C-Store", title:"White Minimal Back Print Tee", Price:599,price:999, Discount:"30-40% Off", image:Img27},
]

const Man = () => {

  // ✅ Set Page Title
  useEffect(() => {
    document.title = "Men's Collection | Clothing Store";
  }, []);

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

      {/* Page Heading */}
      <div className="text-center mt-10">
        <h1 className="text-5xl font-bold flex justify-center space-x-2">
          Trending Categories
        </h1>
      </div>

      {/* 🔹 First Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 mt-10 mx-10'>
        {a.map((item) => (
          <div key={item.id} className="border rounded  shadow hover:shadow-lg transition">
            <Link to={`/man/${item.id}`}>
              <img src={item.image} alt={item.title} className='hover:brightness-75 cursor-pointer  w-full h-auto' />
            </Link>
            <Link><span><p className="font-bold text-gray-800 mt-1 ml-1">{item.name}</p></span></Link>
            <Link><h2 className="text-sm font-medium text-[#4E5664] ml-1">{item.title}</h2></Link>
            <div className='flex'>
              <span><Link><p className="text-lg font-semibold text-black ml-1" data-testid="product-card-selling-price">₹{item.Price}</p></Link></span>
                <span><Link><p className='text-black font-thin  text-1xl ml-1 line-through '>₹{item.price}</p></Link></span>
              <span><Link><p className="text-sm font-semibold text-green-600 whitespace-nowrap" data-testid="product-card-discount ml-1">{item.Discount}</p></Link></span>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Second Grid */}
      <div>
        <h1 className='text-center text-3xl font-extrabold mt-10 mb-10'>Buy 2 Oversized T-shirts at Rs.599</h1>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mx-10'>
        {b.map((item) => (
          <div key={item.id} className="border rounded  shadow hover:shadow-lg transition">
            <Link to={`/manb/${item.id}`}><img src={item.image} alt={item.title} className='hover:brightness-75 cursor-pointer w-full h-auto' /></Link>
           <Link><span><p className="font-bold text-gray-800 mt-1 ml-1">{item.name}</p></span></Link>
            <Link><h2 className="text-sm font-medium text-[#4E5664] ml-1">{item.title}</h2></Link>
            <div className='flex'>
              <span><Link><p className="text-lg font-semibold text-black ml-1" data-testid="product-card-selling-price">₹{item.Price}</p></Link></span>
               <span><Link><p className='text-black font-thin  text-1xl ml-1 line-through '>₹{item.price}</p></Link></span>
              <span><Link><p className="text-sm font-semibold text-green-600 whitespace-nowrap" data-testid="product-card-discount ml-1">{item.Discount}</p></Link></span>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Third Grid */}
        <div>
        <h1 className='text-center text-3xl font-extrabold mt-10 mb-10'>Printed T-shirts Rs.599</h1>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 mx-10 mb-10 mt-10'>
        {c.map((item) => (
          <div key={item.id} className="border rounded  shadow hover:shadow-lg transition">
           <Link to={`/manc/${item.id}`}><img src={item.image} alt={item.title} className='hover:brightness-75 cursor-pointer w-full h-auto' /></Link>
            <Link><span><p className="font-bold text-gray-800 mt-1 ml-1">{item.name}</p></span></Link>
            <Link><h2 className="text-sm font-medium text-[#4E5664] ml-1">{item.title}</h2></Link>
            <div className='flex'>
              <span><Link><p className="text-lg font-semibold text-black ml-1" data-testid="product-card-selling-price">₹{item.Price}</p></Link></span>
               <span><Link><p className='text-black font-thin  text-1xl ml-1 line-through '>₹{item.price}</p></Link></span>
              <span><Link><p className="text-sm font-semibold text-green-600 whitespace-nowrap" data-testid="product-card-discount ml-1">{item.Discount}</p></Link></span>
            </div>
          </div>
        ))}
      </div>

      {/* View More */}
      <div className='text-center text-3xl underline font-bold mb-10'>
        <Link><h1>View More</h1></Link>
      </div>
    </div>
  )
}

export default Man
