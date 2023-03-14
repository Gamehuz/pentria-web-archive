import Button from "../../../../components/Button";
import homepageImg from "../../assets/homepageImg.png";
import arrowImg from "../../assets/arrow.png";
import { ReactComponent as MapPin } from "../../assets/map-pin.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import InputField from "../../../../components/InputField";
import styles from './entryhomepage.module.scss';

const EntryHome = () => {
    return (
      <section className={styles.enterPlaySection}>
      <div className={styles.getTickets}>
        <div>
          <div className={styles.enterPlay}>
            <h1>Enter the </h1>
            <span>PLAY</span>
          </div>
          <p className={styles.enterPlayp}>Beat the queue with one-click ticket reservation. Enjoy seamless playtime at a recreation space near you.</p>
          <div className={styles.tickets}>
            <Button type={'button'} text={'GET TICKETS'} />
            <p>BECOME A PARTNER</p>
          </div>
        </div>
        <div className={styles.searchfield}>
          <div>
            <MapPin />
            <select title="Location">
              <option>Location</option>
            </select>
          </div>
          <div>
            <Search />
            <InputField 
            placeholder={'Enter name of game or recreation space'}
            type={'search'}
            value={''}
            name={'search'}
              />
          </div>
          <Button type={'search'} text='SEARCH' />
        </div>
      </div>
      <div className={styles.homepageImg}>
        <img src={arrowImg} alt="Fancy Arrow"/>
        <img src={homepageImg} alt="A fancy city"/>
      </div>
    </section>
    )
}

export default EntryHome;