import { BrowserRouter, Routes,Route } from "react-router-dom";
import Navbar from "../src/Pages/Navbar"
import React from 'react'
import Home from "../src/Pages/Home"
import Login from "./Pages/Login";
import Man from "../src/Pages/Man"
import Woman from "./Pages/Woman";
import AddToCard from "./Pages/AddToCard";
import Setting from "./Pages/Setting"
import License from "./Pages/License"
import Footer from "./Pages/Footer"
import Help from "./Pages/Help";
import About from "./Pages/About";
// import Sample from "./Pages/Sample";
import Manb from "./Pages/Manb";
import ProtectRouting from "./ProtectRouting/ProtectRouting";
import ManC from "./Pages/ManC";
import Womenca from "./Pages/WomenCA";
import WomenA from "./Pages/WomenA";
import GirlTshirt from "./Pages/GirlTshirt"
import GirlLower from "./Pages/GirlLower";
import GirlTouser from "./Pages/GirlTouser";
import LongDress from "./Pages/LongDress";
import FullCloth from "./Pages/FullCloth";
import ShortGirl from "./Pages/ShortGirl";
import HomeColl from "./Pages/HomeColl";
import HomeB from "./Pages/HomeB";
import HomeD from "./Pages/HomeD";
import HomeC from "./Pages/HomeC";
import HomeTshirt from "./Pages/HomeTshirt";
import HomeLower from "./Pages/HomeLower";
import HomeShirt from "./Pages/HomeShirt";
import HomeTouser from "./Pages/HomeTouser";
import HomeHalf from "./Pages/HomeHalf";
import HomeCargo from "./Pages/HomeCargo";
import Bag from "./Pages/Bag";
import BagDummy from "./Pages/BagDummy";
import ShoesDummy from "./Pages/ShoesDummy";
import Shoes from "./Pages/Shoes";
import HomeShoes from "./Pages/HomeShoes";
import HomeBag from "./Pages/HomeBag";
import FullClothDummy from "./Pages/FullClothDummy";
import LongDressDummy from "./Pages/LongDressDummy";
import GirlTshirtDummy from "./Pages/GirlTshirtDummy";
import GirlLowerDummy from "./Pages/GirlLowerDummy";
import GirlTouserDummy from "./Pages/GirlTouserDummy";
import ShortGirlDummy from "./Pages/ShortGirlDummy";
import ManA from "./Pages/ManA";
import HomeTshirtDummy from "./Pages/HomeTshirtDummy";
import PaymentPage from "./Pages/PaymentPage";
import { SearchProvider } from "./context/SearchContext";


function App(){
 
  return(
  <BrowserRouter>
  <SearchProvider>
  <Navbar/>
    <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/Login" element={<Login/>}/>
   <Route path="/man/:id" element={<ManA/>}/>
   <Route path="/manb/:id" element={<Manb />} /> 
   <Route path="/manc/:id" element={<ManC />} /> 
   <Route path="/womenca/:id" element={<Womenca  />} /> 
    <Route path="/womenA/:id" element={<WomenA  />} /> 
     <Route path="/girltshirt/:id" element={<GirlTshirt  />} /> 
     <Route path="/girltshirtdummy/:id" element={<GirlTshirtDummy  />} />
     <Route path="/girllower/:id" element={<GirlLower  />} /> 
      <Route path="/girllowerdummy/:id" element={<GirlLowerDummy  />} /> 
     <Route path="/girltouser/:id" element={<GirlTouser  />} /> 
     <Route path="/girltouserdummy/:id" element={<GirlTouserDummy  />} /> 
     <Route path="/longdress/:id" element={<LongDress  />} /> 
     <Route path="/longdressdummy/:id" element={<LongDressDummy  />} /> 
      <Route path="/fullcloth/:id" element={<FullCloth  />} /> 
        <Route path="/fullclothdummy/:id" element={<FullClothDummy  />} /> 
         {/* <Route path="/fulldress/:id" element={<FullDress  />} />  */}
          {/* <Route path="/fulldressdummy/:id" element={<FullDressDummy />} />  */}
      <Route path="/shortgirl/:id" element={<ShortGirl  />} /> 
      <Route path="/shortgirldummy/:id" element={<ShortGirlDummy  />} /> 
      <Route path="/homecoll/:id" element={<HomeColl  />} /> 
      <Route path="/homeb/:id" element={<HomeB  />} />  
      <Route path="/homed/:id" element={<HomeD  />} />
      <Route path="/homebag/:id" element={<HomeBag  />} />
      <Route path="/homec/:id" element={<HomeC  />} /> 
       <Route path="/homeshoes/:id" element={<HomeShoes  />} /> 
      <Route path="/homea/:id" element={<HomeTshirt  />} /> 
      <Route path="/hometshirtDummy/:id" element={<HomeTshirtDummy />} /> 
      <Route path="/homelower/:id" element={<HomeLower  />} />
      <Route path="/homeshirt/:id" element={<HomeShirt  />} />
      <Route path="/hometouser/:id" element={<HomeTouser  />} />  
      <Route path="/homehalf/:id" element={<HomeHalf  />} />
      <Route path="/homecargo/:id" element={<HomeCargo  />} /> 
      <Route path="/shoesdummy/:id" element={<ShoesDummy  />} />   
       <Route path="/paymentpage" element={<PaymentPage  />} />   

   <Route path="/Man" element={
<ProtectRouting>
    <Man/>
</ProtectRouting>
 
   }/>
    <Route path="/Woman" element={<Woman/>}/>
     <Route path="/bag" element={<Bag/>}/>
      <Route path="/bagdummy/:id" element={<BagDummy  />} /> 
     <Route path="/Shoes" element={<Shoes/>}/>

    <Route path="/AddToCard" element={<AddToCard/>}/>
    <Route path="/Setting" element={<Setting/>}/>
    <Route path="/License" element={<License/>}/>
     <Route path="/Help" element={<Help/>}/>
     <Route path="/About" element={<About/>}/>
    </Routes>
 
    <Footer/>
    </SearchProvider>
  </BrowserRouter>
  )
}

export default App
