import Button from "@/components/Button";
import ButtonSpinner from "@/components/ButtonSpiner/index";
import InputField from "@/components/InputField";
import { WALLET_BALANCE } from "@/graphql/queries/walletBalance";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import styles from "./withdraw.module.scss";
function formatNumber(number) {
  const formattedNumber = number?.toLocaleString(undefined, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    useGrouping: true,
  });
  return formattedNumber;
}
const Withdraw = () => {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    bankName: "",
    accountNumber: "",
    withdrawalAmount: "",
    currency: "",
    commission: "",
    total: "",
  });
  const [vendorWalletBalance, { data, loading }] = useLazyQuery(WALLET_BALANCE);
  useEffect(() => {
    vendorWalletBalance();
  }, [vendorWalletBalance]);
  if (loading) return;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const handleWithdraw = (e) => {
    e.preventDefault();
    console.log(inputValues);
    if (
      inputValues.bankName === "" ||
      inputValues.accountNumber === "" ||
      inputValues.withdrawalAmount === "" ||
      inputValues.currency === "" ||
      inputValues.commission === "" ||
      inputValues.total === ""
    )
      return toast.error("Please provide all fields");
  };
  return (
    <div className={styles.withdraw}>
      <div
        className="items-center flex text-[#000000] font-bold font-Josefin Sans text-[14px] cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <i className="fas mr-1/2 fa-arrow-left"></i>
        <span>Back</span>
      </div>
      <div className="mt-[2rem]">
        <h1 className="text-black text-[24px] md:text-[34px] font-Josefin Sans font-bold">
          Withdrawal
        </h1>
        <div className="mt-[1rem]">
          {loading ? (
            <ButtonSpinner />
          ) : (
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className={styles.balBox}>
                <p>Available Balance</p>
              </div>
              <div className={styles.balBox}>
                <p>NGN {formatNumber(data?.walletBalance)}</p>
              </div>
            </div>
          )}
        </div>
        <form className="mt-[2rem]" onSubmit={handleWithdraw}>
          <div className="">
            <label className="text-[#000000] font-Josefin Sans text-[20px]">
              Bank name
            </label>
            <InputField
              placeholder="Enter bank name"
              className="mt-[1rem]"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="mt-[3rem]">
            <label className="text-[#000000] font-Josefin Sans text-[20px]">
              Account number
            </label>
            <InputField
              placeholder="Enter account number"
              className="mt-[1rem]"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="mt-[3rem]">
            <label className="text-[#000000] font-Josefin Sans text-[20px]">
              Withdrawal Amount
            </label>
            <div className="flex items-center w-full flex-wrap">
              <div className={styles.flexBig}>
                <InputField
                  placeholder="Enter amount"
                  className="mt-[1rem]"
                  type="number"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.flexSmall}>
                <InputField
                  placeholder="NGN"
                  className="mt-[1rem]"
                  type="text"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="mt-[3rem]">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[#000000] text-[16px]">Commission 0%</p>
              <h3 className="text-[#000000] font-bold text-[18px]">0.00 NGN</h3>
            </div>
            <hr />
            <div className="flex items-center justify-between mt-[3rem]">
              <p className="text-[#000000] text-[16px]">Total</p>
              <h3 className="text-[#000000] font-bold text-[18px]">0.00 NGN</h3>
            </div>
          </div>
          <div className="mt-[3rem]">
            <Button type="submit" text="Withdraw" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Withdraw;
