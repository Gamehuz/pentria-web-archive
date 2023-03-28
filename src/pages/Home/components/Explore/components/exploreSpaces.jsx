import { useState } from "react";
import { ReactComponent as Heart } from "../assets/heart.svg"
import { ReactComponent as NoStar } from "../../../assets/no-star.svg";
import { ReactComponent as Star } from "../../../assets/star.svg";
import Button from '../../../../../components/Button';
import styles from "../explore.module.scss";
import ADD_TO_FAVORITES from "../../../../../graphql/mutations/addToFavorites";
import { useMutation } from "@apollo/client";

const ExploreSpaces = ({ space }) => {
    const [favorite, setFavorite] = useState(false);

    const toggleFavorite = () => {
        setFavorite(!favorite)
    };

    const [addToFavorites] = useMutation(ADD_TO_FAVORITES, {
        variables: {
            spaceId: space._id
        }
    });

    return (
        <article key={space._id}>
            <img src={space.image} alt="spaces arena" />
            <div className={styles.price}>
                <span><p>{space.currency}{space.price}</p>/hr</span>
                <div className={favorite ? styles.favorite : styles.unfavorite} onClick={() => {toggleFavorite();
                addToFavorites()}}>
                    <Heart />
                </div>
            </div>
            <h3>{space.name}</h3>
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
                    <p>{space.reviews[0].rating} Ratings</p>
                </div>
                <Button type={'button'} text={'GET TICKET'} />
            </div>
        </article>
    )
}

export default ExploreSpaces;