import Button from "../../../../components/Button";
// import InputField from "../../../../components/InputField";
import { ReactComponent as MapPin } from "../.././assets/map-pin.svg";
import arrowImg from "../../assets/Arrow.png";
import homepageImg from "../../assets/homepageImg.png";
import { ReactComponent as Search } from "../../assets/search.svg";
// import styles from "./entryhomepage.module.scss";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Circle from '../../assets/circles.png'

const EntryHome = () => {
  const [filter, setFilter] = useState({
    recreationName: "",
    location: ""
  });
  const navigate = useNavigate();

  const handleFilter = (e) => {
    const {name, value} = e.target;

    setFilter({
      ...filter,
      [name]: value
    })
  };

  const explore = () => {
    navigate(`/explore?${filter.recreationName}=${filter.location}`);
  }
  
  return (
    <div className="m-auto px-16 pt-10 bg-[#FAFAFA]">

      <div className='lg:flex justify-between'>
        <div>
          <div className='text-primaryColor text-[48px] font-extrabold'>
            <h1 >Enter the </h1>
            <div className="flex">
              <span className="circle-play h-[115px] w[420px] text-center">PLAY!</span>
              <img className="relative right-[192px] w-[300px]" src={Circle} alt="" />
            </div>
          </div>
          <p className={`font-semibold text-[18px] pt-8 lg:w-[350px] w-[300px]`}>
            Beat the queue with one-click ticket reservation. Enjoy seamless
            playtime at a recreation space near you.
          </p>
          <div className={`flex gap-4 pt-8`}>
            <Button type={"button"} text={"GET TICKETS"} onClick={() => explore()} />
            <button>BECOME A PARTNER</button>
          </div>
        </div>
        <div className={`flex`}>
          <img className="w-[110px] h-[75px] relative right-9 top-[180px] hidden lg:block" src={arrowImg} alt="Fancy Arrow" />
          <img className="w-[650px] h-[300px] lg:h-[480px]" src={homepageImg} alt="A fancy city" />
        </div>
      </div>

      <div className={'lg:flex m-auto bg-white p-5 h-44 lg:h-[75px] justify-between lg:w-[986px] bottom-[-20px] relative lg:bottom-10 shadow-lg'}>
          <div className="flex items-center">
          <MapPin/>
            <select 
              name="location" 
              className="bg-transparent"
              value={filter.location}
              onChange={(e) => handleFilter(e)}
            >
              <option hidden>Location</option>
              <option>Port Harcourt</option>
            </select>
          </div>
          <div className="flex items-center lg:border-l-2 border-secondaryColor lg:pl-8">
          <Search/>
            <input
              className=" bg-transparent focus-within:outline-none p-5 w-[200px] lg:w-[500px]"
              placeholder={"Enter facility type or recreation space"}
              type={"text"}
              value={filter.recreationName}
              name={"recreationName"}
              onChange={(e) => handleFilter(e)}
            />
          </div>
          <button className="bg-primaryColor h-[36px] w-[88px] text-white" onClick={() => explore()}>SEARCH</button>
      </div>
    </div>
  );
};

export default EntryHome;
