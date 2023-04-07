import IsLoadingSkeleton from "@/components/LoadingSkeleton";
import { useLazyQuery } from "@apollo/client";
import { StarIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import Button from "../../../components/Button";
import { GET_FAVORITE_SPACES } from "../../../graphql/queries/favoriteSpace";
import locationIcon from "./assets/locationIcon.svg";
import styles from "./favorites.module.scss";

const UserFavorites = () => {
  const [favoriteSpace, { data, error, loading }] =
    useLazyQuery(GET_FAVORITE_SPACES);

  useEffect(() => {
    favoriteSpace();
  }, [favoriteSpace]);

  console.log(data?.user?.favoriteSpace);

  if (error) return toast.error(error.message);
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
        {data?.user?.favoriteSpace?.length > 0 ? (
          <>
            {data?.user?.favoriteSpace?.map((favSpace) => (
              <>
                <div className={styles.favorites__itemContainer}>
                  <div className={styles.favorites__item}>
                    <div className={styles.favorites__item__img}>
                      <img src={favSpace?.image} alt="" />
                    </div>
                    <div className={styles.favorites__item__details}>
                      <h3>{favSpace?.name}</h3>
                      <div
                        className={styles.favorites__item__details__location}
                      >
                        <img src={locationIcon} alt="location pin" />
                        <p>{favSpace?.location}</p>
                      </div>
                      <div className={styles.favorites__item__details__rating}>
                        <div className="flex mt-4">
                          <div className="flex text-primaryColor items-center">
                            {favSpace?.review?.rating &&
                              [...Array(favSpace?.review?.rating)].map(
                                (_, i) => (
                                  <StarIcon className="w-[20px]" key={i} />
                                )
                              )}
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
                        type="button"
                        text="Visit"
                        classes={
                          styles.favorites__itemContainer__buttons__visit
                        }
                      />
                      <Button
                        type="button"
                        text="Remove"
                        classes={
                          styles.favorites__itemContainer__buttons__remove
                        }
                      />
                    </div>
                  </div>
                  <div className={styles.favorites__hr} />
                </div>
              </>
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
