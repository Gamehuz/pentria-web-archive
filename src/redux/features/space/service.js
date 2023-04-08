import appolloClient from "@/graphql";
import { ADD_ACTIVITY } from "@/graphql/mutations/addActivity";
import { ADD_REVIEW } from "@/graphql/mutations/addReview";
import ADD_TO_FAVORITES from "@/graphql/mutations/addToFavorites";
import { CREATE_SPACE } from "@/graphql/mutations/createSpace";
import { GET_SPACE } from "@/graphql/queries/space";
import { dispatch } from "@/redux/store";
import { toast } from "react-hot-toast";
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

const AddReview = (spaceId, comment, rating) => async () => {
  console.log(spaceId, comment, rating);
  try {
    const result = await appolloClient.mutate({
      mutation: ADD_REVIEW,
      variables: {
        spaceId,
        comment,
        rating,
      },
    });
    toast.success(`Review added`);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

const CreateSpace = (data) => async () => {
  dispatch(setLoading(true));
  try {
    const result = await appolloClient.mutate({
      mutation: CREATE_SPACE,
      variables: {
        ...data,
      },
    });
    dispatch(setLoading(false));
    toast.success(`space created`);
    return result.data;
  } catch (error) {
    console.log(error.message);
    dispatch(setLoading(false));
    toast.error(error.message);
  }
};

const AddActivityToSpace = (spaceId, menu) => async () => {
  dispatch(setLoading(true));
  try {
    const result = await appolloClient.mutate({
      mutation: ADD_ACTIVITY,
      variables: {
        spaceId,
        ...menu,
      },
    });
    dispatch(setLoading(false));
    toast.success(`menu added`);
    return result.data;
  } catch (error) {
    console.log(error.message);
    dispatch(setLoading(false));
    toast.error(error.message);
  }
};

export { GetSpace, addToFavorites, AddReview, CreateSpace, AddActivityToSpace };
