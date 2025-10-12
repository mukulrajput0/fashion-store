import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Img from "../assets/image/shirt-man/s.png";
import Img4 from "../assets/image/MERCHANDISE/m.png";
import Img5 from "../assets/image/shirt-man/shirt9.jpg";
import Img6 from "../assets/image/MERCHANDISE/s.png";
import Img7 from "../assets/image/shoes/s.png";
import Img8 from "../assets/image/shirt-man/shirt2.jpg";
import Img9 from "../assets/image/pent/pent.png";
import Img10 from "../assets/image/pent/pent1.png";
import Img11 from "../assets/image/pent/pent2.png";
import Img12 from "../assets/image/pent/pent3.png";
import Img13 from "../assets/image/girl-tshirt/10.png";
import Img14 from "../assets/image/tt/tt2.png";
import Img15 from "../assets/image/girl-tshirt/3.png";
import Img16 from "../assets/image/tt/tt4.png";
import Img17 from "../assets/image/girl-tshirt/5.png";
import Img18 from "../assets/image/tt/tt6.png";
import man from "../assets/image/man-image.jpg";
import girl from "../assets/image/girl-image.jpg";
import Img19 from "../assets/image/tt-men/1.png"
import Img20 from "../assets/image/tt-men/2.png"
import Img21 from "../assets/image/tt-men/3.png"
import Img22 from "../assets/image/tt-men/4.png"
import Img23 from "../assets/image/tt-men/5.png"
import Img24 from "../assets/image/girl-jeans/j.png"
import Img25 from "../assets/image/girl-jeans/j6.png"
import Img26 from "../assets/image/girl-jeans/j2.png"
import Img27 from "../assets/image/girl-jeans/j8.png"
import Img28 from "../assets/image/girl-jeans/j4.png"
import Img29 from "../assets/image/girl-jeans/j5.png"
import Img30 from "../assets/image/girl-jeans/j6.png"
import Img31 from "../assets/image/girl-jeans/j7.png"
import Img32 from "../assets/image/girl-jeans/j8.png"
import Img33 from "../assets/image/girl-jeans/j9.png"
import Img34 from "../assets/image/girl-jeans/j10.png"
import Img35 from "../assets/image/short/short.png"
import Img36 from "../assets/image/hall-pent/1.png"
import Img37 from "../assets/image/short/short2.png"
import Img38 from "../assets/image/hall-pent/3.png"
import Img39 from "../assets/image/short/short4.png"
import Img40 from "../assets/image/hall-pent/9.png"
import Img41 from "../assets/image/man-collection/a.png"
import Img42 from "../assets/image/man-collection/b.png"
import Img43 from "../assets/image/man-collection/b1.png"
import Img44 from "../assets/image/man-collection/b2.png"
import Img45 from "../assets/image/man-collection/b3.png"
import Img46 from "../assets/image/man-collection/b4.png"
import Img47 from "../assets/image/Bag/1.png"
import Img48 from "../assets/image/Bag/2.png"
import Img49 from "../assets/image/Bag/3.png"
import Img50 from "../assets/image/Bag/4.png"
import Img51 from "../assets/image/Bag/5.png"
import Img52 from "../assets/image/Bag/6.png"
import Img53 from "../assets/image/man-shoes/1.png"
import Img54 from "../assets/image/man-shoes/2.png"
import Img55 from "../assets/image/man-shoes/3.png"
import Img56 from "../assets/image/man-shoes/4.png"
import Img57 from "../assets/image/man-shoes/5.png"
import Img58 from "../assets/image/man-shoes/6.png"
// import { useSearch } from "../context/SearchContext"; 
import { useSelector } from "react-redux";
import ProductGrid from "../components/ProductGrid";


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";



// Collections
export const collection = [
  { id: 1, name: "C-Store", title: "Men's Black Oversized T-Shirt", Price: 699, price: 1299, Discount: "45% off", image: Img },
  { id: 2, name: "C-Store", title: "Men's Printed Casual T-Shirt", Price: 599, price: 1099, Discount: "40% off", image: Img4 },
  { id: 3, name: "C-Store", title: "Men's Round Neck Cotton Tee", Price: 499, price: 999, Discount: "50% off", image: Img5 },
  { id: 4, name: "C-Store", title: "Men's Slim Fit Crew Neck T-Shirt", Price: 699, price: 1199, Discount: "40% off", image: Img6 },
  { id: 5, name: "C-Store", title: "Men's Sports Running T-Shirt", Price: 599, price: 999, Discount: "40% off", image: Img7 },
  { id: 7, name: "C-Store", title: "Men's Blue Graphic Print Tee", Price: 499, price: 899, Discount: "45% off", image: Img19 },
  { id: 8, name: "C-Store", title: "Men's Green Half Sleeve T-Shirt", Price: 599, price: 999, Discount: "40% off", image: Img20 },
  { id: 9, name: "C-Store", title: "Men's Grey Casual Round Neck Tee", Price: 499, price: 899, Discount: "40% off", image: Img21 },
  { id: 10, name: "C-Store", title: "Men's Printed Oversized T-Shirt", Price: 699, price: 1199, Discount: "40% off", image: Img22 },
  { id: 11, name: "C-Store", title: "Men's Trendy Graphic T-Shirt", Price: 599, price: 999, Discount: "40% off", image: Img23 },
];

export const a = [
  { id: 1, name: "C-Store", title: "Men's Classic Casual T-Shirt", Price: 799, price: 1399, Discount: "45% off", image: Img41 },
];
export const b1 = [
  { id: 2, name: "C-Store", title: "Men's Slim Fit Denim Jeans", Price: 1499, price: 2499, Discount: "40% off", image: Img42 },
];
export const c1 = [
  { id: 3, name: "C-Store", title: "Men's Relaxed Fit Cargo Pants", Price: 1299, price: 2199, Discount: "40% off", image: Img43 },
];
export const d1 = [
  { id: 4, name: "C-Store", title: "Men's Cotton Formal Shirt", Price: 1199, price: 1999, Discount: "40% off", image: Img44 },
];
export const e1 = [
  { id: 5, name: "C-Store", title: "Men's Oversized Hoodie", Price: 1599, price: 2799, Discount: "43% off", image: Img45 },
];
export const f1 = [
  { id: 6, name: "C-Store", title: "Men's Half Sleeve Polo T-Shirt", Price: 899, price: 1499, Discount: "40% off", image: Img46 },
];

export const b = [
  { id: 1, name: "C-Store", title: "Women's Black Oversized T-Shirt", Price: 699, price: 1199, Discount: "40% off", image: Img13 },
  { id: 2, name: "C-Store", title: "Women's White Printed T-Shirt", Price: 799, price: 1299, Discount: "38% off", image: Img14 },
  { id: 3, name: "C-Store", title: "Women's Peach Graphic Tee", Price: 599, price: 999, Discount: "40% off", image: Img15 },
  { id: 4, name: "C-Store", title: "Women's Green Loose Fit T-Shirt", Price: 799, price: 1399, Discount: "43% off", image: Img16 },
  { id: 5, name: "C-Store", title: "Women's Grey Minimalist T-Shirt", Price: 699, price: 1199, Discount: "42% off", image: Img17 },
  { id: 6, name: "C-Store", title: "Women's Yellow Summer T-Shirt", Price: 599, price: 999, Discount: "40% off", image: Img18 },
];

export const c = [
  { id: 7, name: "C-Store", title: "Women's Skinny Blue Jeans", Price: 1299, price: 2199, Discount: "40% off", image: Img24 },
  { id: 8, name: "C-Store", title: "Women's High-Rise Black Jeans", Price: 999, price: 1699, Discount: "41% off", image: Img25 },
  { id: 9, name: "C-Store", title: "Women's Light Wash Denim Jeans", Price: 1199, price: 1999, Discount: "40% off", image: Img26 },
  { id: 10, name: "C-Store", title: "Women's Distressed Slim Jeans", Price: 999, price: 1699, Discount: "41% off", image: Img27 },
  { id: 11, name: "C-Store", title: "Women's Grey Straight Fit Jeans", Price: 1099, price: 1799, Discount: "39% off", image: Img28 },
  { id: 12, name: "C-Store", title: "Women's Wide-Leg Blue Jeans", Price: 999, price: 1699, Discount: "41% off", image: Img29 },
  { id: 13, name: "C-Store", title: "Women's Cropped Fit Jeans", Price: 799, price: 1399, Discount: "42% off", image: Img30 },
  { id: 14, name: "C-Store", title: "Women's Dark Wash Denim", Price: 899, price: 1599, Discount: "44% off", image: Img31 },
  { id: 15, name: "C-Store", title: "Women's Relaxed Fit Jeans", Price: 1299, price: 2299, Discount: "43% off", image: Img32 },
  { id: 16, name: "C-Store", title: "Women's Slim Fit Blue Jeans", Price: 1199, price: 1999, Discount: "40% off", image: Img33 },
  { id: 17, name: "C-Store", title: "Women's Mid-Waist Classic Jeans", Price: 999, price: 1699, Discount: "41% off", image: Img34 },
];

export const d = [
  { id: 18, name: "C-Store", title: "Men's Casual Denim Shorts", Price: 799, price: 1399, Discount: "43% off", image: Img35 },
  { id: 19, name: "C-Store", title: "Men's Slim Fit Formal Trousers", Price: 999, price: 1799, Discount: "44% off", image: Img36 },
  { id: 20, name: "C-Store", title: "Men's Cotton Cargo Shorts", Price: 699, price: 1299, Discount: "46% off", image: Img37 },
  { id: 21, name: "C-Store", title: "Men's Relaxed Fit Pants", Price: 999, price: 1799, Discount: "44% off", image: Img38 },
  { id: 22, name: "C-Store", title: "Men's Black Chino Shorts", Price: 899, price: 1599, Discount: "44% off", image: Img39 },
  { id: 23, name: "C-Store", title: "Men's Classic Linen Trousers", Price: 999, price: 1799, Discount: "44% off", image: Img40 },
];

export const bag1 = [
  { id: 1, name: "C-Store", title: "Classic Black Backpack", Price: 899, price: 1599, Discount: "44% off", image: Img47 },
  { id: 2, name: "C-Store", title: "Brown Leather Shoulder Bag", Price: 1499, price: 2499, Discount: "40% off", image: Img48 },
  { id: 3, name: "C-Store", title: "Blue Casual Laptop Bag", Price: 1199, price: 1999, Discount: "40% off", image: Img49 },
  { id: 4, name: "C-Store", title: "Travel Duffel Bag", Price: 1399, price: 2299, Discount: "39% off", image: Img50 },
  { id: 5, name: "C-Store", title: "Stylish Handbag", Price: 999, price: 1699, Discount: "41% off", image: Img51 },
  { id: 6, name: "C-Store", title: "Grey Trendy Backpack", Price: 1099, price: 1799, Discount: "39% off", image: Img52 },
];

export const shoes = [
  { id: 1, name: "C-Store", title: "Men's White Sneakers", Price: 2499, price: 4499, Discount: "44% off", image: Img53 },
  { id: 2, name: "C-Store", title: "Men's Black Sports Shoes", Price: 2999, price: 5499, Discount: "45% off", image: Img54 },
  { id: 3, name: "C-Store", title: "Men's Casual Running Shoes", Price: 1999, price: 3999, Discount: "50% off", image: Img55 },
  { id: 4, name: "C-Store", title: "Men's Grey Training Shoes", Price: 2499, price: 4999, Discount: "50% off", image: Img56 },
  { id: 5, name: "C-Store", title: "Men's Red & Black Sneakers", Price: 2299, price: 4199, Discount: "45% off", image: Img57 },
  { id: 6, name: "C-Store", title: "Men's High-Top Street Shoes", Price: 2799, price: 4999, Discount: "44% off", image: Img58 },
];

const slides = [
  "https://images.bewakoof.com/uploads/grid/app/bestseller-1X1-IK--2--1756143662.jpg",
  "https://images.bewakoof.com/uploads/grid/app/1x1-KoreanFever-men-02-1756192912.jpg",
  "https://images.bewakoof.com/uploads/grid/app/Denim-Verse-1x1-HC-BANNER-Straight-menn-1756185939.gif",
  "https://images.bewakoof.com/uploads/grid/app/1X1-RippersSneakers-ALL-1756206461.gif",
  "https://images.bewakoof.com/uploads/grid/app/1x1-OS-men--6--1755882379.jpg",
  "https://images.bewakoof.com/uploads/grid/app/1x1-JOGGERS-2--2--1756190636.jpg",
  "https://images.bewakoof.com/uploads/grid/app/1x1-CFT-men--5--1755882379.jpg",
  "https://images.bewakoof.com/uploads/grid/app/1x1---shirts-1755681571.jpg",
  "https://images.bewakoof.com/uploads/grid/app/1x1-THE-CARGO-CULTURE-BANNER-1755882416.jpg",
  "https://images.bewakoof.com/uploads/grid/app/1x1-JULY-DOTW-Men-Refresh-1755861052.jpg",
  "https://images.bewakoof.com/uploads/grid/app/1x1-Pyjamas-Men-BANNER-1755765939.jpg",
];

const Home = () => {
  // const { searchQuery } = useSearch();
  // const searchQuery = useSelector((state) => state.search.query);
  const navigate = useNavigate();

  // ---------------- Collection ----------------
  const [current, setCurrent] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev + itemsPerPage >= collection.length ? 0 : prev + itemsPerPage
      );
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev + itemsPerPage >= collection.length ? 0 : prev + itemsPerPage
    );
  };
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? Math.max(collection.length - itemsPerPage, 0) : prev - itemsPerPage
    );
  };
  const visibleItems = collection.slice(current, current + itemsPerPage);

  // ---------------- Pants ----------------
  const [current2, setCurrent2] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent2((prev) => (prev + 3 >= a.length ? 0 : prev + 3));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // ---------------- Woman Trending ----------------
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 6;

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide5();
    }, 4000);
    return () => clearInterval(timer);
  }, [startIndex]);

  const nextSlide5 = () => {
    setStartIndex((prev) =>
      prev + visibleCount >= b.length ? 0 : prev + visibleCount
    );
  };

  const prevSlide5 = () => {
    setStartIndex((prev) =>
      prev === 0 ? Math.max(b.length - visibleCount, 0) : prev - visibleCount
    );
  };

  

  //  const filteredProducts = collection.filter((item) =>
  //   item.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  // const filteredProducts1 = a.filter((item) =>
  //   item.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  // const filteredProducts2 = b1.filter((item) =>
  //   item.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  // const filteredProducts3 = c1.filter((item) =>
  //   item.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  // const filteredProducts4 = d1.filter((item) =>
  //   item.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  // const filteredProducts5 = e1.filter((item) =>
  //   item.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  // const filteredProducts6 = f1.filter((item) =>
  //   item.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  // const filteredProducts7 = b.filter((item) =>
  //   item.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  // const filteredProducts8 = c.filter((item) =>
  //   item.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  // const filteredProducts9 = d.filter((item) =>
  //   item.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  // const filteredProducts10 = bag1.filter((item) =>
  //   item.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  // const filteredProducts11 = shoes.filter((item) =>
  //   item.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <div className="max-w-screen mx-auto">
    
     <div className="w-full sm:w-full md:w-full lg:w-full h-auto mx-auto justify-center items-center">
     {/* <div className="w-full px-4 py-6 "> */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={15}
        slidesPerView={5}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{
          delay: 2000, // 2 seconds
          disableOnInteraction: false, // keeps autoplay after user interaction
        }}
        loop={true} // keeps looping slides
        className="pb-6"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                src={src}
                alt={`men-category-${index}`}
                className=" h-150 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

      {/* Coupon */}
      <div className="w-full">
        <a href="/master-url?gender=women_unisex" title="Offer Banner" className="block">
          <img
            src="https://images.bewakoof.com/uploads/grid/app/offer-strip-DESKTOP-coupon--1--1755605800.jpg"
            alt="Offer Banner"
            loading="eager"
            className="w-full h-auto object-cover"
          />
        </a>
      </div>

      {/* Man / Woman Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4 my-8">
        <div className="relative w-full md:w-1/2 max-w-md hover:scale-105 transition duration-300">
          <img src={man} alt="Man" className="w-full h-auto object-cover rounded shadow" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => navigate("/Man")}
              className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 text-lg"
            >
              MAN
            </button>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 max-w-md hover:scale-105 transition duration-300">
          <img src={girl} alt="Woman" className="w-full h-auto object-cover rounded shadow" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => navigate("/Woman")}
              className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 text-lg"
            >
              WOMAN
            </button>
          </div>
        </div>
      </div>


        <h1 className="tracking-[1rem] text-4xl font-bold text-center mb-6 mt-10">
        Trending Categories
      </h1>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10 mx-10">
        {a.map((item) => (
          <div key={item.id} className="rounded overflow-hidden shadow hover:shadow-md transition">
            <a href="#">
              <Link to={`/homea/${item.id}`}><img
                src={item.image}
                alt={item.alt}
                 className="hover:brightness-75 cursor-pointer w-200 h-120 object-cover rounded"
                loading="lazy"
              /></Link>
            </a>
          </div>
        ))}

        {b1.map((item) => (
          <div key={item.id} className="rounded overflow-hidden shadow hover:shadow-md transition">
            <a href="#">
              <Link to={`/homelower/${item.id}`}><img
                src={item.image}
                alt={item.alt}
                className="hover:brightness-75 cursor-pointer w-200 h-120 object-cover rounded"
                loading="lazy"
              /></Link>
            </a>
          </div>
        ))}

        {c1.map((item) => (
          <div key={item.id} className="rounded overflow-hidden shadow hover:shadow-md transition">
            <a href="#">
              <Link to={`/homecargo/${item.id}`}><img
                src={item.image}
                alt={item.alt}
                 className="hover:brightness-75 cursor-pointer w-200 h-120 object-cover rounded"
                loading="lazy"
              /></Link>
            </a>
          </div>
        ))}

        {d1.map((item) => (
          <div key={item.id} className="rounded overflow-hidden shadow hover:shadow-md transition">
            <a href="#">
              <Link to={`/homeshirt/${item.id}`}><img
                src={item.image}
                alt={item.alt}
                 className="hover:brightness-75 cursor-pointer w-200 h-120 object-cover rounded"
                loading="lazy"
              /></Link>
            </a>
          </div>
        ))}
      

     
        {e1.map((item) => (
          <div key={item.id} className="rounded overflow-hidden shadow hover:shadow-md transition">
            <a href="#">
              <Link to={`/hometouser/${item.id}`}><img
                src={item.image}
                alt={item.alt}
                 className="hover:brightness-75 cursor-pointer w-200 h-120 object-cover rounded"
                loading="lazy"
              /></Link>
            </a>
          </div>
        ))}
      

      
        {f1.map((item) => (
          <div key={item.id} className="rounded p-1 shadow hover:shadow-lg transition">
            <a href="#">
              <Link to={`/homehalf/${item.id}`}><img
                src={item.image}
                alt={item.alt}
                 className="hover:brightness-75 cursor-pointer w-200 h-120 object-cover rounded"
                loading="lazy"
              /></Link>
            </a>
          </div>
        ))}
     
  </div>    

  {/* banner */}

<div className="w-full mt-10 mb-3">
      <div className="w-full">
        <a href="/designs-of-the-week-men" title="">
          <img
            src="https://images.bewakoof.com/uploads/grid/app/DOTW---DESKTOP-MEN--1756129224.gif"
            alt="designs-of-the-week-men"
            loading="lazy"
            className="w-full p-0"
          />
        </a>
      </div>
    </div>
    

      {/* Collection */}
      <h1 className="tracking-[1rem] text-4xl font-bold text-center mb-10">Collection</h1>
      <div className="relative w-full my-4">
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-20"
        >
          &#10094;
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-center mb-10">
          {visibleItems.map((item) => (
            <div key={item.id} className="rounded overflow-hidden shadow hover:shadow-md transition">
              <Link to={`/homecoll/${item.id}`}><img
                src={item.image}
                alt={item.name}
                className="w-200 h-120 object-cover hover:brightness-75 cursor-pointer rounded"
              /></Link>
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-20"
        >
          &#10095;
        </button>
      </div>

      

         {/* short collection */}

       <h1 className="tracking-[1rem] text-4xl font-bold text-center mb-6">short Collection</h1>
      <div className="relative w-full my-4">
        {/* <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-20"
        >
          &#10094;
        </button> */}
        <h2 className="text-2xl font-semibold text-center mb-8 underline">
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
        {d.map((item) => (
          <div key={item.id} className="rounded overflow-hidden shadow hover:shadow-md transition">
            <a href="#">
              <Link to={`/homed/${item.id}`}><img
                src={item.image}
                alt={item.alt}
                className="w-200 h-120 object-cover"
                loading="lazy"
              /></Link>
            </a>
          </div>
        ))}
      </div>
        {/* <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-20"
        >
          &#10095;
        </button> */}
      </div>
    <h1 className="tracking-[1rem] text-4xl font-bold text-center mb-6">shoes Collection</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mb-10">
        {shoes.map((item) => (
          <div key={item.id} className="rounded overflow-hidden shadow hover:shadow-md transition">
            <a href="#">
              <Link to={`/homeshoes/${item.id}`}><img
                src={item.image}
                alt={item.alt}
                className="w-200 h-120 object-cover"
                loading="lazy"
              /></Link>

            </a>
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
     

      {/* Woman Trending */}
       <h1 className="tracking-[1rem] text-4xl font-bold text-center mb-6 mt-10">Woman Trending Collection</h1>
      <div className="relative w-full my-1">
        {/* <button
          onClick={prevSlide5}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-75 z-20"
        >
          &#10094;
        </button> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {b.slice(startIndex, startIndex + visibleCount).map((item) => (
            <div
              key={item.id}
              className="rounded overflow-hidden shadow hover:shadow-md transition"
            >
              <Link to={`/homeb/${item.id}`}><img
                src={item.image}
                alt={item.name}
                className="w-200 h-120 object-cover hover:brightness-75 cursor-pointer rounded"
              /></Link>
            </div>
          ))}
        </div>
        {/* <button
          onClick={nextSlide5}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-20"
        >
          &#10095;
        </button> */}
      </div>

       {/* jeans collection    */}

      <h1 className="tracking-[1rem] text-4xl font-bold text-center mb-6 mt-10">Girls Jeans Collection</h1>
      <div className="relative w-full my-1">
        {/* <button
          onClick={prevSlide5}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-75 z-20"
        >
          &#10094;
        </button> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mb-10">
          {c.slice(startIndex, startIndex + visibleCount).map((item) => (
            <div
              key={item.id}
              className="rounded overflow-hidden shadow hover:shadow-md transition"
            >
              <Link to={`/homec/${item.id}`}><img
                src={item.image}
                alt={item.name}
                className="w-200 h-120 object-cover hover:brightness-75 cursor-pointer rounded"
              /></Link>
            </div>
          ))}
        </div>
        {/* <button
          onClick={nextSlide5}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-20"
        >
          &#10095;
        </button> */}
      </div>

       {/* Bag Banner */}

        <section className="mb-0 sm:mb-3 pb-1" data-testid="banner-wrapper">
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
    </section>

           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mb-10">
        {bag1.map((item) => (
          <div key={item.id} className="rounded overflow-hidden shadow hover:shadow-md transition">
            <a href="#">
              <Link to={`/homebag/${item.id}`}><img
                src={item.image}
                alt={item.alt}
                className="w-200 h-120 object-cover"
                loading="lazy"
              /></Link>
            </a>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;
