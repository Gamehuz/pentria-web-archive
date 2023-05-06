import { toast } from "react-hot-toast";
import appolloClient from "../../../graphql";
import EDIT_USER_ACCOUNT_INFO from "../../../graphql/mutations/editUserAccountInfo";
import EDIT_WALLET_INFO from "../../../graphql/mutations/editWalletInfo";
import LOGIN_USER from "../../../graphql/mutations/login";
import { SIGNUP_GUEST, SIGNUP_VENDOR } from "../../../graphql/mutations/signup";
import UPDATE_PASSWORD from "../../../graphql/mutations/updatePassword";
import VERIFY_BANKS from "../../../graphql/mutations/verifyBanks";
import CUSTOMER_BOOKINGS from "../../../graphql/queries/customerbookings";
import GET_BANKS from "../../../graphql/queries/getBanks";
import ALL_SPACES from "../../../graphql/queries/spaces";
import USER from "../../../graphql/queries/userdetails";
import { dispatch } from "../../store";
import { setLoading } from "../../utils/UtilSlice";
import { setError, setToken, setUser } from "./userSlice";

export const signupGuest = (values) => async () => {
  dispatch(setLoading(true));
  try {
    const result = await appolloClient.mutate({
      mutation: SIGNUP_GUEST,
      variables: {
        email: values.email,
        password: values.password,
        firstName: values.firstname,
        lastName: values.lastname,
        phone: values.phoneNumber,
        address: values.address,
        city: values.city,
        state: values.state,
        accountType: "GUEST",
      },
    });
    dispatch(setUser(result.data?.register));
    toast.success("Signup successful");
    dispatch(setLoading(false));
    return result.data;
  } catch (error) {
    console.log(error);
    dispatch(setError(error.message));
    dispatch(setLoading(false));
    toast.error(error.message);
  }
};

export const signupVendor = (values) => async () => {
  dispatch(setLoading(true));
  try {
    const result = await appolloClient.mutate({
      mutation: SIGNUP_VENDOR,
      variables: {
        email: values.email,
        password: values.password,
        firstName: values.firstname,
        lastName: values.lastname,
        phone: values.phoneNumber,
        address: values.address,
        city: values.city,
        state: values.state,
        accountType: "VENDOR",
        bName: values.businessname,
        bank: values.bankName,
        bankName: values.accountName,
        acctNumber: values.accountNumber,
        occupation: values.occupation,
      },
    });
    dispatch(setUser(result.data?.register));
    toast.success("Signup successful");
    dispatch(setLoading(false));
    return result.data;
  } catch (error) {
    console.log(error);
    dispatch(setError(error.message));
    dispatch(setLoading(false));
    toast.error(error.message);
  }
};

export const loginUser = (values) => async () => {
  dispatch(setLoading(true));
  try {
    const result = await appolloClient.mutate({
      mutation: LOGIN_USER,
      variables: {
        email: values.email,
        password: values.password,
      },
    });
    dispatch(setToken(result.data?.login.token));
    toast.success("Login successful");
    localStorage.setItem("pentriaAccessToken", result.data?.login.token);
    dispatch(setLoading(false));
    return result.data;
  } catch (error) {
    console.log(error);
    dispatch(setError(error.message));
    dispatch(setLoading(false));
    toast.error(error.message);
  }
};

export const userData = () => async () => {
  dispatch(setLoading(true));
  try {
    const result = await appolloClient.query({
      query: USER,
    });
    dispatch(setLoading(false));
    dispatch(setUser(result.data?.user));
    return result.data;
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError("Error fetching user's data"));
    // toast.error("Error fetching user's data");
  }
};

export const handleEditInfo = (values, data) => async () => {
  dispatch(setLoading(true));
  try {
    await appolloClient.mutate({
      mutation: EDIT_USER_ACCOUNT_INFO,
      variables: {
        firstName:
          values.firstName === "" ? data?.user.firstName : values.firstName,
        lastName:
          values.lastName === "" ? data?.user.lastName : values.lastName,
        address: values.address === "" ? data?.user.address : values.address,
        city: values.city === "" ? data?.user.city : values.city,
        state: values.state === "" ? data?.user.state : values.state,
        email: values.email === "" ? data?.user.email : values.email,
        phone:
          values.phoneNumber === "" ? data?.user.phone : values.phoneNumber,
      }
    });
    dispatch(setLoading(false));
    toast.success("Data updated successfully, Refresh page");
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError(error.message));
    toast.error(error.message);
  }
};

export const handleUpdatePasword = (values) => async () => {
  dispatch(setLoading(true));
  try {
    await appolloClient.mutate({
      mutation: UPDATE_PASSWORD,
      variables: {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      },
    });
    dispatch(setLoading(false));
    toast.success("Password updated successfully");
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError(error.message));
    toast.error(error.message);
  }
};

export const handleLogout = () => async () => {
  dispatch(setLoading(true));
  try {
    localStorage.clear();
    dispatch(setToken(null));
    dispatch(setUser(null));
    dispatch(setLoading(false));
    toast.success("Logout successful");
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError(error.message));
    toast.error(error.message);
  }
};

export const spaces = async () => {
  try {
    const result = await appolloClient.query({
      query: ALL_SPACES,
    });
    return result.data;
  } catch (error) {
    dispatch(setError(error.message));
    toast.error(error.message);
  }
};

export const getBanks = async () => {
  try {
    const result = await appolloClient.query({
      query: GET_BANKS,
    });
    return result.data;
  } catch (error) {
    dispatch(setError(error.message));
    toast.error(error.message);
  }
};

export const verifyBanks = (values) => async () => {
  dispatch(setLoading(true));
  try {
    const result = await appolloClient.mutate({
      mutation: VERIFY_BANKS,
      variables: {
        accountNumber: values.accountNumber,
        code: values.code,
      },
    });
    dispatch(setLoading(false));
    toast.success("Banks verified");
    return result.data;
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError(error.message));
    toast.error(error.message);
  }
};

export const handleEditWalletInfo = (values) => async () => {
  dispatch(setLoading(true));
  try {
    await appolloClient.mutate({
      mutation: EDIT_WALLET_INFO,
      variables: {
        bank: values.bank,
        bName: values.accountName,
        bankCode: values.code,
        acctNumber: values.accountNumber,
      },
    });
    dispatch(setLoading(false));
    toast.success("Wallet updated successfully");
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError(error.message));
    toast.error(error.message);
  }
};

export const customerBookings = async (customerID) => {
  try {
    const result = await appolloClient.query({
      query: CUSTOMER_BOOKINGS,
      variables: {
        customerId: customerID,
      },
    });
    return result.data;
  } catch (error) {
    dispatch(setError(error.message));
  }
};
