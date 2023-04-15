import { useMutation } from "@apollo/client";
import Proptypes from "prop-types";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../components/Button";
import ADD_TO_FAVORITES from "../../../../../graphql/mutations/addToFavorites";
import { ReactComponent as NoStar } from "../../../assets/no-star.svg";
import { ReactComponent as Star } from "../../../assets/star.svg";
import { ReactComponent as Heart } from "../assets/heart.svg";
import styles from "../explore.module.scss";

const ExploreSpaces = ({ space }) => {
  const [favorite, setFavorite] = useState(false);
  const navigate = useNavigate();

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  const [addToFavorites] = useMutation(ADD_TO_FAVORITES, {
    variables: {
      spaceId: space._id,
    },
  });

  const senciloPage = (id) => {
    navigate(`/sencilo/${id}`);
  };

  const handleAddtoFavorites = async () => {
    await addToFavorites();
    toast.success("Added to favorites");
  };

  const ratings = () => {
    const arrayOfRatings = [];
    space.reviews.map((review) => arrayOfRatings.push(review.rating));

    const noOfRatings = arrayOfRatings.reduce(
      (acc, currentValue) => (acc += currentValue),
      0
    );

    return Math.floor(noOfRatings / space.reviews.length);
  };

  const star = (reviewamount) => {
    if (reviewamount === 1) {
      return (
        <div>
          <Star />
          <NoStar />
          <NoStar />
          <NoStar />
          <NoStar />
        </div>
      );
    } else if (reviewamount === 2) {
      return (
        <div>
          <Star />
          <Star />
          <NoStar />
          <NoStar />
          <NoStar />
        </div>
      );
    } else if (reviewamount === 3) {
      return (
        <div>
          <Star />
          <Star />
          <Star />
          <NoStar />
          <NoStar />
        </div>
      );
    } else if (reviewamount === 4) {
      return (
        <div>
          <Star />
          <Star />
          <Star />
          <Star />
          <NoStar />
        </div>
      );
    } else if (reviewamount === 5) {
      return (
        <div>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      );
    }
  };

  return (
    <article key={space._id} className="relative">
      <div className="flex w-full m-0 p-0">
        <img src={space.image?.[0]} alt="spaces arena" className="w-full" />
      </div>
      <div className={styles.price}>
        <span>
          <p>
            {space.currency}
            {space.price}
          </p>
          /hr
        </span>
        <div
          className={favorite ? styles.favorite : styles.unfavorite}
          onClick={() => {
            toggleFavorite();
            handleAddtoFavorites();
            ratings();
          }}
        >
          <Heart />
        </div>
      </div>
      <h3>{space.facilityType}</h3>
      <p>{space.location}</p>
      <div>
        <div className={styles.ratings}>
          {star(ratings())}
          <p className="text-[14px] w-full flex">
            {ratings() ? `${ratings()}.0 Ratings` : "No ratings yet"}
          </p>
        </div>
        <Button
          to={`/sencilo/${space._id}`}
          text={"GET TICKET"}
          onClick={() => senciloPage(space._id)}
        />
      </div>
    </article>
  );
};

ExploreSpaces.propTypes = {
  space: Proptypes.object.isRequired,
};

export default ExploreSpaces;
