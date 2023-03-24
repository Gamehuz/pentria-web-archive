import { toast } from "react-hot-toast";
import appolloClient from "../../../graphql";
import { SIGNUP_GUEST } from "../../../graphql/mutations/signup";
import { dispatch } from "../../store";
import { setLoading } from "../../utils/UtilSlice";
import { setError, setUser } from "./userSlice";

export const signupGuest = (values) => async () => {
  console.log(values);
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
  console.log(values);
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
        accountType: "VENDOR",
        bName: values.businessName,
        bank: values.bank,
        bankName: values.bankName,
        accountNumber: values.accountNumber,
        accountName: values.accountName,
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
