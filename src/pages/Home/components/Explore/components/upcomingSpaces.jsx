import { useMutation } from "@apollo/client";
import moment from "moment";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../components/Button";
import ADD_TO_FAVORITES from "../../../../../graphql/mutations/addToFavorites";
import { ReactComponent as NoStar } from "../../../assets/no-star.svg";
import { ReactComponent as Star } from "../../../assets/star.svg";
import { ReactComponent as Heart } from "../assets/heart.svg";
import styles from "../explore.module.scss";

const UpcomingSpaces = ({ space }) => {
  const [favorite, setFavorite] = useState(false);
  const navigate = useNavigate();

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  const spaceCreatedAt = new Date(Number(space.createdAt));
  const spaceDate = moment(spaceCreatedAt).format("MMM DD, YYYY");
  const spaceTime = moment(spaceCreatedAt).format("HH:mm");

  const [addToFavorites] = useMutation(ADD_TO_FAVORITES, {
    variables: {
      spaceId: space._id,
    },
  });

  const spaceSencilo = (id) => {
    navigate(`/sencilo/${id}`);
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
    <article key={space._id}>
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
            addToFavorites();
          }}
        >
          <Heart />
        </div>
      </div>
      <h3>{space.facilityType}</h3>
      <p>{space.location}</p>
      <div className="mr-4">
        <div className={styles.ratingTime}>
          <p> {ratings() ? star(ratings()) : "No ratings yet"}</p>
          <div className={styles.eventDate}>
            <span>{spaceDate}</span>
            <p>{spaceTime}</p>
          </div>
        </div>
        <Button
          className={styles.button}
          type={"button"}
          text={"GET TICKET"}
          onClick={() => spaceSencilo(space._id)}
        />
      </div>
    </article>
  );
};

UpcomingSpaces.propTypes = {
  space: PropTypes.object.isRequired,
};

export default UpcomingSpaces;
