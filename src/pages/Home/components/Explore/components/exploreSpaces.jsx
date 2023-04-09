import { useMutation } from "@apollo/client";
import Proptypes from "prop-types";
import { useState } from "react";
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
            addToFavorites();
          }}
        >
          <Heart />
        </div>
      </div>
      <h3>{space.facilityType}</h3>
      <p>{space.location}</p>
      <div>
        <div>
          <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <NoStar />
          </div>
          <p>{space.reviews[0]?.rating} Ratings</p>
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
