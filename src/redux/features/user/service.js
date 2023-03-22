import { toast } from "react-hot-toast";
import appolloClient from "../../../graphql";
import { SIGNUP_GUEST } from "../../../graphql/mutations/signup";
import { dispatch } from "../../store";
import { setLoading } from "../../utils/UtilSlice";
import { setError, setUser } from "./userSlice";

// export const GuestSignup = (values) => () => {
//   const [signupGuest, { loading, error, data }] = useMutation(SIGNUP_GUEST, {
//     variables: {
//       email: values.email,
//       password: values.password,
//       confirmPassword: values.confirmPassword,
//       firstName: values.firstName,
//       lastName: values.lastName,
//       phone: values.phone,
//       address: values.address,
//       city: values.city,
//       state: values.state,
//       identity: values.identity,
//     },
//   });
//   if (loading) return dispatch(setLoading(true));
//   if (error) return toast.error(error.message);
//   if (data) {
//     toast.success("Signup successful");
//     dispatch(setUser(data));
//     console.log(data);
//     return data;
//   }

//   return signupGuest;
// };

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
    dispatch(setUser(result.data.user.register));
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
