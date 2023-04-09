import { useState, useEffect } from "react";
import styles from "./explore.module.scss";
import Nav from "../../components/Nav";
import { ReactComponent as MapPin } from "./assets/map-pin.svg";
import { ReactComponent as Facility } from "./assets/facility.svg";
import { ReactComponent as Price } from "./assets/price.svg";
import { ReactComponent as Star } from "./assets/star.svg";
import { spaces } from "../../redux/features/user/service";
import Space from "./components/Space/space";
import Footer from "../../components/Footer"

const Explore = () => {
    const [allSpaces, setAllSpaces] = useState([]);

    const [filterValues, setFilterValues] = useState({
        location: "",
        price: "",
        facility: "",
        rating: ""
    });

    const handleFlterValues = (e) => {
        const { name, value } = e.target;

        setFilterValues({
            ...filterValues,
            [name]: value
        })
    }

    const locationFilter = () => {
        if(filterValues.location === "") {
            return allSpaces
        }

        const matchLocationFilters = allSpaces.filter((spaces) => spaces.location.toLowerCase().includes(filterValues.location.toLowerCase()));

        return matchLocationFilters;
    }

    const priceFilter = () => {
        if(filterValues.price === "") {
            return locationFilter()
        }

        const matchPriceFilter = locationFilter().filter((spaces) => spaces.price === Number(filterValues.price));

        return matchPriceFilter;
    }

    const facilityTypeFilter = () => {
        if(filterValues.facility === "") {
            return priceFilter()
        }

        const matchFacilityTypeFilter = priceFilter().filter((spaces) => spaces.facilityType === filterValues.facility);

        return matchFacilityTypeFilter
    }

    const ratingFilter = () => {
        if(filterValues.rating === "") {
            return facilityTypeFilter()
        }

        const matchRatingFilter = facilityTypeFilter().filter((spaces) => spaces.reviews[0].rating === Number(filterValues.rating));

        return matchRatingFilter;
    }
    
    useEffect(() => {
        spaces().then((data) => setAllSpaces(data.spaces))
    });
    return (
        <div>
            <Nav />
            <section className={styles.explorePage}>
                <article className={styles.filterBar}>
                    <div>
                        <MapPin />
                        <select name="location" value={''} onChange={(e) => handleFlterValues(e)}>
                            <option hidden>Location</option>
                            <option>Port Harcourt</option>
                            <option>Lokoja</option>
                        </select>
                    </div>
                    <div>
                        <Price />
                        <select name="price" value={''} onChange={(e) => handleFlterValues(e)}>
                            <option hidden>Price range</option>
                            <option>0</option>
                            <option>10</option>
                        </select>
                    </div>
                    <div>
                        <Facility />
                        <select name="facility" value={''} onChange={(e) => handleFlterValues(e)}>
                            <option hidden>Facility type</option>
                            <option>Gaming</option>
                        </select>
                    </div>
                    <div>
                        <Star />
                        <select name="rating" value={''} onChange={(e) => handleFlterValues(e)}>
                            <option hidden>Rating</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </article>
                <div className={styles.spaces}>
                    <h1>{ratingFilter().length} Results</h1>
                    <div className={styles.allSpaces}>
                    { ratingFilter().map((space) => {
                        return (
                            <Space space={space} key={space._id}/>
                        )
                    })}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
};

export default Explore;