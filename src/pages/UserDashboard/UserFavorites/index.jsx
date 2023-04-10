import IsLoadingSkeleton from "@/components/LoadingSkeleton";
import { StarIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../../components/Button";
import ButtonSpinner from "../../../components/ButtonSpiner";
import {
  GetFavoriteSpaces,
  RemoveFromFavorites,
} from "../../../redux/features/space/service";
import { dispatch } from "../../../redux/store";
import locationIcon from "./assets/locationIcon.svg";
import styles from "./favorites.module.scss";

const UserFavorites = () => {
  const { isLoading } = useSelector((state) => state.util);
  const [favSpaces, setFavSpaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchFavSpaces = async () => {
    setLoading(true);
    const res = await dispatch(GetFavoriteSpaces());
    console.log(res);
    if (res?.favouriteSpace) {
      setFavSpaces(res.favouriteSpace);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavSpaces();
  }, []);

  console.log(favSpaces);
  const handleDelete = async (id) => {
    const res = await dispatch(RemoveFromFavorites(id));
    if (res?.removeFromFavourite) {
      setFavSpaces((prevFavSpaces) =>
        prevFavSpaces.filter((space) => space._id !== id)
      );
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  if (loading) return <IsLoadingSkeleton />;
  return (
    <div className={styles.userfavoritesPage}>
      <div className={styles.favoritesHeader}>
        <div className={styles.favoritesHeader__balance}>
          <h1>COMING SOON </h1>
          <p>Legacy parts</p>
        </div>
        <div className={styles.favoritesHeader__withdraw}>
          <Button
            type="button"
            classes={styles.favoritesHeader__withdraw__redeem}
            text="REDEEM"
          />
        </div>
      </div>
      <div className={styles.createfavorites}>
        <h1>My Favorites</h1>
      </div>
      <div className={styles.favorites}>
        <div className={styles.favorites__hr} />
        {isLoading && <ButtonSpinner />}
        {favSpaces?.length > 0 ? (
          <>
            {favSpaces?.map((favSpace, index) => (
              <div className={styles.favorites__itemContainer} key={index}>
                <div className={styles.favorites__item}>
                  <div className={styles.favorites__item__img}>
                    {favSpace?.image?.length > 1 ? (
                      <>
                        {favSpace?.image?.map((img) => (
                          <img src={img} alt="" key={img} className="m-2" />
                        ))}
                      </>
                    ) : (
                      <img src={favSpace?.image} alt="" />
                    )}
                  </div>
                  <div className={styles.favorites__item__details}>
                    <h3>{favSpace?.name}</h3>
                    <div className={styles.favorites__item__details__location}>
                      <img src={locationIcon} alt="location pin" />
                      <p>{favSpace?.location}</p>
                    </div>
                    <div className={styles.favorites__item__details__rating}>
                      <div className="flex mt-4">
                        <div className="flex text-primaryColor items-center">
                          {favSpace?.review?.rating &&
                            [...Array(favSpace?.review?.rating)].map((_, i) => (
                              <StarIcon className="w-[20px]" key={i} />
                            ))}
                          {favSpace?.review?.rating &&
                            [...Array(5 - favSpace?.review.rating)].map(
                              (_, i) => (
                                <StarIcon
                                  className="w-[20px] text-[#C4C4C4]"
                                  key={i}
                                />
                              )
                            )}
                        </div>
                        <p className="text-[16px] ml-2 font-medium">
                          {favSpace?.review?.rating} Ratings
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.favorites__itemContainer__buttons}>
                    <Button
                      to={`/sencilo/${favSpace?._id}`}
                      text="Visit"
                      classes={styles.favorites__itemContainer__buttons__visit}
                    />
                    <Button
                      type="button"
                      onClick={() => handleDelete(favSpace?._id)}
                      text="Remove"
                      classes={styles.favorites__itemContainer__buttons__remove}
                    />
                  </div>
                </div>
                <div className={styles.favorites__hr} />
              </div>
            ))}
          </>
        ) : (
          <p className="text-center font-2xl font-bold">No favorites</p>
        )}
      </div>
    </div>
  );
};

export default UserFavorites;
