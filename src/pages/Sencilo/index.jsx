import {
  ChevronLeftIcon,
  HeartIcon,
  HomeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Button, Input } from "react-daisyui";
import { Link } from "react-router-dom";
import pics from "../../../public/pic.jpg";
import Container from "../../components/Container/Container";
import styles from "./sencilo.module.scss";

const Sencilo = () => {
  return (
    <div className="bg-[#FAFAFA]">
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
              <Link to="/prompt">SIGN UP</Link>
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
              <h3 className="text-2xl font-bold">Gamehauz Cafe</h3>
              <div className="flex space-x-2 text-gray-500">
                <MapPinIcon className="w-6 h-6 text-secondaryColor" />
                <p className="">93 Ken Saro-Wiwa Rd, GRA Port Harcourt, RI</p>
              </div>
            </div>
            <Button
              startIcon={<HeartIcon className="w-6 h-6" />}
              className="border-secondaryColor border text-secondaryColor bg-inherit hover:bg-secondaryColor/30"
            >
              Favourite
            </Button>
          </div>

          <div className="grid grid-cols-10 mt-12 gap-4 h-[30rem] overflow-hidden">
            <div className="col-span-7 h-full ">
              <img
                src={pics}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="col-span-3 h-full">
              <div className="grid gap-4 h-full">
                <img src={pics} className="w-full h-full" />
                <img src={pics} className="w-full h-full" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-10 gap-4 mt-6">
            <div className="col-span-7 flex justify-between pr-12 text-[#7E7E7E]">
              <div className="inline-block text-center">
                <p>Facility Type</p>
                <div className="flex items-center space-x-2">
                  <HomeIcon className="w-6 h-6" />
                  <p className="">Gaming Center</p>
                </div>
              </div>
              <div className="inline-block text-center">
                <p>Facility Type</p>
                <div className="flex items-center space-x-2">
                  <HomeIcon className="w-6 h-6" />
                  <p className="">Gaming Center</p>
                </div>
              </div>
              <div className="inline-block text-center">
                <p>Facility Type</p>
                <div className="flex items-center space-x-2">
                  <HomeIcon className="w-6 h-6" />
                  <p className="">Gaming Center</p>
                </div>
              </div>
              <div className="inline-block text-center">
                <p>Facility Type</p>
                <div className="flex items-center space-x-2">
                  <HomeIcon className="w-6 h-6" />
                  <p className="">Gaming Center</p>
                </div>
              </div>
              <div className="inline-block text-center">
                <p>Facility Type</p>
                <div className="flex items-center space-x-2">
                  <HomeIcon className="w-6 h-6" />
                  <p className="">Gaming Center</p>
                </div>
              </div>
            </div>
            <div className="col-span-3 flex space-x-3 items-center">
              <div className="flex text-primaryColor items-center">
                <StarIcon className="w-8 h-8" />
                <StarIcon className="w-8 h-8" />
                <StarIcon className="w-8 h-8" />
                <StarIcon className="w-8 h-8" />
                <StarIcon className="w-8 h-8" />
              </div>
              <p className="text-2xl font-medium">4.0 Ratings </p>
            </div>
          </div>

          {/* THE DESCRIPTION AND MENU */}
          <div className="grid grid-cols-10 gap-12 mt-16">
            <div className="col-span-7">
              <p className="text-xl font-medium">Description</p>
              <p className="mt-4">
                Located at one of the hottest spots in the Garden City, the
                Gamehauz Cafe is everything you can dream of when it comes to
                indoor gaming and recreation. <br></br>
                <br />
                With direct access to the center of the city, Gamehauz Cafe is
                home to fun lovers of all ages and sizes, looking for a
                beautiful escape into the land of Fantasia. <br></br>
                <br />
                Ranging from video games to board games such as chess, monopoly,
                and sccrabble, our cafe provides a perfect hangout spot with
                friends and loved ones. Take a virtual escape into LALA Land
                with our VR gaming apparatus. This space was created to enable
                retreats, romantic getaways, family gatherings, work breaks and
                other individual and group activities n mind. <br></br>
                <br />
                With its minimalist all-white design, lush lawns, tall palms and
                a private lounge overlooking the beautiful crystal-clear pool,
                Gaamehauz Cafe is undoubtedly one of the foremost luxury gaming
                and recreation centers in Rivers State, Nigeria. <br></br>
                <br />
              </p>

              <p className="text-xl font-medium">Guidelines/Policy</p>
              <ul className="mt-4 space-y-5">
                <li className="">No pets allowed</li>
                <li className="">
                  Please confirm your payment with the cashier upon arrival
                </li>
                <li className="">
                  No wrong parking. Kindly follow the instructions of the
                  parking lot attendant
                </li>
                <li className="">
                  No dumping of refuse indiscriminately. Please use the nearest
                  trash can, thanks.
                </li>
                <li className="">
                  If you must buy food and drinks from outside, please endeavor
                  to ensure its quality before consumption.
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
              <p className="text-xl font-medium">MENU</p>
              <div className="mt-4 bg-white rounded-xl py-6 px-6 space-y-8">
                <div className="grid grid-cols-2 gap-6 shadow-xl">
                  <img src={pics} className="h-full object-cover" />
                  <div className="w-full space-y-3 pb-2">
                    <h2 className="text-2xl font-black text-secondaryColor">
                      ₦480<p className="text-base inline text-grayColor">/hr</p>
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
                      ₦480<p className="text-base inline text-grayColor">/hr</p>
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
                      ₦480<p className="text-base inline text-grayColor">/hr</p>
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
                      ₦480<p className="text-base inline text-grayColor">/hr</p>
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
        </div>
      </Container>
    </div>
  );
};

export default Sencilo;
