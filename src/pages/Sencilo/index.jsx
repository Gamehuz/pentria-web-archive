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
import { AddReview, addToFavorites } from "../../redux/features/space/service";
import Container from "./Container";
import styles from "./sencilo.module.scss";
const calcAvgRating = (reviews) => {
  if (!reviews.length) return 0;
  const total = reviews.reduce((acc, curr) => acc + curr.rating, 0);
  return total / reviews.length;
};
const Sencilo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [startReview, setStartReview] = useState(false);
  const [existingActivities, setExistingActivities] = useState([]);
  const [reviewComment, setReviewComment] = useState("");
  const [reviewRating, setReviewRating] = useState(0);

  const { space } = useSelector((state) => state.space);
  const { user } = useSelector((state) => state.user);
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

  const addActivity = (activity) => {
    const newActivities = [
      ...existingActivities,
      {
        spaceId: id,
        facilityType: space?.facilityType,
        location: space?.location,
        ...activity,
      },
    ];
    setExistingActivities(newActivities);
    toast.success("Activity added to your list");
  };

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
  const handleSelectRating = (e) => {
    setReviewRating(e.target.value);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!user.firstName) return toast.error("Please login to submit a review");
    if (reviewComment === "") {
      toast.error("Please write a review");
      return;
    }
    if (reviewRating === 0) {
      toast.error("Please select a rating");
      return;
    }
    const res = await dispatch(
      AddReview(id, reviewComment, Number(reviewRating))
    );
    if (res.data) {
      window.location.reload();
      setReviewComment("");
      setReviewRating(0);
      setStartReview(false);
    }
  };

  if (isLoading) return <IsLoadingSkeleton />;
  return (
    <>
      <div className="bg-[#FAFAFA] mt-[6rem] font-poppins text-[#7E7E7E] mb-6">
        {/* The nav */}

        <NavbarAuth />

        {/* the sencilo pictures */}
        <Container>
          <div className="mt-4">
            <div
              className="flex items-center space-x-2 font-semibold cursor-pointer"
              onClick={() => {
                navigate(-1);
              }}
            >
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
                  <div className="flex mt-4">
                    <div className="flex text-primaryColor items-center">
                      {space?.reviews.length > 0 &&
                        [
                          ...Array(Math.round(calcAvgRating(space?.reviews))),
                        ].map((_, i) => (
                          <StarIcon className="w-[20px]" key={i} />
                        ))}
                      {space?.reviews.length > 0 &&
                        [
                          ...Array(
                            5 - Math.round(calcAvgRating(space?.reviews))
                          ),
                        ].map((_, i) => (
                          <StarIcon
                            className="w-[20px] text-[#C4C4C4]"
                            key={i}
                          />
                        ))}
                    </div>
                    <p className="text-[16px] ml-2 font-medium">
                      {space?.reviews.length > 0 ? (
                        <>{calcAvgRating(space?.reviews)} Ratings</>
                      ) : (
                        "No Ratings"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* THE DESCRIPTION AND MENU */}
            <div className={styles["sencilo__desc_menu-container"]}>
              <div className="col-span-7 md:w-[800px] w-full">
                <div className="text-justify">
                  <p className="text-xl text-black font-medium">Description</p>
                  <p className="mt-4 text-[16px]">{space?.description}</p>
                </div>
                <div className="mt-4">
                  <p className="text-xl text-black font-medium">
                    Guidelines/Policy
                  </p>
                  <p className="mt-2 space-y-5 text-justify text-[16px]">
                    {space?.policies}
                  </p>
                </div>
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
                  <form className="pr-2" onSubmit={handleSubmitReview}>
                    <div className="flex h-fit">
                      <InputField
                        type="text"
                        name="review"
                        placeholder="Your review"
                        onChange={(e) => setReviewComment(e.target.value)}
                      />
                      <select
                        className="py-[5px] px-[10px] ml-2 border border-gray-300 rounded-md"
                        onChange={(e) => handleSelectRating(e)}
                      >
                        <option value="1.0">1.0</option>
                        <option value="2.0">2.0</option>
                        <option value="3.0">3.0</option>
                        <option value="4.0">4.0</option>
                        <option value="5.0">5.0</option>
                      </select>
                    </div>
                    <Button
                      type="submit"
                      className="ml-2 w-full bg-primaryColor text-white font-semibold mt-2 hover:bg-primaryColor/80"
                    >
                      Submit
                    </Button>
                  </form>
                )}
                <div className="flex flex-col flex-wrap">
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
