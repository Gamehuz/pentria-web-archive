import appolloClient from "@/graphql";
import { ADD_ACTIVITY } from "@/graphql/mutations/addActivity";
import { ADD_REVIEW } from "@/graphql/mutations/addReview";
import ADD_TO_FAVORITES from "@/graphql/mutations/addToFavorites";
import { CREATE_SPACE } from "@/graphql/mutations/createSpace";
import { EDIT_SPACE } from "@/graphql/mutations/editSpace";
import { REMOVE_FROM_FAVORITES } from "@/graphql/mutations/removeFromFavorites";
import { DELETE_SPACE } from "@/graphql/queries/deleteSpace";
import { GET_FAVORITE_SPACES } from "@/graphql/queries/favoriteSpace";
import { GET_SPACE } from "@/graphql/queries/space";
import { VENDOR_SPACES } from "@/graphql/queries/vendorListings";
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

const RemoveFromFavorites = (id) => async () => {
  dispatch(setLoading(true));
  try {
    const result = await appolloClient.mutate({
      mutation: REMOVE_FROM_FAVORITES,
      variables: {
        spaceId: id,
      },
    });
    dispatch(setLoading(false));
    toast.success(`space removed from favorites`);
    return result?.data;
  } catch (error) {
    console.log(error.message);
    dispatch(setLoading(false));
    toast.error(error.message);
  }
};

const GetFavoriteSpaces = () => async () => {
  // dispatch(setLoading(true));
  try {
    const result = await appolloClient.query({
      query: GET_FAVORITE_SPACES,
    });
    // dispatch(setLoading(false));
    console.log(result.data?.user);
    return result.data.user;
  } catch (error) {
    console.log(error.message);
    // dispatch(setLoading(false));
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

const AddActivityToSpace = (data) => async () => {
  console.log(data);
  dispatch(setLoading(true));
  try {
    const result = await appolloClient.mutate({
      mutation: ADD_ACTIVITY,
      variables: {
        spaceId: data.spaceId,
        name: data.name,
        price: data.price,
        duration: data.duration,
        image: data.image,
        currency: data.currency,
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
const GetVendorSpaces = () => async () => {
  dispatch(setLoading(true));
  try {
    const result = await appolloClient.query({
      query: VENDOR_SPACES,
    });
    dispatch(setLoading(false));
    return result.data;
  } catch (error) {
    console.log(error.message);
    dispatch(setLoading(false));
    toast.error(error.message);
  }
};

const DeleteSpace = (id) => async () => {
  dispatch(setLoading(true));
  try {
    const result = await appolloClient.query({
      query: DELETE_SPACE,
      variables: {
        spaceId: id,
      },
    });
    dispatch(setLoading(false));
    toast.success("Space Deleted Successfully");
    return result.data;
  } catch (error) {
    console.log(error.message);
    dispatch(setLoading(false));
    toast.error(error.message);
  }
};

const EditSpace = (data) => async () => {
  console.log(data);
  dispatch(setLoading(true));
  try {
    const result = await appolloClient.mutate({
      mutation: EDIT_SPACE,
      variables: {
        input: {
          spaceId: data.id,
          name: data.name,
          image: data.image,
          location: data.location,
          facilityType: data.facilityType,
          category: data.category,
          beds: data.beds,
          restRoome: data.restRoome,
          pool: data.pool,
          outdoorSpace: data.outdoorSpace,
          kitchen: data.kitchen,
          ac: data.ac,
          videoGames: data.videoGames,
          petFriendly: data.petFriendly,
          kidFriendly: data.kidFriendly,
          cleaningSupplies: data.cleaningSupplies,
          workspace: data.workspace,
          wifi: data.wifi,
          parking: data.parking,
          description: data.description,
          policies: data.policies,
        },
      },
    });
    dispatch(setLoading(false));
    toast.success(`Changes saved`);
    return result.data;
  } catch (error) {
    console.log(error.message);
    dispatch(setLoading(false));
    if (error.message === "Not author") {
      toast.error("You are not authorized to edit this space");
    } else {
      toast.error(error.message);
    }
  }
};

export {
  GetSpace,
  addToFavorites,
  AddReview,
  CreateSpace,
  AddActivityToSpace,
  RemoveFromFavorites,
  GetFavoriteSpaces,
  GetVendorSpaces,
  DeleteSpace,
  EditSpace,
};
