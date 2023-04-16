import Button from "@/components/Button";
import IsLoadingSkeleton from "@/components/LoadingSkeleton";
import { calcAvgRating } from "@/helpers";
import { DeleteSpace, GetVendorSpaces } from "@/redux/features/space/service";
import { dispatch } from "@/redux/store";
import { StarIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WalletBal from "../WalletBal";
import locationIcon from "./assets/locationIcon.svg";
import plusBtn from "./assets/plus.svg";
import styles from "./listings.module.scss";

const VendorListings = () => {
  const [listings, setListings] = useState([]);
  const { isLoading } = useSelector((state) => state.util);

  useEffect(() => {
    const fetchListings = async () => {
      const res = await dispatch(GetVendorSpaces());
      setListings(res?.vendorListings);
    };
    fetchListings();
  }, []);
  const handleDeleteSpace = async (id) => {
    await dispatch(DeleteSpace(id));
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  if (isLoading) return <IsLoadingSkeleton />;
  return (
    <div className={styles.userListingsPage}>
      <WalletBal />
      <div className={styles.createListing}>
        <h3>My Listings</h3>
        <Link
          to="/vendor/dashboard?checkpoint=create-listing"
          className={styles.createListing__button}
        >
          <img src={plusBtn} alt="" />
          <p>Create new listing</p>
        </Link>
      </div>
      <div className={styles.listings}>
        <div className={styles.listings__hr} />
        {listings.map((itm) => (
          <>
            <div className={styles.listings__itemContainer}>
              <div className={styles.listings__item}>
                <div className={styles.listings__item__img}>
                  <img src={itm.image?.[0]} alt="" />
                </div>
                <div className={styles.listings__item__details}>
                  <Link to={`/sencilo/${itm?._id}`}>
                    <h3>{itm?.name}</h3>
                  </Link>

                  <div className={styles.listings__item__details__location}>
                    <img src={locationIcon} alt="location pin" />
                    <p>{itm?.location}</p>
                  </div>
                  <div className="flex mt-4">
                    <div className="flex text-primaryColor items-center">
                      {itm?.reviews.length > 0 &&
                        [...Array(Math.round(calcAvgRating(itm?.reviews)))].map(
                          (_, i) => <StarIcon className="w-[20px]" key={i} />
                        )}
                      {itm?.reviews.length > 0 &&
                        [
                          ...Array(5 - Math.round(calcAvgRating(itm?.reviews))),
                        ].map((_, i) => (
                          <StarIcon
                            className="w-[20px] text-[#C4C4C4]"
                            key={i}
                          />
                        ))}
                    </div>
                    <p className="text-[16px] ml-2 font-medium">
                      {itm?.reviews.length > 0 ? (
                        <>{calcAvgRating(itm?.reviews)} Ratings</>
                      ) : (
                        "No Ratings"
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.listings__itemContainer__buttons}>
                <Button
                  to={`/vendor/dashboard?checkpoint=edit-listing&id=${itm?._id}`}
                  text="Edit"
                  classes={styles.btn}
                />
                <Button
                  type="button"
                  onClick={() => handleDeleteSpace(itm?._id)}
                  text="Remove"
                  classes={styles.btn}
                />
              </div>
            </div>
            <div className={styles.listings__hr} />
          </>
        ))}
      </div>
    </div>
  );
};

export default VendorListings;
