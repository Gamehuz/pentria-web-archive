import { useEffect } from "react";
import styles from "./History.module.scss";

import Button from "../../../components/Button";

import IsLoadingSkeleton from "@/components/LoadingSkeleton";
import { useLazyQuery } from "@apollo/client";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import CUSTOMER_BOOKINGS from "../../../graphql/queries/customerbookings";
import fav from "./assets/fav.svg";
import img from "./assets/img.svg";
import location from "./assets/location.svg";

const History = () => {
  const [customerBookings, { data, loading, error }] =
    useLazyQuery(CUSTOMER_BOOKINGS);
  const { user } = useSelector((state) => state.user);
  const userId = user?._id;
  const perpage = 10;
  const page = 1;
  useEffect(() => {
    customerBookings({
      variables: {
        limit: perpage,
        page,
        customerId: userId,
      },
    });
  }, [customerBookings, userId]);

  console.log(data?.customerBookings);
  if (error) return toast.error(error.message);

  if (loading) return <IsLoadingSkeleton />;
  return (
    <div className={styles.history_container}>
      <div className={styles.coming_soon}>
        <div>
          <h1>COMMING SOON</h1>
          <p>Legacy points</p>
        </div>
        <Button text="redeem" type="submit" bg={"#3E2180"} />
      </div>

      <div className={styles.booking_history}>
        <p>Booking History</p>

        <div className={styles.history}>
          <div className={styles.booking_info}>
            <img src={img} alt="" />
            <div>
              <p className={styles.price}>#1400</p>
              <p className={styles.item}>PS5 (FIFA 23)</p>
              <p className={styles.ticket}>4 Ticket</p>
              <p className={styles.date}>22-06-2022</p>
            </div>
          </div>
          <div className={styles.booking_details}>
            <div>
              <img src={fav} alt="" />
              <p>PH Pleasure Park </p>
            </div>
            <div>
              <img src={location} alt="" />
              <p>23 Abacha Rd phc </p>
            </div>
            <p className={styles.status}>Status: Pending</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
