import Button from "@/components/Button";
import ButtonSpinner from "@/components/ButtonSpiner/index";
import { WALLET_BALANCE } from "@/graphql/queries/walletBalance";
import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import styles from "./bal.module.scss";
function formatNumber(number) {
  const formattedNumber = number?.toLocaleString(undefined, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    useGrouping: true,
  });
  return formattedNumber;
}
const WalletBal = () => {
  const [vendorWalletBalance, { data, loading }] = useLazyQuery(WALLET_BALANCE);
  useEffect(() => {
    vendorWalletBalance();
  }, [vendorWalletBalance]);
  if (loading) return <ButtonSpinner />;
  return (
    <div className={styles.bal}>
      <div className={styles.bal__balance}>
        <h1>NGN {formatNumber(data?.walletBalance)}</h1>
        <p>Available Balance</p>
      </div>
      <div className={styles.bal__withdraw}>
        <Button
          to={"/vendor/dashboard?checkpoint=vendor-withdraw"}
          text="Withdraw"
        />
      </div>
    </div>
  );
};

export default WalletBal;
