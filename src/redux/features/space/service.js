import { dispatch } from "@/redux/store";
import { toast } from "react-hot-toast";
import appolloClient from "../../../graphql";
import ADD_TO_FAVORITES from "../../../graphql/mutations/addToFavorites";
import { GET_SPACE } from "../../../graphql/queries/space";
import { setLoading } from "../../utils/UtilSlice";
import { setSpace } from "./spaceSlice";

const GetSpace = (id) => async () => {
  dispatch(setLoading(true));
  try {
    const result = await appolloClient.query({
      query: GET_SPACE,
      variables: {
        spaceId: id,
      },
    });
    dispatch(setLoading(false));
    dispatch(setSpace(result.data?.space));
    return result.data;
  } catch (error) {
    console.log(error.message);
    dispatch(setLoading(false));
    // dispatch(setError(error.response?.data));
    toast.error(error.message);
  }
};

const addToFavorites = (id) => async () => {
  dispatch(setLoading(true));
  try {
    const result = await appolloClient.mutate({
      mutation: ADD_TO_FAVORITES,
      variables: {
        spaceId: id,
      },
    });
    dispatch(setLoading(false));
    toast.success(`space added to favorites`);
    return result.data;
  } catch (error) {
    console.log(error.message);
    dispatch(setLoading(false));
    toast.error(error.message);
  }
};

export { GetSpace, addToFavorites };
