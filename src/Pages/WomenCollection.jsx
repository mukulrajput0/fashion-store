// import React from 'react'
// import Img23 from "../assets/image/jecket/1.png"
// import Img24 from "../assets/image/jecket/2.png"
// import Img25 from "../assets/image/jecket/3.png"
// import Img26 from "../assets/image/jecket/4.png"
// import Img27 from "../assets/image/jecket/5.png"
// import Img28 from "../assets/image/jecket/6.png"
// import Img29 from "../assets/image/jecket/7.png"
// import Img30 from "../assets/image/jecket/8.png"
// import Img31 from "../assets/image/jecket/9.png"
// import Img32 from "../assets/image/jecket/10.png"
// import Img33 from "../assets/image/jecket/11.png"
// import Img34 from "../assets/image/jecket/12.png"
// import Img35 from "../assets/image/jecket/13.png"

//  export const f=[
//     { id: 20,name:"C-Store", title:"Women's Brown Oversized Cotton T-shirt", Price: 1000,price:599, Discount: "30-40% Off", image: Img23 },
//   { id: 21,name:"C-Store", title:"Women's Olive Green Oversized Graphic T-shirt", Price: 1000,price:599,  Discount: "30-40% Off", image: Img24 },
//   { id: 22,name:"C-Store", title:"Women's White Minimalist Graphic T-shirt", Price: 1000,price:599,  Discount: "30-40% Off", image: Img25 },
//   { id: 23,name:"C-Store", title:"Women's Black Streetwear Oversized T-shirt", Price: 1000,price:599,  Discount: "30-40% Off", image: Img26 },
//   { id: 24,name:"C-Store", title:"Women's Yellow Loose Fit Summer T-shirt", Price: 1000,price:599,  Discount: "30-40% Off", image: Img27 },
//    { id: 25,name:"C-Store", title:"Women's Brown Oversized Cotton T-shirt", Price: 1000,price:599, Discount: "30-40% Off", image: Img28 },
//   { id: 26,name:"C-Store", title:"Women's Olive Green Oversized Graphic T-shirt", Price: 1000,price:599,  Discount: "30-40% Off", image: Img29 },
//   { id: 27,name:"C-Store", title:"Women's White Minimalist Graphic T-shirt", Price: 1000,price:599,  Discount: "30-40% Off", image: Img30 },
//   { id: 28,name:"C-Store", title:"Women's Black Streetwear Oversized T-shirt", Price: 1000,price:599,  Discount: "30-40% Off", image: Img31 },
//   { id: 29,name:"C-Store", title:"Women's Yellow Loose Fit Summer T-shirt", Price: 1000,price:599,  Discount: "30-40% Off", image: Img32 },
//   { id: 30,name:"C-Store", title:"Women's Yellow Loose Fit Summer T-shirt", Price: 1000,price:599,  Discount: "30-40% Off", image: Img33 },
//   { id: 31,name:"C-Store", title:"Women's Yellow Loose Fit Summer T-shirt", Price: 1000,price:599,  Discount: "30-40% Off", image: Img34 },
//   { id: 32,name:"C-Store", title:"Women's Yellow Loose Fit Summer T-shirt", Price: 1000,price:599,  Discount: "30-40% Off", image: Img35 },
// ]
// const WomenCollection = () => {

   
//   return (
//     <div>
//          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 ml:grid-cols-4 gap-6 mt-10 items-center justify-center   ml-10 mr-10'>
//         {f.map((item) => (
//           <div key={item.id} className=" rounded p-1 shadow hover:shadow-ml  transition">
//             <Link to={`/shortgirldummy/${item.id}`}><img src={item.image} alt={item.name} className='hover:brightness-75 cursor-pointer w-full h-120 object-cover' /></Link>
//             <Link><span><p className="font-bold text-gray-800 mt-1 ml-1">{item.name}</p></span></Link>
//                         <Link><h2 className="text-sm font-medium text-[#4E5664] ml-1">{item.title}</h2></Link>
//                         <div className='flex'>
//                           <span><Link><p className="text-lg font-semibold text-black ml-1" data-testid="product-card-selling-price">₹{item.Price}</p></Link></span>
//                           <span><Link><p className="text-sm font-semibold text-green-600 whitespace-nowrap" data-testid="product-card-discount ml-1">{item.Discount}</p></Link></span>
//                         </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default WomenCollection


import React from "react";
import { Link } from "react-router-dom";

import Img23 from "../assets/image/jecket/1.png";
import Img24 from "../assets/image/jecket/2.png";
import Img25 from "../assets/image/jecket/3.png";
import Img26 from "../assets/image/jecket/4.png";
import Img27 from "../assets/image/jecket/5.png";
import Img28 from "../assets/image/jecket/6.png";
import Img29 from "../assets/image/jecket/7.png";
import Img30 from "../assets/image/jecket/8.png";
import Img31 from "../assets/image/jecket/9.png";
import Img32 from "../assets/image/jecket/10.png";
import Img33 from "../assets/image/jecket/11.png";
import Img34 from "../assets/image/jecket/12.png";
import Img35 from "../assets/image/jecket/13.png";

export const f = [
  { id: 20, name: "C-Store", title: "Women's Brown Oversized Cotton T-shirt", Price: 1000, price: 599, Discount: "30-40% Off", image: Img23 },
  { id: 21, name: "C-Store", title: "Women's Olive Green Oversized Graphic T-shirt", Price: 1000, price: 599, Discount: "30-40% Off", image: Img24 },
  { id: 22, name: "C-Store", title: "Women's White Minimalist Graphic T-shirt", Price: 1000, price: 599, Discount: "30-40% Off", image: Img25 },
  { id: 23, name: "C-Store", title: "Women's Black Streetwear Oversized T-shirt", Price: 1000, price: 599, Discount: "30-40% Off", image: Img26 },
  { id: 24, name: "C-Store", title: "Women's Yellow Loose Fit Summer T-shirt", Price: 1000, price: 599, Discount: "30-40% Off", image: Img27 },
  { id: 25, name: "C-Store", title: "Women's Brown Oversized Cotton T-shirt", Price: 1000, price: 599, Discount: "30-40% Off", image: Img28 },
  { id: 26, name: "C-Store", title: "Women's Olive Green Oversized Graphic T-shirt", Price: 1000, price: 599, Discount: "30-40% Off", image: Img29 },
  { id: 27, name: "C-Store", title: "Women's White Minimalist Graphic T-shirt", Price: 1000, price: 599, Discount: "30-40% Off", image: Img30 },
  { id: 28, name: "C-Store", title: "Women's Black Streetwear Oversized T-shirt", Price: 1000, price: 599, Discount: "30-40% Off", image: Img31 },
  { id: 29, name: "C-Store", title: "Women's Yellow Loose Fit Summer T-shirt", Price: 1000, price: 599, Discount: "30-40% Off", image: Img32 },
  { id: 30, name: "C-Store", title: "Women's Yellow Loose Fit Summer T-shirt", Price: 1000, price: 599, Discount: "30-40% Off", image: Img33 },
  { id: 31, name: "C-Store", title: "Women's Yellow Loose Fit Summer T-shirt", Price: 1000, price: 599, Discount: "30-40% Off", image: Img34 },
  { id: 32, name: "C-Store", title: "Women's Yellow Loose Fit Summer T-shirt", Price: 1000, price: 599, Discount: "30-40% Off", image: Img35 },
];

const WomenCollection = () => {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-6 text-center">Women's Collection</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {f.map((item) => (
          <div key={item.id} className="rounded shadow hover:shadow-lg transition p-2">
            <Link to={`/shortgirldummy/${item.id}`}>
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover rounded hover:brightness-90 cursor-pointer" />
            </Link>
            <p className="font-bold text-gray-800 mt-2">{item.name}</p>
            <h2 className="text-sm text-gray-600">{item.title}</h2>
            <div className="flex justify-between mt-1">
              <p className="font-semibold text-black">₹{item.Price}</p>
              <p className="text-green-600 font-semibold">{item.Discount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenCollection;

