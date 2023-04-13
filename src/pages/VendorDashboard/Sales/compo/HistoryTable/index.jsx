/* eslint-disable react/prop-types */

// import PropTypes from "prop-types";
import moment from "moment";
import styles from "./history.module.scss";
function formatDate(dateString) {
  const date = moment(dateString, "ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  return date.isValid()
    ? date.format("MMM DD, YYYY").toUpperCase()
    : "Invalid date";
}

const HistoryTable = ({
  firstTableTitle,
  data,
  secondTableTitle,
  includeSn,
}) => {
  return (
    <section className={styles.historyTable}>
      <div className={styles.historyDetails}>
        <div className={styles.firstEle}>
          <div className={styles.title}>
            {includeSn && <p>S/N</p>}
            {firstTableTitle.map((title, index) => {
              return <p key={index}>{title}</p>;
            })}
          </div>
          <>
            {data.map((data, index) => {
              return (
                <div key={index} className={styles.item}>
                  {includeSn && <p>{index + 1}</p>}
                  <p>{data?.name}</p>
                  <p>{formatDate(data?.created)}</p>
                  <p>{data?.amount}</p>
                </div>
              );
            })}
          </>
        </div>
        <div className={styles.secondEle}>
          <div className={styles.title}>
            {secondTableTitle.map((title, index) => (
              <p key={index}>{title}</p>
            ))}
          </div>
          <>
            {data.map((data, index) => {
              return (
                <div key={index} className={styles.item}>
                  <p>{data?.customer}</p>
                  <p>{data?.tx_ref ? data?.tx_ref : "NIL"}</p>
                  <p>{data?.status}</p>
                </div>
              );
            })}
          </>
        </div>
      </div>
    </section>
  );
};

export default HistoryTable;
