import { dispatch } from "@/redux/store";
import { toast } from "react-hot-toast";
import appolloClient from "../../../graphql/index";
import { CALCULATE_DISCOUNT } from "../../../graphql/mutations/calculateDiscount";
import { CREATE_BOOKING } from "../../../graphql/mutations/createBooking";
import { VENDOR_SOLD_BOOKINGS } from "../../../graphql/queries/bookingSold";
import { setLoading } from "../../utils/UtilSlice";

const CreateBooking = (data) => async () => {
  dispatch(setLoading(true));
  try {
    const result = await appolloClient.mutate({
      mutation: CREATE_BOOKING,
      variables: {
        tickets: data.tickets,
        spaceId: data.spaceId,
        specialRequest: data.specialReq,
        status: data.status,
        discountPercentage: data.discountPercentage,
        initalAmount: data.initalAmount,
        discountAmount: data.discountAmount,
        total: data.total,
      },
    });
    toast.success(`Booking created`);
    dispatch(setLoading(false));
    return result.data;
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

const GetSoldBookings = (id) => async () => {
  dispatch(setLoading(true));
  try {
    const result = await appolloClient.query({
      query: VENDOR_SOLD_BOOKINGS,
      variables: {
        vendorId: id,
      },
    });
    dispatch(setLoading(false));
    return result.data;
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    dispatch(setLoading(false));
  }
};

export { CreateBooking, CalculateDiscount, GetSoldBookings };
