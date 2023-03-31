/* eslint-disable react/prop-types */

// import PropTypes from "prop-types";
import styles from "./history.module.scss";

const HistoryTable = ({
  firstTableTitle,
  firstTableData,
  secondTableTitle,
  secondTableData,
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
            {firstTableData.map((data, index) => {
              return (
                <div key={index} className={styles.item}>
                  {includeSn && <p>{index + 1}</p>}
                  <p>{data.name1}</p>
                  <p>{data.name2}</p>
                  {data.name3 && <p>{data.name3}</p>}
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
            {secondTableData.map((data, index) => {
              return (
                <div key={index} className={styles.item}>
                  <p>{data.name1}</p>
                  <p>{data.name2}</p>
                  {data.name3 && <p>{data.name3}</p>}
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
