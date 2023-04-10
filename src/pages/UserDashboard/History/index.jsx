import { useEffect } from "react";
import styles from "./History.module.scss";

import Button from "../../../components/Button";
import fav from "./assets/fav.svg";

import IsLoadingSkeleton from "@/components/LoadingSkeleton";
import { useLazyQuery } from "@apollo/client";
import moment from "moment";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import CUSTOMER_BOOKINGS from "../../../graphql/queries/customerbookings";

function formatDate(timestamp) {
  return moment(Number(timestamp)).format("DD-MM-YYYY");
}

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
    toast.success(`Booking with id ${id} has been cancelled`);
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
                  <img
                    src={booking?.spaceId?.image?.[0]}
                    alt=""
                    className="md:w-[400px] w-full"
                  />
                  <div>
                    <p className={styles.price}>
                      {booking?.currency === "NGN"
                        ? "₦"
                        : booking?.currency === "USD"
                        ? "$"
                        : "£"}
                      {booking?.spaceId?.price}
                    </p>
                    <p className={styles.item}>{booking?.spaceId?.name}</p>
                    <p className="p-2">{booking?.tickets?.length} Ticket</p>
                    <p className={styles.date}>
                      {formatDate(booking?.spaceId?.createdAt)}
                    </p>
                  </div>
                </div>
                <div className={styles.booking_details}>
                  <div>
                    <img src={fav} alt="" />
                    <p>{booking?.spaceId?.location}</p>
                  </div>
                  <div></div>
                  {booking?.status === "cancelled" ? (
                    <p className={styles.status}>Status: {booking?.status}</p>
                  ) : (
                    <>
                      {booking?.status === "Active" ? (
                        <>
                          <p className={styles.status}>
                            Status: {booking?.status}
                          </p>
                          <p
                            className="cursor-pointer text-red-500 hover:transform hover:scale-110 transition duration-500"
                            onClick={() => handleCancelBooking(booking._id)}
                          >
                            Click to cancel
                          </p>
                        </>
                      ) : (
                        <p className={styles.status}>
                          Status: {booking?.status}
                        </p>
                      )}
                    </>
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
