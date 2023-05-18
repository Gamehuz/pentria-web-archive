/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// import mobileMenu from "./assets/menu-hamburger.svg";
import { useLocation } from "react-router-dom";
import AuthComp from "../auth/AuthComp";


const HomeNavbar = () => {

  const {pathname} = useLocation();

  // useEffect(() => {
  //   if (pathname.includes('explore') || pathname.includes('dashboard') || pathname.includes('login') || pathname.includes('/signup') || pathname.includes('prompt')) {
  //     setShow(true)
  //   }
  // },[]);
  
  return (
    <div
      className='hidden bg-white lg:flex justify-between items-center px-4 py-4 lg:px-10 lg:py-6 text-primaryColor'
    >
      <h1 className={`text-[38px] font-bold`}>
        <Link to="/">Pentria</Link>
      </h1>
      <div className={``}>
              <ul className={`lg:flex space-x-10 text-[19px]`}>
                <li className={` ${pathname === "/about-us" ? 'light' : ""}`}>
                  <Link to="/about-us">About</Link>
                </li>
                <li className={` ${pathname === "/explore" ? 'light' : ""}`}>
                  <Link to="/explore">Explore</Link>
                </li>
                <li className={` ${pathname === "/vendor" ? 'light' : ""}`}>
                  <Link to="/vendor">Vendors</Link>
                </li>
                <li className={` ${pathname === "/enquiries" ? 'light' : ""}`}>
                  <Link to="/enquiries">Enquiries</Link>
                </li>
              </ul>

        
      </div>  
      <AuthComp />                          
    </div>
  );
};

export default HomeNavbar;
