import { toast } from "react-hot-toast";
import appolloClient from "../../../graphql";
import LOGIN_USER from "../../../graphql/mutations/login";
import { SIGNUP_GUEST, SIGNUP_VENDOR } from "../../../graphql/mutations/signup";
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
