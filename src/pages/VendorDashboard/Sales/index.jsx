import { useState, useEffect } from "react";
import Button from "../../../components/Button";
import HistoryTable from "../../../components/HistoryTable";
import ChartGraph from "./compo/chart";
import styles from "./earnings.module.scss";
import { useSelector } from "react-redux";
import { dispatch } from "@/redux/store";
import { GetSoldBookings } from "@/redux/features/booking/services";
import IsLoadingSkeleton from "@/components/LoadingSkeleton";

const VendorSales = () => {
  const firstTitle = ["Bank", "Acct Name", "Acct No"];
  const secondTitle = ["Amount", "Date", "Status"];
  const firstData = [
    {
      name1: "Access Bank",
      name2: "Oluwaseun Oluwaseun",
      name3: "0000000000",
    },
    {
      name1: "Access Bank",
      name2: "Oluwaseun Oluwaseun",
      name3: "0000000000",
    },
    {
      name1: "Access Bank",
      name2: "Oluwaseun Oluwaseun",
      name3: "0000000000",
    },
  ];
  const secondData = [
    {
      name1: "Pleasure Park",
      name2: "PBE 00/23D7",
      name3: "Pending",
    },
    {
      name1: "Machala hub",
      name2: "PBE 00/23D7",
      name3: "Confirmed",
    },
    {
      name1: "Sencillo inn",
      name2: "PBE 00/23D7",
      name3: "Pending",
    },
  ];
  const UserData = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
    },
  ];
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Audience Reach",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
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
      <div className={styles.earningsHeader}>
        <div className={styles.earningsHeader__balance}>
          <h1>NGN 30,000 </h1>
          <p>Available Balance</p>
        </div>
        <div className={styles.earningsHeader__withdraw}>
          <Button
            type="button"
            bg={styles.earningsHeader__withdraw__btn}
            text="Withdraw"
          />
        </div>
      </div>
      <div className="px-[3rem]">
        <div className={styles.earningsBooking}>
          <h3>Sales</h3>
        </div>
        <div className={styles.earnings}>
          <HistoryTable
            includeSn={false}
            firstTableTitle={firstTitle}
            secondTableTitle={secondTitle}
            firstTableData={firstData}
            secondTableData={secondData}
          />
        </div>
        <div className={styles.earningsGraph}>
          <ChartGraph chartData={userData} />
        </div>
      </div>
    </div>
  );
};

export default VendorSales;
