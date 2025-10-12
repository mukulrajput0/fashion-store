import React from 'react'
import { Link } from 'react-router-dom'
import Img from "../assets/image/women-collection/cw.png"
import Img1 from "../assets/image/women-collection/cw1.png"
import Img2 from "../assets/image/women-collection/tt5.png"
import Img3 from "../assets/image/women-collection/tt4.png"
import Img4 from "../assets/image/women-collection/cw4.png"
import Img5 from "../assets/image/women-collection/cw5.png"
import Img6 from "../assets/image/women-collection/cw6.png"
import Img7 from "../assets/image/women-collection/cw7.png"
import Img8 from "../assets/image/women-collection/cw8.png"
import Img9 from "../assets/image/women-collection/tt1.png"
import Img10 from "../assets/image/women-collection/tt2.png"
import Img11 from "../assets/image/women-collection/tt3.png"
import Img12 from "../assets/image/women-collection/cw9.png"
import Img15 from "../assets/image/women-collection/cw10.png"
import Img16 from "../assets/image/women-collection/cw11.png"
import Img17 from "../assets/image/categories/1.png"
import Img18 from "../assets/image/categories/2.png"
import Img19 from "../assets/image/categories/3.png"
import Img20 from "../assets/image/short-girl/s.png"
import Img21 from "../assets/image/categories/5.png"
import Img22 from "../assets/image/categories/6.png"
// import Img23 from "../assets/image/t/t9.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
"https://images.bewakoof.com/uploads/grid/app/bestseller-1X1-RM--2--1756144334.jpg",
"https://images.bewakoof.com/uploads/grid/app/1x1-KoreanFever-WOMEN-1756103640.jpg",
"https://images.bewakoof.com/uploads/grid/app/Denim-Verse-1x1-HC-BANNER-Straight-women-1756130491.gif",
"https://images.bewakoof.com/uploads/grid/app/1x1---OS-women--1--1756210015.jpg",
"https://images.bewakoof.com/uploads/grid/app/1x1-JOGGERS-1--3--1756204887.jpg",
"https://images.bewakoof.com/uploads/grid/app/1x1-CFT-women--12--1756210014.jpg",
"https://images.bewakoof.com/uploads/grid/app/BewakoofXGoogle-1x1-01rev--1--1755856949.jpg",
"https://images.bewakoof.com/uploads/grid/app/1x1-HC-Cargo-Women--1756209548.jpg",
"https://images.bewakoof.com/uploads/grid/app/1x1-THE-PANTS-EDIT-Women-BANNER-1755886806.jpg",
"https://images.bewakoof.com/uploads/grid/app/1x1-PYJAMAS-BANNER-1756209917.jpg",
"https://images.bewakoof.com/uploads/grid/app/1x1-JULY--DOTW-Women-Refresh--1--1755847470.jpg",
];


export const a = [
  { id: 1, name:"C-Store", title:"Women's Orange Queen Bee Graphic Printed Oversized T-shirt", Price: 1001, Discount: "30-40% Off", image: Img },
  { id: 2, name:"C-Store", title:"Women's Black Oversized Joggers", Price: 1502, Discount: "30-40% Off", image: Img1 },
  { id: 3, name:"C-Store", title:"Women's White Printed Oversized T-shirt", Price: 2000, Discount: "30-40% Off", image: Img2 },
  { id: 4, name:"C-Store", title:"Women's Pink Loose Fit Graphic T-shirt", Price: 1500, Discount: "30-40% Off", image: Img3 },
  { id: 5, name:"C-Store", title:"Women's Green Super Loose Fit Joggers", Price: 1000, Discount: "30-40% Off", image: Img4 },
  { id: 6, name:"C-Store", title:"Women's Blue Denim Wide-Leg Trousers", Price: 1800, Discount: "30-40% Off", image: Img5 },
  { id: 7, name:"C-Store", title:"Women's Black Full Sleeve Oversized T-shirt", Price: 4000, Discount: "30-40% Off", image: Img6 },
  { id: 8, name:"C-Store", title:"Women's Maroon Casual Hoodie", Price: 2500, Discount: "30-40% Off", image: Img7 },
  { id: 9, name:"C-Store", title:"Women's White & Blue Striped T-shirt", Price: 2000, Discount: "30-40% Off", image: Img8 },
  { id: 10, name:"C-Store", title:"Women's Black Cropped T-shirt", Price: 1500, Discount: "30-40% Off", image: Img9 },
  // { id: 11, name:"C-Store", title:"Women's Graphic Printed Oversized T-shirt", Price: 6000, Discount: "30-40% Off", image: Img10 },
  // { id: 12, name:"C-Store", title:"Women's Oversized Cotton Fit T-shirt", Price: 2000, Discount: "30-40% Off", image: Img11 },
]

const categories = [
  {  id: 1, name: "C-Store", title: "Women's Oversized Graphic T-shirt", Price: 599, Discount: "30-40% Off", image: Img17 },
];

const categories1 = [
  { id: 2, name: "C-Store", title: "Women's Casual Joggers", Price: 599, Discount: "30-40% Off", image: Img18 },
];

const categories2 = [
  { id: 3, name: "C-Store", title: "Women's High-Waist Trousers", Price: 599, Discount: "30-40% Off", image: Img19 },
];

const categories3 = [
  { id: 4, name: "C-Store", title: "Women's Short Skirt", Price: 599, Discount: "30-40% Off", image: Img20 },
];

const categories4 = [
  { id: 5, name: "C-Store", title: "Women's Elegant Long Dress", Price: 599, Discount: "30-40% Off", image: Img21 },
];

const categories5 = [
  { id: 6, name: "C-Store", title: "Women's Full-Length Jumpsuit", Price: 599, Discount: "30-40% Off", image: Img22 },
];





// export const b = [
//   { id: 1,name:"C-Store", Price: 1000, Discount: "30-40% Off", image: Img17 },
//   { id: 2,name:"C-Store", Price: 1502, Discount: "30-40% Off", image: Img18 },
//   { id: 3,name:"C-Store", Price: 2000, Discount: "30-40% Off", image: Img19 },
//   { id: 4,name:"C-Store", Price: 1500, Discount: "30-40% Off", image: Img20 },
//   { id: 5,name:"C-Store", Price: 1000, Discount: "30-40% Off", image: Img21 },
  
// ]

export const d =[
  { id: 15,name:"C-Store", title:"Women's Brown Oversized Cotton T-shirt", Price: 1000,price:599, Discount: "30-40% Off", image: Img16 },
  { id: 16,name:"C-Store", title:"Women's Olive Green Oversized Graphic T-shirt", Price: 1000,price:599,  Discount: "30-40% Off", image: Img15 },
  { id: 17,name:"C-Store", title:"Women's White Minimalist Graphic T-shirt", Price: 1000,price:599,  Discount: "30-40% Off", image: Img10 },
  { id: 18,name:"C-Store", title:"Women's Black Streetwear Oversized T-shirt", Price: 1000,price:599,  Discount: "30-40% Off", image: Img11 },
  { id: 19,name:"C-Store", title:"Women's Yellow Loose Fit Summer T-shirt", Price: 1000,price:599,  Discount: "30-40% Off", image: Img12 },
]
const Woman = () => {
  return (

    
    <div>
<div className="w-full px-4 py-6 relative bg-[#F8F9FA] rounded-full p-[2px] flex items-center shadow-[0px_0px_5px_0px_#00000029]  mr-7 h-full">
<Swiper
modules={[Pagination]}
spaceBetween={15}
slidesPerView={5}
pagination={{ clickable: true, dynamicBullets: true }}
className="pb-6"
>
{slides.map((src, index) => (
<SwiperSlide key={index}>
<div className="w-full h-full overflow-hidden rounded-lg shadow-sm">
<img
src={src}
alt={`slide-${index}`}
className="w-200 h-160 object-cover"
/>
</div>
</SwiperSlide>
))}
</Swiper>
</div> 

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10 mx-10">
      {/* Girl T-Shirts */}
      {categories.map((item) => (
        <div
          key={item.id}
          className="rounded p-1 shadow hover:shadow-lg transition"
        >
          <Link to={`/girltshirt/${item.id}`}>
            <img
              src={item.image}
              alt={item.name}
              
              className="hover:brightness-75 cursor-pointer w-200 h-120 object-cover rounded"
            />
          </Link>
        </div>
      ))}

      {/* Girl Lowers */}
      {categories1.map((item) => (
        <div
          key={item.id}
          className="rounded p-1 shadow hover:shadow-lg transition"
        >
          <Link to={`/girllower/${item.id}`}>
            <img
              src={item.image}
              alt={item.name}
              className="hover:brightness-75 cursor-pointer w-200 h-120 object-cover rounded"
            />
          </Link>
           <Link><h2 className="text-sm font-medium text-[#4E5664] ml-1">{item.title}</h2></Link>
        </div>
      ))}

      {/* Girl Trousers */}
      {categories2.map((item) => (
        <div
          key={item.id}
          className="rounded p-1 shadow hover:shadow-lg transition"
        >
          <Link to={`/girltouser/${item.id}`}>
            <img
              src={item.image}
              alt={item.name}
              className="hover:brightness-75 cursor-pointer w-200 h-120 object-cover rounded"
            />
          </Link>
           <Link><h2 className="text-sm font-medium text-[#4E5664] ml-1">{item.title}</h2></Link>
        </div>
      ))}

      {categories3.map((item) => (
        <div
          key={item.id}
          className="rounded p-1 shadow hover:shadow-lg transition"
        >
          <Link to={`/shortgirl/${item.id}`}>
            <img
              src={item.image}
              alt={item.name}
              className="hover:brightness-75 cursor-pointer w-200 h-120 object-cover rounded"
            />
          </Link>
           <Link><h2 className="text-sm font-medium text-[#4E5664] ml-1">{item.title}</h2></Link>
        </div>
      ))}

      {categories4.map((item) => (
        <div
          key={item.id}
          className="rounded p-1 shadow hover:shadow-lg transition"
        >
          <Link to={`/longdress/${item.id}`}>
            <img
              src={item.image}
              alt={item.name}
              className="hover:brightness-75 cursor-pointer w-200 h-120 object-cover rounded"
            />
          </Link>
           <Link><h2 className="text-sm font-medium text-[#4E5664] ml-1">{item.title}</h2></Link>
        </div>
      ))}

      {categories5.map((item) => (
        <div
          key={item.id}
          className="rounded p-1 shadow hover:shadow-lg transition"
        >
          <Link to={`/fullcloth/${item.id}`}>
            <img
              src={item.image}
              alt={item.name}
              className="hover:brightness-75 cursor-pointer w-200 h-120 object-cover rounded"
            />
          </Link>
           <Link><h2 className="text-sm font-medium text-[#4E5664] ml-1">{item.title}</h2></Link>
        </div>
      ))}
    </div>

      <div>
     <h1 className="tracking-[1rem] text-4xl font-bold text-center  ">Trending Collection</h1>
    </div>
     


      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 ml:grid-cols-4 gap-6 mt-10 items-center justify-center   ml-10 mr-10'>
        {a.map((item) => (
          <div key={item.id} className=" rounded p-1 shadow hover:shadow-ml  transition">
            <Link to={`/womenca/${item.id}`}><img src={item.image} alt={item.name} className='hover:brightness-75 cursor-pointer w-full h-120 object-cover' /></Link>
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

{/* banner */}
      <div className="w-full mt-10">
      <div className="w-full">
        <a href="/designs-of-the-week-men" title="">
          <img
            src="https://images.bewakoof.com/uploads/grid/app/DOTW---Desktop-women----1--1756130339.gif"
            alt="designs-of-the-week-men"
            loading="lazy"
            className="w-full p-0"
          />
        </a>
      </div>
    </div>

     {/* title */}
      <div>
        <h1 className="tracking-[1rem] text-4xl font-bold text-center mb-6 mt-10">Buy 2 Oversized T-shirts at Rs.599</h1>
      </div>

     

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 ml:grid-cols-4 gap-6 mt-10 items-center justify-center   ml-10 mr-10 '>
        {
          d.map((item) => (
            <div key={item.id} className=" rounded p-1 shadow hover:shadow-ml  transition  ">
            <Link to={`/womenA/${item.id}`}><img src={item.image} alt={item.name} className='hover:brightness-75 cursor-pointer w-full h-120 object-cover ' /></Link>
            {/* <span><p className=" text-black flex font-light text-[13px] ">{item.title.slice(0,30)}..</p></span> */}
            <Link><span><p className="font-bold text-gray-800 mt-1 ml-1">{item.name}</p></span></Link>
                        <Link><h2 className="text-sm font-medium text-[#4E5664] ml-1">{item.title}</h2></Link>
                        <div className='flex'>
                          <span><Link><p className="text-lg font-semibold text-black ml-1" data-testid="product-card-selling-price">₹{item.Price}</p></Link></span>
                          <span><Link><p className="text-sm font-semibold text-green-600 whitespace-nowrap" data-testid="product-card-discount ml-1">{item.Discount}</p></Link></span>
                        </div>
          </div>
          ))
        }
      </div>
              <div className='text-center text-bold text-3xl underline'>
                <Link><h1>View More</h1></Link>
               </div>

    </div>
  )
}


export default Woman

