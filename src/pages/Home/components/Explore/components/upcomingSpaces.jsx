import { ReactComponent as Heart } from "../assets/heart.svg"
import { ReactComponent as NoStar } from "../../../assets/no-star.svg";
import { ReactComponent as Star } from "../../../assets/star.svg";
import Button from '../../../../../components/Button';
import styles from "../explore.module.scss"
import { useState } from "react";
import moment from "moment"

const UpcomingSpaces = ({ spaces }) => {
    const [favorite, setFavorite] = useState(false);

    const toggleFavorite = () => {
        setFavorite(!favorite)
    };
    
    const spaceCreatedAt = new Date(Number(spaces.createdAt));
    const spaceDate = moment(spaceCreatedAt).format("MMM DD, YYYY");
    const spaceTime = moment(spaceCreatedAt).format("HH:mm");

    return (
        <article key={spaces._id}>
        <img src={spaces.image} alt="spaces arena"/>
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
                <Star />
                <Star />
                <Star />
                <Star />
                <NoStar />
            </div>
            <div className={styles.eventDate}>
            <span>{spaceDate}</span>
            <p>{spaceTime}</p>
            </div>
            <Button className={styles.button} type={'button'} text={'GET TICKET'}/>
        </div>
    </article>
    )
};

export default UpcomingSpaces;