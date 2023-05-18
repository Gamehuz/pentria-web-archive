

import { ReactComponent as MapPin } from "../.././assets/map-pin.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
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
    <div className="m-auto px-16 pt-10 bg-[#FAFAFA] lg:h-[120vh]">

      <div className='lg:flex justify-between'>
        <div>
          <div className='text-primaryColor text-[48px] font-extrabold'>
            <h1 >Enter the </h1>
            <div className="md:flex">
              <span className="circle-play h-[115px] w-[300px] text-center"> {'PLAY >>'} </span>
              <img className="hidden lg:block lg:relative top-[190px] lg:top-0 left-[30px] lg:left-[-340px] w-[300px]" src={Circle} alt="" />
            </div>
          </div>
          <p className={`font-semibold text-[18px] pt-8`}>
          Beat the queue with one-click playtime reservation.
          </p>
          <div className={`md:flex text-center lg:space-x-6 py-8`}>
            <button className="btn mb-2 lg:mb-0 w-48 ">Get Tickets</button>
            <button className="btn-outline w-48 ">Become a Vendor</button>
          </div>
        </div>
        <div className={`flex`}>
          <img className="w-[140px] h-[75px] relative right-24  hidden lg:block" src="/Frame.png" alt="Fancy Arrow" />
          <div>
            <img className="" src="/hero.png" alt="A fancy city" />
            <img className="hidden lg:block absolute top-80 right-80" src="/hero1.png" alt="" />
          </div>
        </div>
      </div>

      <div className={'lg:flex mx-auto lg:mt-60 bg-white p-5 h-44 lg:h-[75px] justify-between lg:w-[986px] bottom-[-20px] relative lg:bottom-10 shadow-lg'}>
          <div className="flex items-center">
          <MapPin/>
            <select 
              name="location" 
              className="bg-transparent pl-4"
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
              className=" bg-transparent focus-within:outline-none p-5 max-w-[180px] lg:w-[500px]"
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
