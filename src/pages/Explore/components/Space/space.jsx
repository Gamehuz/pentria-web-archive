import { useState } from "react";
import Button from "../../../../components/Button";
import styles from "./space.module.scss";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/client";
import ADD_TO_FAVORITES from "../../../../graphql/mutations/addToFavorites";
import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as NoStar } from "../../assets/no-star.svg";
import { ReactComponent as Heart } from "../../assets/heart.svg"
import { useNavigate } from "react-router-dom";

const Space = ({ space }) => {
    const [favorite, setFavorite] = useState(false);
    const navigate = useNavigate();

    const toggleFavorite = () => {
        setFavorite(!favorite)
    };

    const [addToFavorites] = useMutation(ADD_TO_FAVORITES, {
        variables: {
            spaceId: space._id
        }
    });

    const spaceSencilo = (id) => {
        navigate(`/sencilo/${id}`)
    };

    const ratings = () => {
        const arrayOfRatings = [];
        space.reviews.map((review) => arrayOfRatings.push(review.rating))
    
        const noOfRatings = arrayOfRatings.reduce((acc, currentValue) => acc += currentValue, 0)
    
        return Math.floor(noOfRatings / space.reviews.length);
      }
    
      const star = (reviewamount) => {
        if(reviewamount === 1) {
          return (
            <div>
              <Star />
              <NoStar />
              <NoStar />
              <NoStar />
              <NoStar />
            </div>
          )
        } else if(reviewamount === 2) {
          return (
            <div>
              <Star />
              <Star />
              <NoStar />
              <NoStar />
              <NoStar />
            </div> 
          )
    
        } else if(reviewamount === 3) {
          return (
            <div>
              <Star />
              <Star />
              <Star />
              <NoStar />
              <NoStar />
            </div> 
          )
        } else if(reviewamount === 4) {
          return (
            <div>
              <Star />
              <Star />
              <Star />
              <Star />
              <NoStar />
            </div> 
          )
        } else if(reviewamount === 5) {
          return (
            <div>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div> 
          )
        }
      }

    return (
        <article key={space._id} className={styles.cards}>
            <img src={space.image} alt="spaces arena" />
            <div className={styles.price}>
                <span><p>{space.currency}{space.price}</p>/hr</span>
                <div className={favorite ? styles.favorite : styles.unfavorite} onClick={() => {
                    toggleFavorite();
                    addToFavorites()
                }}>
                    <Heart />
                </div>
            </div>
            <h3>{space.facilityType}</h3>
            <p className={styles.location}>{space.location}</p>
            <div className={styles.reviews}>
                <div className={styles.ratings}>
                    {star(ratings())}
                    <p>{ratings() ? `${ratings()}.0 Ratings` : 'No ratings yet'}</p>
                </div>
                <Button type={'button'} text={'GET TICKET'} onClick={() => spaceSencilo(space._id)} />
            </div>
        </article>
    )
};

Space.propTypes = {
    space: PropTypes.object.isRequired
}

export default Space;