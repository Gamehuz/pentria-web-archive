import { toast } from "react-hot-toast";
import appolloClient from "../../../graphql";
import EDIT_USER_ACCOUNT_INFO from "../../../graphql/mutations/editUserAccountInfo";
import LOGIN_USER from "../../../graphql/mutations/login";
import { SIGNUP_GUEST, SIGNUP_VENDOR } from "../../../graphql/mutations/signup";
import UPDATE_PASSWORD from "../../../graphql/mutations/updatePassword";
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

export const userData = async () => {
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
    toast.error("Error fetching user's data");
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
      },
    });
    dispatch(setLoading(false));
    toast.success("Data updated successfully");
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError(error.message));
    toast.error("Error updating user's data");
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
