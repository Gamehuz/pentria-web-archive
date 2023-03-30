/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
//   BrowserRouter as Router,
//   Link,
  useLocation
} from "react-router-dom";
import { useLazyQuery } from '@apollo/client';
import QRCode from "react-qr-code";


// eslint-disable-next-line no-unused-vars
import {GET_RECEIPT} from "../../graphql/queries/bookings";
// eslint-disable-next-line no-unused-vars
import ALL_SPACES from '../../graphql/queries/spaces';
import Nav from "../../components/Nav";
import styles from "./receipt.module.scss"
import barcode from "./assets/barcode.png";

function useQuery() {

    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
const Receipt = () => {
    // const [reference, setReference] = useState(null);
    let query = useQuery();
    
    const [getReceipt, { loading, data, error }] = useLazyQuery(GET_RECEIPT);

    const ref = query.get('reference')
    // setReference(ref)

        console.log(ref)
    useEffect(() => {
        getReceipt({ variables: { txRef: query.get('reference') } })
    }, [])

    if (error) {
        return (
            <div>
                <Nav />
                <div className={styles.error}>
                    <h1>Oops!</h1>
                    <p>Something went wrong. Please try again.</p>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.receipt}>
            <Nav />
            {!data? <div className={styles.loading}>Loading...</div> :

            <>
            <div className={styles.download}>
                <span>{data.booking.spaceId.name}</span>
            </div>
            <section className={styles.details}>
                <div>
                    <div className={styles.name}>
                        <p>{ data.booking.customer.firstName } {data.booking.customer.lastName}</p>
                        <span>{data.booking.customer.phone}</span>
                    </div>
                    <div className={styles.reservation}>
                        <p>Reservation At:</p>
                        <span>{`${data.booking.spaceId.name} ${data.booking.spaceId.location}`}</span>
                    </div>
                    <div className={styles.reservation}>
                        <p>Booking status:</p>
                        <span>{data.booking.status}</span>
                    </div>
                    <div className={styles.reservation}>
                        <p>Payment status:</p>
                        <span>{data.booking.payment}</span>
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
                   {data.booking.tickets.map((item, index) => {
                    return (
                        <div key={index}>
                        <p>{index+1}</p>
                        <p>{item.name}</p>
                        <p>{item.count}</p>
                        <p>{item.date}</p>
                        <p>{item.time}</p>
                        <p>{item.duration}</p>
                    </div>
                    )
                   })}
                </div>
                <p className={styles.paid}>PAID: {data.booking.currency} {data.booking.total}</p>
                <div className={styles.specialrequest}>
                    <p>Special Request:</p>
                    <span>{data.booking.specialRequest}</span>
                </div>
                <div className={styles.barcode}>
                    <QRCode
                        size={156}
                        style={{ height: "auto", maxWidth: "50%", width: "50%" }}
                        value={`Booking payment was ${data.booking.payment} and booking is still ${data.booking.status}`}
                        viewBox={`0 0 156 156`}
                    />
                    <span>{query.get('reference')}</span>
                </div>
            </section>  
            </>
            }
        </div>
    )
}

export default Receipt;