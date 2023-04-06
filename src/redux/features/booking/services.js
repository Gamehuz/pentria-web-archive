import { dispatch } from "@/redux/store";
import { toast } from "react-hot-toast";
import appolloClient from "../../../graphql/index";
import { CALCULATE_DISCOUNT } from "../../../graphql/mutations/calculateDiscount";
import { CREATE_BOOKING } from "../../../graphql/mutations/createBooking";
import { setLoading } from "../../utils/UtilSlice";

const createBooking =
  (
    tickets,
    spaceId,
    specialRequest,
    status,
    discountPercentage,
    initalAmount,
    discountAmount,
    total
  ) =>
  async () => {
    console.log(
      tickets,
      spaceId,
      specialRequest,
      status,
      discountPercentage,
      initalAmount,
      discountAmount,
      total
    );
    dispatch(setLoading(true));
    try {
      const result = await appolloClient.mutate({
        mutation: CREATE_BOOKING,
        variables: {
          tickets,
          spaceId,
          specialRequest,
          status,
          discountPercentage,
          initalAmount,
          discountAmount,
          total,
        },
      });
      toast.success(`Booking created`);
      dispatch(setLoading(false));
      return result;
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      dispatch(setLoading(false));
    }
  };

const CalculateDiscount = (tickets) => async () => {
  dispatch(setLoading(true));
  try {
    const result = await appolloClient.mutate({
      mutation: CALCULATE_DISCOUNT,
      variables: {
        tickets,
      },
    });
    toast.success(`Discount calculated`);
    dispatch(setLoading(false));
    return result.data;
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    dispatch(setLoading(false));
  }
};

export { createBooking, CalculateDiscount };
