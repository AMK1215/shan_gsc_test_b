import React, { useState } from "react";
import Footer from "../components/mobile/Footer";
import Carousel from "../components/mobile/Carousel";
import "../assets/css/home.css";
import { Link } from "react-router-dom";
import { FaGift, FaViber } from "react-icons/fa";
  import fb from "../assets/img/fb.png";
 import Marquee from "../components/mobile/Marquee";
  import { IoWalletOutline } from "react-icons/io5";
import GameTabsLg from "../components/desktop/GameTabsLg";
import LanguageDropdown from "../components/LanguageDropdown";
import social24 from '../assets/img/social24.svg'
import line from '../assets/img/lineW.svg'
import tele from '../assets/img/telew.svg'
import viber from '../assets/img/viberw.svg'
const HomePage = () => {
  const [isSiteBgPlay,setIsSiteBgPlay]=useState(false);
  const socials=[
    {img:social24,link:'/'},{img:line,link:'/'},{img:tele,link:'/'},{img:viber,link:'/'}
  ]
  

  const logout = async (e) => {
      e.preventDefault();
      setLoader(true);
      localStorage.removeItem('token');
      window.location.href = "/login";
      try {
          const response = await fetch(`${BASE_URL}/logout`, {
              method: "POST",
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  "Authorization": `Bearer ${localStorage.getItem('token')}`
              },
          });
          if (response.ok) {
              // console.log("Logout success!");
              setLoader(false);
              window.location.href = "/login";
          } else {
              console.error("Logout failed:", response.statusText);
          }
      } catch (error) {
          console.error("Error during logout:", error);
      }
  };

  return (
    <div >
<div className="px-lg-3">
<div className="d-flex align-items-center  gap-sm-3">
        <Marquee isSiteBgPlay={isSiteBgPlay} setIsSiteBgPlay={setIsSiteBgPlay} />
        <LanguageDropdown/>
      </div>
      <Carousel />
      <div className="beforeLoginHome my-5 pb-3">
         <Link to={'/login'}>
        <div className=" mb-3 rounded-4 bg-red button-bottom pb-2">
          <div className="text-center pt-1">
             LOGIN
          </div>
        </div>
        </Link>
        <Link to={'/register'}>
        <div className=" mb-3 rounded-4 bg-black2 button-bottom pb-2">
          <div className="text-center pt-1">
             NEW MEMBER
          </div>
        </div>
        </Link>
        <Link to={'/demo-play?type=slot&&list=JILI'}  className="my-4  w-full text-center d-flex align-items-center justify-content-center gap-2   py-2 cursor-pointer homePlayBtn    text-center rounded-4">
           <h2 className=" fw-semibold my-0 py-0 ">DEMO PLAY</h2>
        </Link>
       <Link to={'/information?tab=transfer'}>
       <button className="w-full py-2 rounded-4 sidebarSocial bg-white text-center text-black fw-bold d-flex justify-content-center flex-nowrap px-2"  >
              <IoWalletOutline size={30} className="me-2" />
              <h4 className="pb-0 mb-0">DEPOSIT/WITHDRAW</h4>
            </button>
       </Link>

        <div className="mt-4 w-full text-center d-flex align-items-center justify-content-center gap-2  py-2  cursor-pointer sidebarSocial text-center rounded-4">
          <FaViber size={28} />
          <h3 className=" fw-semibold pb-0 mb-0">: 0912345689</h3>
        </div>
        
        <Link to={'/promotion'} className="mt-4  w-full text-center d-flex align-items-center justify-content-center gap-2   py-2 cursor-pointer homePromotionBtn text-center rounded-4">
          <FaGift size={28} />
          <h2 className=" fw-semibold pb-0 mb-0 ">PROMOTION</h2>
        </Link>
        <div className="mt-4 d-flex align-items-center gap-3 justify-content-center">
                  {socials.map((item,index)=>{
                    return <Link key={index} to={item.link} >
                    <img src={item.img} className='sidebarSocialIcon' />
                  </Link>
                  })}
                </div>
      </div>
      {/* Desktop Games Tabs */}
      <GameTabsLg/>
</div>
      <Footer  />
    </div>
  );
};

export default HomePage;
