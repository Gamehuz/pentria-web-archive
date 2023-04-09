import Nav from "../../components/Nav";
import styles from "./payment.module.scss";
import { ReactComponent as MapPin } from "./assets/map-pin.svg"
import Button from "../../components/Button";
import { useSelector } from "react-redux";
import { dispatch } from "@/redux/store";
import { CalculateDiscount, CreateBooking } from "../../redux/features/booking/services";
import { useCallback, useEffect, useState } from "react"

const Payment = () => {
    const paymentSpaceDetails = JSON.parse(localStorage.getItem("spaceDetails"));
    const { user } = useSelector((state) => state.user);
    const tickets = JSON.parse(localStorage.getItem("paymentactivities"));
    const [discountData, setDiscountData] = useState({});

    const discountDetails = useCallback( async () => {
        const ticketsData = tickets.map((item) => {
            return {
                name: item.name,
                spaceId: item.spaceId,
                activityId: item.activityId,
                date: item.date,
                time: item.time,
                duration: item.duration,
                price: item.price,
                count: item.count,
            };
        });
        const calculateDiscountRes = await dispatch(
            CalculateDiscount(ticketsData)
        );
        
        return calculateDiscountRes;
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleBooking = useCallback(async () => {
        const ticketsData = tickets.map((item) => {
            return {
                name: item.name,
                spaceId: item.spaceId,
                activityId: item.activityId,
                date: item.date,
                time: item.time,
                duration: item.duration,
                price: item.price,
                count: item.count,
            };
        });

        const bookingData = {
            tickets: ticketsData,
            spaceId: tickets[0].spaceId,
            discountAmount: discountData.discountAmount,
            discountPercentage: discountData.discountPercentage,
            initalAmount: discountData.initalAmount,
            status: "Active",
            total: discountData.total,
            specialReq: paymentSpaceDetails.specialRequest,
        }
        console.log(bookingData)

        const bookingRes = await dispatch(CreateBooking(bookingData));

        if (bookingRes.createBooking) {
            window.location.href = bookingRes.createBooking.link;
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [discountData])

    useEffect(() => {
        discountDetails().then((data) => setDiscountData(data.calculateDiscount));
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <div className={styles.payment}>
            <Nav />
            <section className={styles.paymentDetails}>
                <h1>Booking Details</h1>
                <h2>{paymentSpaceDetails?.facilityType.toUpperCase()}</h2>
                <span className={styles.address}>
                    <MapPin />
                    <p>{paymentSpaceDetails?.location}</p>
                </span>
                    <span className={styles.detailsheader}>
                        <div></div>
                        <h3>CUSTOMER DETAILS</h3>
                    </span>
                    <div className={styles.details}>
                        <div className={styles.nameandPhone}>
                            <div>
                                <p>NAME</p>
                                <span>{user?.firstName} {user?.lastName}</span>
                            </div>
                            <div>
                                <p>PHONE</p>
                                <span>{user?.phone}</span>
                            </div>
                        </div>
                        <div className={styles.specialrequest}>
                            <p>Special Request:</p>
                            <span>{paymentSpaceDetails.specialRequest ? paymentSpaceDetails.specialRequest : null}</span>
                        </div>
                    </div>
                    <div className={styles.eventDetails}>
                        <div>
                            <p>SN</p>
                            <p>MENU</p>
                            <p>TICKETS</p>
                            <p>DATE</p>
                            <p>TIME</p>
                            <p>DURATION</p>
                        </div>
                        {
                            tickets.map((ticket, index) => {
                                return (
                                    <div key={ticket.activityId}>
                                        <p>{index + 1}</p>
                                        <p>{ticket.name}</p>
                                        <p>{ticket.count} REGULAR</p>
                                        <p>{ticket.date}</p>
                                        <p>{ticket.time}</p>
                                        <p>{ticket.duration}mins</p>
                                    </div>
                                )
                            })
                        }                       
                    </div>
                    <div className={styles.totalanddiscount}>
                        <span className={styles.subtotal}>SUB-TOTAL - {discountData?.initalAmount}</span>
                        <span className={styles.discount}>DISCOUNT - {discountData?.discountPercentage}%</span> 
                    </div>
                    <div className={styles.total}>
                        <p>TOTAL</p>
                        <p>{discountData?.total}</p>
                    </div>
                    <Button bg={styles.button} text={"CONFIRM"} onClick={() => handleBooking()}/>
            </section>
        </div>
    )
}

export default Payment;