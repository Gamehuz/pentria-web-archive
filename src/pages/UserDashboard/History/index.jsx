import { useEffect } from "react";
import styles from "./History.module.scss";

import Button from "../../../components/Button";
import fav from "./assets/fav.svg";

import IsLoadingSkeleton from "@/components/LoadingSkeleton";
import { useLazyQuery } from "@apollo/client";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import CUSTOMER_BOOKINGS from "../../../graphql/queries/customerbookings";

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
  const handleCancelBooking = (id) => {
    toast.error(`Booking with id ${id} has been cancelled`);
  };
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
        {data?.customerBookings?.length > 0 ? (
          <div className="flex flex-col">
            {data?.customerBookings?.map((booking) => (
              <div className={styles.history} key={booking?._id}>
                <div className={styles.booking_info}>
                  <img src={booking?.image} alt="" />
                  <div>
                    <p className={styles.price}>
                      {booking?.currency === "NGN"
                        ? "₦"
                        : booking?.currency === "USD"
                        ? "$"
                        : "£"}
                      {booking?.price}
                    </p>
                    <p className={styles.item}>{booking?.name}</p>
                    <p className={styles.booking?.tickets?.length}> Ticket</p>
                    <p className={styles.date}>{booking?.date}</p>
                  </div>
                </div>
                <div className={styles.booking_details}>
                  <div>
                    <img src={fav} alt="" />
                    <p>{booking?.location}</p>
                  </div>
                  <div>
                    {/* <img src={location} alt="" />
              <p>23 Abacha Rd phc </p> */}
                  </div>
                  {booking?.status === "cancelled" ? (
                    <p
                      onClick={() => handleCancelBooking(booking._id)}
                      className={styles.status}
                    >
                      Status: {booking?.status}
                    </p>
                  ) : (
                    <p className={styles.status}>Status: {booking?.status}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.no_history}>No Booking History</p>
        )}
      </div>
    </div>
  );
};

export default History;
