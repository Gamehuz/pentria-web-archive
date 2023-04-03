import { dispatch } from "@/redux/store";
import { toast } from "react-hot-toast";
import appolloClient from "../../../graphql";
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

export { GetSpace };
