import { useState } from "react";
import { ReactComponent as Heart } from "../assets/heart.svg"
import { ReactComponent as NoStar } from "../../../assets/no-star.svg";
import { ReactComponent as Star } from "../../../assets/star.svg";
import Button from '../../../../../components/Button';
import styles from "../explore.module.scss";

const ExploreSpaces = ({ spaces }) => {
    const [favorite, setFavorite] = useState(false);

    const toggleFavorite = () => {
        setFavorite(!favorite)
    };

    return (
        <article key={spaces._id}>
            <img src={spaces.image} alt="spaces arena" />
            <div className={styles.price}>
                <span><p>{spaces.currency}{spaces.price}</p>/hr</span>
                <div className={favorite ? styles.favorite : styles.unfavorite} onClick={() => toggleFavorite()}>
                    <Heart />
                </div>
            </div>
            <h3>{spaces.name}</h3>
            <p>{spaces.location}</p>
            <div>
                <div>
                    <div>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <NoStar />
                    </div>
                    <p>{spaces.reviews[0].rating} Ratings</p>
                </div>
                <Button type={'button'} text={'GET TICKET'} />
            </div>
        </article>
    )
}

export default ExploreSpaces;