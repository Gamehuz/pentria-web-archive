import Footer from "@/components/Footer";
import InputField from "@/components/InputField";
import IsLoadingSkeleton from "@/components/LoadingSkeleton";
import NavbarAuth from "@/components/NavbarAuth";
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
import { Button } from "react-daisyui";
import { toast } from "react-hot-toast";
import { AiOutlineCheckCircle, AiOutlineWifi } from "react-icons/ai";
import { FaBed } from "react-icons/fa";
import { GiShower } from "react-icons/gi";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToFavorites } from "../../redux/features/space/service";
import Container from "./Container";
import styles from "./sencilo.module.scss";

const Sencilo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [startReview, setStartReview] = useState(false);
  const [existingActivities, setExistingActivities] = useState([]);

  const { space } = useSelector((state) => state.space);
  const { isLoading } = useSelector((state) => state.util);
  const stripedLcn = space?.location?.replace(/\s/g, "");
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(GetSpace(id));
  }, [id]);
  const addToFav = () => {
    dispatch(addToFavorites(id));
  };

  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem("activities"));
    if (existing) {
      setExistingActivities(existing);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(existingActivities));
  }, [existingActivities]);

  // const addActivity = (activity) => {
  //   const existingActivity = existingActivities.find(
  //     (act) => act.id === activity.id
  //   );
  //   if (existingActivity) {
  //     setActivityExist(true);
  //     return toast.error("Activity already added to your list");
  //   }
  //   const updatedActivities = [...existingActivities, activity];
  //   localStorage.setItem("activities", JSON.stringify(updatedActivities));
  // };

  const addActivity = (activity) => {
    const newActivities = [...existingActivities, activity];
    setExistingActivities(newActivities);
    toast.success("Activity added to your list");
  };

  // const removeActivity = (activity) => {
  //   const updatedActivities = existingActivities.filter(
  //     (act) => act.id !== activity.id
  //   );
  //   localStorage.setItem("activities", JSON.stringify(updatedActivities));
  // };

  const removeActivity = (activity) => {
    const newActivities = existingActivities.filter(
      (act) => act._id !== activity._id
    );
    setExistingActivities(newActivities);
    toast.success("Activity removed from your list");
  };

  const goTobooking = () => {
    if (!existingActivities.length)
      return toast.error("Please add an activity to your list");
    navigate("/booking");
  };

  if (isLoading) return <IsLoadingSkeleton />;
  return (
    <>
      <div className="bg-[#FAFAFA] font-poppins text-[#7E7E7E] mb-6">
        {/* The nav */}
        {/* <Container>
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
        </Container> */}
        <NavbarAuth />

        {/* the sencilo pictures */}
        <Container>
          <div className="mt-4">
            <div className="flex items-center space-x-2 font-semibold cursor-pointer">
              <ChevronLeftIcon className="w-6 h-6" />
              <span className="">Back</span>
            </div>

            <div className="mt-10 flex justify-between">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-black">
                  {space?.name !== null && space?.name !== "null"
                    ? space?.name
                    : "Gamehauz Cafe"}
                </h3>
                <div className="flex space-x-2 text-gray-500">
                  <MapPinIcon className="w-6 h-6 text-secondaryColor" />
                  <p className="">{space?.location}</p>
                </div>
              </div>
              <Button
                onClick={addToFav}
                startIcon={<HeartIcon className="w-6 h-6" />}
                className="border-secondaryColor border text-secondaryColor  bg-inherit hover:bg-secondaryColor/30"
              >
                <p className="hidden md:block">Favourite</p>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
              {space?.image?.map((pic, index) => (
                <div key={index} className="aspect-w-1 aspect-h-1 w-full">
                  <img src={pic} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <div className={`flex flex-col md:flex-row gap-4 mt-6 mb-12`}>
              <div className={` ${styles.sencilo_equip} text-[#7E7E7E]`}>
                <div className="mr-4 mb-4 w-fit text-center">
                  <p className="text-[16px]">Facility Type</p>
                  <div className="flex items-center space-x-2">
                    <HomeIcon className="w-6 h-6" />
                    <p className="">{space?.facilityType}</p>
                  </div>
                </div>
                <div className="w-fit mr-4 text-center">
                  <p>Beds</p>
                  <div className="flex items-center space-x-2">
                    <FaBed className="w-6 h-6" />
                    <p className="">{space?.beds}</p>
                  </div>
                </div>
                <div className="w-fit mr-4 text-center">
                  <p>Restroom</p>
                  <div className="flex items-center space-x-2">
                    <GiShower className="w-6 h-6" />
                    <p className="">{space?.restroom}</p>
                  </div>
                </div>
                <div className="w-fit mr-4 text-center">
                  <p>Wifi</p>
                  <div className="flex items-center space-x-2">
                    <AiOutlineWifi className="w-6 h-6" />
                    <p className="">{`${space?.wifi}`}</p>
                  </div>
                </div>
                <div className="w-fit text-center">
                  <p>Packing</p>
                  <div className="flex items-center space-x-2">
                    <AiOutlineCheckCircle className="w-6 h-6" />
                    <p className="">{`${space?.parking}`}</p>
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
                <p className="mt-4 text-[16px]">{space?.description}</p>

                <p className="text-xl font-medium">Guidelines/Policy</p>
                <ul className="mt-4 space-y-5 text-[16px]">
                  <li className="">{space?.policies}</li>
                </ul>
              </div>
              <div className="col-span-3">
                <p className="text-xl font-medium text-black">MENU</p>
                <div className="mt-4 bg-white rounded-xl py-6 px-[0px] space-y-8 md:px-[1.5rem]">
                  {space?.activities?.length > 0 ? (
                    <>
                      {space?.activities?.map((act, index) => (
                        <div
                          className="grid grid-cols-2 gap-6 shadow-xl"
                          key={index}
                        >
                          <div className="col-span-1 w-[150px] h-[200px]">
                            <img
                              src={act?.image}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="w-full space-y-3 pb-2">
                            <h2 className="text-2xl font-black text-secondaryColor">
                              {act?.currency} {act?.price}
                              <p className="text-base inline text-grayColor">
                                /{act?.duration}
                              </p>
                            </h2>
                            <p className="text-lg font-bold">{act?.name} </p>
                            {existingActivities.find(
                              (a) => a._id === act._id
                            ) ? (
                              <Button
                                onClick={() => removeActivity(act)}
                                className="px-8 bg-[#BF4D01] hover:bg-primaryColor/90 text-white font-bold rounded-none"
                              >
                                Remove
                              </Button>
                            ) : (
                              <Button
                                onClick={() => addActivity(act)}
                                className="px-8 bg-primaryColor hover:bg-primaryColor/90 text-white font-bold rounded-none"
                              >
                                Add
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                      <Button
                        onClick={goTobooking}
                        className="w-full bg-primaryColor text-white font-semibold !mt-12 hover:bg-primaryColor/80"
                      >
                        Proceed
                      </Button>
                    </>
                  ) : (
                    <p className="text-xl font-medium">
                      No Menu for this space
                    </p>
                  )}
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
                      src={`https://maps.google.com/maps?q=${stripedLcn}&t=k&z=10&ie=UTF8&iwloc=&output=embed`}
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                    ></iframe>
                  </div>
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
                  {space?.reviews?.map((review, index) => (
                    <div className="flex flex-col" key={index}>
                      <p className="text-[#3E2180] mt-4">{review?.comment}</p>
                      <div className="flex mt-4">
                        <div className="flex text-primaryColor items-center">
                          {review?.rating &&
                            [...Array(review?.rating)].map((_, i) => (
                              <StarIcon className="w-[20px]" key={i} />
                            ))}
                          {review?.rating &&
                            [...Array(5 - review.rating)].map((_, i) => (
                              <StarIcon
                                className="w-[20px] text-[#C4C4C4]"
                                key={i}
                              />
                            ))}
                        </div>
                        <p className="text-[16px] ml-2 font-medium">
                          {review?.rating} Ratings
                        </p>
                      </div>

                      <h1 className="text-[16px] mt-4  text-[#BF4D01] font-medium">
                        {review?.user?.name}
                      </h1>
                    </div>
                  ))}
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
