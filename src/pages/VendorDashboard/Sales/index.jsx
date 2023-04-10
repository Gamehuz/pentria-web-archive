import IsLoadingSkeleton from "@/components/LoadingSkeleton";
import { GetSoldBookings } from "@/redux/features/booking/services";
import { dispatch } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WalletBal from "../WalletBal";
import ChartGraph from "./compo/chart";
import HistoryTable from "./compo/HistoryTable";
import styles from "./earnings.module.scss";

const VendorSales = () => {
  const firstTitle = ["Listings", "Date", "Amount"];
  const secondTitle = ["Customer", "Trx ID", "Status"];

  const { isLoading } = useSelector((state) => state.util);
  const [sales, setSales] = useState([]);
  const { user } = useSelector((state) => state.user);
  console.log(sales);
  const fetchSales = async () => {
    const res = await dispatch(GetSoldBookings(user?._id));
    setSales(res.bookingSold);
  };

  useEffect(() => {
    fetchSales();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoading) return <IsLoadingSkeleton />;
  return (
    <div className={styles.EarningsPage}>
      <WalletBal />
      <div className="px-[3rem]">
        <div className={styles.earningsBooking}>
          <h3>Sales</h3>
        </div>
        <div className={styles.earnings}>
          <HistoryTable
            includeSn={false}
            firstTableTitle={firstTitle}
            secondTableTitle={secondTitle}
            data={sales}
          />
        </div>
        <div className={styles.earningsGraph}>
          <ChartGraph chartData={sales} />
        </div>
      </div>
    </div>
  );
};

export default VendorSales;
