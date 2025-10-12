import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import ProtectRouting from "../ProtectRouting/ProtectRouting";
import { useDispatch, useSelector } from "react-redux";
import { useSearch } from "../context/SearchContext";

 const Navbar = ()=> {
  const [isOpen, setIsOpen] = useState(false);
   const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery } = useSearch();
    const query = useSelector((state) => state.search.query);
  const dispatch = useDispatch();
  
  const logout = () => {
    localStorage.removeItem("loginuser");
    navigate("/login");
  };
  
    const items = useSelector((state) => state.addToCard.items);
  
  return (

    <nav className="top-0 left-0 w-full  bg-white py-4 shadow-md z-50 text-2xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between
      ">
        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer">
          C- <span className="text-red-400 font-bold text-3xl">sToRe</span>
        </h1>

        {/* Menu Button (Mobile) */}
        <button
          className="text-3xl md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <IoMenu />
        </button>

        {/* Links (Desktop) */}
        <ul className="hidden md:flex gap-6 items-center font-semibold">
          <li>
            <Link to="/" className="hover:text-red-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/man" className="hover:text-red-400 transition">
              Man
            </Link>
          </li>
          <li>
            <Link to="/Woman" className="hover:text-red-400 transition">
              Woman
            </Link>
          </li>
          <li>
            <Link to="/Bag" className="hover:text-red-400 transition">
              Bag
            </Link>
          </li>
          <li>
            <Link to="/Shoes" className="hover:text-red-400 transition">
              Shoes
            </Link>
          </li>
          <li>
            <Link to="/help" className="hover:text-red-400 transition">
              Help
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-red-400 transition">
              About
            </Link>
          </li>

          {/* Search */}
          <li>
          <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded-lg px-3 py-1 w-64 focus:outline-none focus:ring-2 focus:ring-red-400"
        />
          </li>

          {/* Login */}
          <li>
            <Link to="/login" className="hover:text-red-400 transition ">
              Login
            </Link>
          </li>

          {/* Cart */}
          <li>
            <Link to="/AddToCard" className=" relative text-2xl hover:text-red-400">
              <MdAddShoppingCart />
               {
items.length>0 &&(
 <span className='absolute -top-6 left-2 text-2xl text-red-500'>
  { items.length}
   </span>
)
   }
            </Link>
          </li>
           
<ProtectRouting>
 <div className="relative group inline-block ">
      <button className="p-2 rounded-full hover:bg-gray-100">
        <CgProfile size={24} />
      </button>

      <div className="absolute right-0 mt-0 w-40 bg-white border rounded-lg shadow-lg hidden group-hover:block z-50 ">
        <ul className="py-2 text-gray-700">
         <Link to="/Setting"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Setting</li></Link> 
         <Link to="/License"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">License</li></Link>
          <li onClick={logout} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
        </ul>
      </div>
    </div>

</ProtectRouting>


          
        </ul>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-gray-100 px-4 py-3 font-medium shadow-inner transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <Link to="/" className="block py-2 hover:text-red-400">
          Home
        </Link>
        <Link to="/man" className="block py-2 hover:text-red-400">
          Man
        </Link>
        <Link to="/Woman" className="block py-2 hover:text-red-400">
          Woman
        </Link>
        <Link to="/help" className="block py-2 hover:text-red-400">
          Help
        </Link>
        <Link to="/about" className="block py-2 hover:text-red-400">
          About
        </Link>

        {/* Search on mobile */}
        <div className="py-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-400"
          />
        </div>

        {/* Login */}
        {/* <Link to="/login" className="block py-2 hover:text-red-400">
          Login
        </Link> */}

        {/* Cart + Logout row */}
        <div className="flex items-center gap-6 text-2xl mt-3">
          <Link to="/AddToCard" className="hover:text-red-400">
            <MdAddShoppingCart />
          </Link>
          <IoMdLogOut
            onClick={logout}
            className="cursor-pointer hover:text-red-400"
          />
        </div>
      </div>
    </nav>
  );
}
export default Navbar

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { IoMenu } from "react-icons/io5";
// import { MdAddShoppingCart } from "react-icons/md";
// import { IoMdLogOut } from "react-icons/io";
// import { CgProfile } from "react-icons/cg";
// import ProtectRouting from "../ProtectRouting/ProtectRouting";
// import { useDispatch, useSelector } from "react-redux";
// import { useSearch } from "../context/SearchContext";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();
//   const { searchQuery, setSearchQuery } = useSearch();
//   const dispatch = useDispatch();

//   const items = useSelector((state) => state.addToCard.items);

//   const logout = () => {
//     localStorage.removeItem("loginuser");
//     navigate("/login");
//   };

//   return (
//     <nav className="top-0 left-0 w-full bg-white py-4 shadow-md z-50 text-lg">
//       <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold cursor-pointer">
//           C-<span className="text-red-400 font-bold text-3xl">sToRe</span>
//         </Link>

//         {/* Menu Button (Visible on small screens only) */}
//         <button
//           className="text-3xl md:hidden focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <IoMenu />
//         </button>

//         {/* Desktop Links */}
//         <ul className="hidden md:flex gap-6 items-center font-semibold">
//           <li><Link to="/" className="hover:text-red-400">Home</Link></li>
//           <li><Link to="/man" className="hover:text-red-400">Man</Link></li>
//           <li><Link to="/Woman" className="hover:text-red-400">Woman</Link></li>
//           <li><Link to="/Bag" className="hover:text-red-400">Bag</Link></li>
//           <li><Link to="/Shoes" className="hover:text-red-400">Shoes</Link></li>
//           <li><Link to="/help" className="hover:text-red-400">Help</Link></li>
//           <li><Link to="/about" className="hover:text-red-400">About</Link></li>

//           {/* Search Bar */}
//           <li>
//             <input
//               type="text"
//               placeholder="Search products..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="border rounded-lg px-3 py-1 w-60 focus:outline-none focus:ring-2 focus:ring-red-400 text-base"
//             />
//           </li>

//           {/* Cart */}
//           <li className="relative">
//             <Link to="/AddToCard" className="text-2xl hover:text-red-400">
//               <MdAddShoppingCart />
//               {items.length > 0 && (
//                 <span className="absolute -top-3 left-3 text-sm text-white bg-red-500 rounded-full px-2">
//                   {items.length}
//                 </span>
//               )}
//             </Link>
//           </li>

//           {/* Profile Dropdown */}
//           <ProtectRouting>
//             <div className="relative group inline-block">
//               <button className="p-2 rounded-full hover:bg-gray-100">
//                 <CgProfile size={24} />
//               </button>
//               <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg hidden group-hover:block z-50">
//                 <ul className="py-2 text-gray-700">
//                   <Link to="/Setting">
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Setting</li>
//                   </Link>
//                   <Link to="/License">
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">License</li>
//                   </Link>
//                   <li
//                     onClick={logout}
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                   >
//                     Logout
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </ProtectRouting>
//         </ul>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden bg-gray-50 font-medium overflow-hidden transition-all duration-300 ease-in-out ${
//           isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="px-4 py-3 flex flex-col space-y-2">
//           <Link to="/" className="block hover:text-red-400">Home</Link>
//           <Link to="/man" className="block hover:text-red-400">Man</Link>
//           <Link to="/Woman" className="block hover:text-red-400">Woman</Link>
//           <Link to="/Bag" className="block hover:text-red-400">Bag</Link>
//           <Link to="/Shoes" className="block hover:text-red-400">Shoes</Link>
//           <Link to="/help" className="block hover:text-red-400">Help</Link>
//           <Link to="/about" className="block hover:text-red-400">About</Link>

//           {/* Search */}
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
//           />

//           {/* Cart + Logout */}
//           <div className="flex items-center justify-between mt-3">
//             <Link to="/AddToCard" className="text-2xl relative hover:text-red-400">
//               <MdAddShoppingCart />
//               {items.length > 0 && (
//                 <span className="absolute -top-2 left-4 text-sm text-white bg-red-500 rounded-full px-1.5">
//                   {items.length}
//                 </span>
//               )}
//             </Link>
//             <IoMdLogOut
//               onClick={logout}
//               className="text-2xl cursor-pointer hover:text-red-400"
//             />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
