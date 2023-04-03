import pics from "@/../public/pic.jpg";
import Footer from "@/components/Footer";
import InputField from "@/components/InputField";
import IsLoadingSkeleton from "@/components/LoadingSkeleton";
import { GetSpace } from "@/redux/features/space/service";
import { dispatch } from "@/redux/store";
import {
  ChevronLeftIcon,
  HeartIcon,
  HomeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Button, Input } from "react-daisyui";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Container from "./Container";
import styles from "./sencilo.module.scss";

const Sencilo = () => {
  const { id } = useParams();
  const [startReview, setStartReview] = useState(false);
  const { space } = useSelector((state) => state.space);
  const { isLoading } = useSelector((state) => state.util);

  console.log(space);
  useEffect(() => {
    dispatch(GetSpace(id));
  }, [id]);
  if (isLoading) return <IsLoadingSkeleton />;
  return (
    <>
      <div className="bg-[#FAFAFA] font-poppins text-[#7E7E7E] mb-6">
        {/* The nav */}
        <Container>
          <div className={styles.nav}>
            <Link to={"/"} className={"text-4xl text-primaryColor font-black"}>
              Pentria
            </Link>
            <Input
              id="email1"
              type="search"
              placeholder="name@flowbite.com"
              className="max-w-xl rounded-full hidden lg:block"
            />
            <div className={styles.homeNavbar_btn}>
              <div className={"px-6 text-xl font-bold"}>
                <Link to="/login">LOGIN</Link>
              </div>
              <div className={styles.homeNavbar_signup}>
                <Link to="/prompt">SIGNUP</Link>
              </div>
            </div>
          </div>
        </Container>

        {/* the sencilo pictures */}
        <Container>
          <div className="">
            <div className="flex items-center space-x-2 font-semibold cursor-pointer">
              <ChevronLeftIcon className="w-6 h-6" />
              <span className="">Back</span>
            </div>

            <div className="mt-10 flex justify-between">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-black">Gamehauz Cafe</h3>
                <div className="flex space-x-2 text-gray-500">
                  <MapPinIcon className="w-6 h-6 text-secondaryColor" />
                  <p className="">93 Ken Saro-Wiwa Rd, GRA Port Harcourt, RI</p>
                </div>
              </div>
              <Button
                startIcon={<HeartIcon className="w-6 h-6" />}
                className="border-secondaryColor border text-secondaryColor  bg-inherit hover:bg-secondaryColor/30"
              >
                <p className="hidden md:block">Favourite</p>
              </Button>
            </div>

            <div className="flex mt-12 flex-col md:flex-row gap-4 overflow-hidden">
              <div
                className={`col-span-7 w-[70%] h-[510px] object-cover ${styles.widthFull}`}
              >
                <img src={pics} className="w-full h-full object-center" />
              </div>
              <div className={`"col-span-3 h-full w-[30%] ${styles.widthFull}`}>
                <div className="gap-2 h-full w-full flex md:flex-col w-full justify-between ">
                  <div
                    className={`h-[250px] object-contain ${styles.widthFull}`}
                  >
                    <img src={pics} className="h-full w-full" />
                  </div>
                  <div
                    className={`h-[250px] object-contain ${styles.widthFull}`}
                  >
                    <img src={pics} className="h-full w-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className={`flex flex-col md:flex-row gap-4 mt-6 mb-12`}>
              <div className={` ${styles.sencilo_equip} text-[#7E7E7E]`}>
                <div className="mr-4 mb-4 w-fit text-center">
                  <p className="text-[16px]">Facility Type</p>
                  <div className="flex items-center space-x-2">
                    <HomeIcon className="w-6 h-6" />
                    <p className="">Gaming Center</p>
                  </div>
                </div>
                <div className="w-fit mr-4 text-center">
                  <p>Facility Type</p>
                  <div className="flex items-center space-x-2">
                    <HomeIcon className="w-6 h-6" />
                    <p className="">Gaming Center</p>
                  </div>
                </div>
                <div className="w-fit mr-4 text-center">
                  <p>Facility Type</p>
                  <div className="flex items-center space-x-2">
                    <HomeIcon className="w-6 h-6" />
                    <p className="">Gaming Center</p>
                  </div>
                </div>
                <div className="w-fit mr-4 text-center">
                  <p>Facility Type</p>
                  <div className="flex items-center space-x-2">
                    <HomeIcon className="w-6 h-6" />
                    <p className="">Gaming Center</p>
                  </div>
                </div>
                <div className="w-fit text-center">
                  <p>Facility Type</p>
                  <div className="flex items-center space-x-2">
                    <HomeIcon className="w-6 h-6" />
                    <p className="">Gaming Center</p>
                  </div>
                </div>
              </div>
              <div className="col-span-3 flex space-x-3 items-center justify-center">
                <div className="flex text-primaryColor items-center">
                  <StarIcon className="w-[20px]" />
                  <StarIcon className="w-[20px]" />
                  <StarIcon className="w-[20px]" />
                  <StarIcon className="w-[20px]" />
                  <StarIcon className="w-[20px] text-[#C4C4C4]" />
                </div>
                <p className="text-[16px] font-medium">4.0 Ratings </p>
              </div>
            </div>

            {/* THE DESCRIPTION AND MENU */}
            <div className={styles["sencilo__desc_menu-container"]}>
              <div className="col-span-7">
                <p className="text-xl font-medium text-black">Description</p>
                <p className="mt-4 text-[16px]">
                  Located at one of the hottest spots in the Garden City, the
                  Gamehauz Cafe is everything you can dream of when it comes to
                  indoor gaming and recreation. <br></br>
                  <br />
                  With direct access to the center of the city, Gamehauz Cafe is
                  home to fun lovers of all ages and sizes, looking for a
                  beautiful escape into the land of Fantasia. <br></br>
                  <br />
                  Ranging from video games to board games such as chess,
                  monopoly, and sccrabble, our cafe provides a perfect hangout
                  spot with friends and loved ones. Take a virtual escape into
                  LALA Land with our VR gaming apparatus. This space was created
                  to enable retreats, romantic getaways, family gatherings, work
                  breaks and other individual and group activities n mind.{" "}
                  <br></br>
                  <br />
                  With its minimalist all-white design, lush lawns, tall palms
                  and a private lounge overlooking the beautiful crystal-clear
                  pool, Gaamehauz Cafe is undoubtedly one of the foremost luxury
                  gaming and recreation centers in Rivers State, Nigeria.{" "}
                  <br></br>
                  <br />
                </p>

                <p className="text-xl font-medium">Guidelines/Policy</p>
                <ul className="mt-4 space-y-5 text-[16px]">
                  <li className="">No pets allowed</li>
                  <li className="">
                    Please confirm your payment with the cashier upon arrival
                  </li>
                  <li className="">
                    No wrong parking. Kindly follow the instructions of the
                    parking lot attendant
                  </li>
                  <li className="">
                    No dumping of refuse indiscriminately. Please use the
                    nearest trash can, thanks.
                  </li>
                  <li className="">
                    If you must buy food and drinks from outside, please
                    endeavor to ensure its quality before consumption.
                  </li>
                  <li className="">
                    After playing a game or using a facility, kindly leave as it
                    were.
                  </li>
                  <li className="">
                    We also have a workspace. If you need to use our conference
                    room, kindly select from the Pentria menu and book online.
                  </li>
                  <li className="">No noisy /farting lol</li>
                  <li className="">What else, just behave yourself abeg.</li>
                  <li className="">
                    Thanks for your patronage. See you next time.
                  </li>
                </ul>
              </div>
              <div className="col-span-3  ">
                <p className="text-xl font-medium text-black">MENU</p>
                <div className="mt-4 bg-white rounded-xl py-6 px-[0px] space-y-8 md:px-[1.5rem]">
                  <div className="grid grid-cols-2 gap-6 shadow-xl">
                    <img src={pics} className="h-full object-cover" />
                    <div className="w-full space-y-3 pb-2">
                      <h2 className="text-2xl font-black text-secondaryColor">
                        ₦480
                        <p className="text-base inline text-grayColor">/hr</p>
                      </h2>
                      <p className="text-lg font-bold">CHESS </p>
                      <Button className="px-8 bg-primaryColor hover:bg-primaryColor/90 text-white font-bold rounded-none">
                        Add
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 shadow-xl">
                    <img src={pics} className="h-full object-cover" />
                    <div className="w-full space-y-3 pb-2">
                      <h2 className="text-2xl font-black text-secondaryColor">
                        ₦480
                        <p className="text-base inline text-grayColor">/hr</p>
                      </h2>
                      <p className="text-lg font-bold">CHESS </p>
                      <Button className="px-8 bg-primaryColor hover:bg-primaryColor/90 text-white font-bold rounded-none">
                        Add
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 shadow-xl">
                    <img src={pics} className="h-full object-cover" />
                    <div className="w-full space-y-3 pb-2">
                      <h2 className="text-2xl font-black text-secondaryColor">
                        ₦480
                        <p className="text-base inline text-grayColor">/hr</p>
                      </h2>
                      <p className="text-lg font-bold">CHESS </p>
                      <Button className="px-8 bg-primaryColor hover:bg-primaryColor/90 text-white font-bold rounded-none">
                        Add
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 shadow-xl">
                    <img src={pics} className="h-full object-cover" />
                    <div className="w-full space-y-3 pb-2">
                      <h2 className="text-2xl font-black text-secondaryColor">
                        ₦480
                        <p className="text-base inline text-grayColor">/hr</p>
                      </h2>
                      <p className="text-lg font-bold">CHESS </p>
                      <Button className="px-8 bg-primaryColor hover:bg-primaryColor/90 text-white font-bold rounded-none">
                        Add
                      </Button>
                    </div>
                  </div>

                  <Button className="w-full bg-primaryColor text-white font-semibold !mt-12 hover:bg-primaryColor/80">
                    Proceed
                  </Button>
                </div>
              </div>
            </div>

            {/* THE GOOGLE MAP AND THE REVIEWS SECTION */}
            <div
              className={`${styles["sencilo__desc_menu-container"]} h-[600px]`}
            >
              <div className="col-span-7 h-full md:w-[70%] w-full">
                <div className="mapouter relative text-right h-full w-full">
                  <div className="gmap_canvas overflow-hidden bg-[none] h-full w-full">
                    <iframe
                      width="100%"
                      height="100%"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=porthacourt&t=k&z=10&ie=UTF8&iwloc=&output=embed"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                    ></iframe>
                    {/* <a href="https://2yu.co">2yu</a>
                    <br>
                      <style>.mapouter{position:relative;text-align:right;height:100%;width:100%;}</style>
                      <a href="https://embedgooglemap.2yu.co/">html embed google map</a>
                      <style>.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style> */}
                  </div>
                  import {dispatch} from "@/redux/store"; import {useSelector}{" "}
                  from "react-redux";
                </div>
              </div>
              <div className="col-span-3 w-full md:w-[30%]  overflow-y-scroll h-[300px] md:h-[600px]">
                <div className="flex justify-between">
                  <div className="flex justify-between">
                    <p className="text-xl font-medium">REVIEWS</p>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => setStartReview(!startReview)}
                  >
                    <p className="text-[14px] underline">LEAVE A REVIEW</p>
                  </div>
                </div>
                {startReview && (
                  <form className="flex">
                    <InputField />
                    <Button
                      type="submit"
                      className="ml-2 bg-primaryColor text-white font-semibold mt-2 hover:bg-primaryColor/80"
                    >
                      Submit
                    </Button>
                  </form>
                )}
                <div className="flex flex-wrap">
                  <div className="flex flex-col">
                    <p className="text-[#3E2180] mt-4">
                      Amazing place, my first experience was great!
                    </p>
                    <div className="flex mt-4">
                      <div className="flex text-primaryColor items-center">
                        <StarIcon className="w-[20px]" />
                        <StarIcon className="w-[20px]" />
                        <StarIcon className="w-[20px]" />
                        <StarIcon className="w-[20px]" />
                        <StarIcon className="w-[20px] text-[#C4C4C4]" />
                      </div>
                      <p className="text-[16px] ml-2 font-medium">
                        4.0 Ratings{" "}
                      </p>
                    </div>
                    <h1 className="text-[16px] mt-4  text-[#BF4D01] font-medium">
                      John Doe
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Sencilo;
