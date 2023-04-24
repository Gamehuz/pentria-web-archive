import { useEffect, useRef, useState } from "react";
import styles from "./editListing.module.scss";

import Button from "@/components/Button";
import InputField from "@/components/InputField";

import ButtonSpinner from "@/components/ButtonSpiner";
import { EditSpace } from "@/redux/features/space/service";
import { dispatch } from "@/redux/store";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { GetSpace } from "../../../redux/features/space/service";
import upload from "./assets/upload.svg";

const EditListing = () => {
  const navigate = useNavigate();
  const selectFile = useRef();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const { isLoading } = useSelector((state) => state.util);
  const { space } = useSelector((state) => state.space);

  const [inputFields, setInputFields] = useState({
    name: space?.name,
    location: space?.location,
    facilityType: space?.facilityType,
    category: space?.category,
    description: space?.description,
    beds: space?.beds,
    policies: space?.policies,
    image: space?.image,
    pool: space?.pool,
    currency: space?.currency,
    price: space?.price,
    wifi: space?.wifi,
    parking: space?.parking,
    outdoorSpace: space?.outdoorSpace,
    kitchen: space?.kitchen,
    restRoome: space?.restRoome,
    ac: space?.ac,
    videoGames: space?.videoGames,
    petFriendly: space?.petFriendly,
    cleaningSupplies: space?.cleaningSupplies,
    tabletopGames: space?.tabletopGames,
    kidFriendly: space?.kidFriendly,
    workspace: space?.workspace,
  });
  const [previewImages, setPreviewImages] = useState(space?.image);

  const onChecked = (e) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.checked,
    });
  };
  const handleChange = (e) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
    });
  };
  const handleSelectFile = (e) => {
    const files = e.target?.files;
    if (files && files.length <= 6) {
      const fileArray = Array.from(files);

      fileArray.forEach((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setPreviewImages((prev) => [...prev, reader.result]);
        };
      });
    } else {
      toast.error("You can only select up to 6 images.");
    }
    selectFile.current.value = null;
  };

  const handleDelSelected = (index) => {
    setPreviewImages((prev) => {
      const newPreviewImages = [...prev];
      newPreviewImages.splice(index, 1);
      return newPreviewImages;
    });
  };

  useEffect(() => {
    dispatch(GetSpace(id));
  }, [id]);

  const handleCreateSpace = async (e) => {
    e.preventDefault();
    if (
      !inputFields.name ||
      !inputFields.location ||
      !inputFields.category ||
      !inputFields.facilityType ||
      !inputFields.description ||
      !inputFields.policies ||
      !inputFields.currency ||
      !inputFields.price ||
      !inputFields.beds
    ) {
      return toast.error("Please fill all the fields");
    }
    if (previewImages.length === 0) {
      return toast.error("Please select at least one image");
    }
    const res = await dispatch(
      EditSpace({
        id,
        ...inputFields,
        image: previewImages,
        beds: Number(inputFields.beds),
        price: parseFloat(inputFields.price),
      })
    );
    console.log(res);
    // if (res?.createSpace?._id) {
    //   navigate(-1);
    // }
  };
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="w-full md:w-1/4" />
      <div className={styles.editlist_container}>
        <h1 className="flex items-center">
          Edit this{" "}
          <span className="text-[#3e2180] text-bold  mr-2 text-[2rem]">
            {space?.name}
          </span>{" "}
          space
        </h1>

        <form onSubmit={handleCreateSpace}>
          <div className={styles.input_content}>
            <label htmlFor="name">Name</label>
            <InputField
              name="name"
              id="name"
              value={inputFields.name}
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_content}>
            <label htmlFor="name">location</label>
            <InputField
              name="location"
              type="text"
              value={inputFields.location}
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_content}>
            <label htmlFor="name">Category</label>
            <InputField
              name="category"
              type="text"
              value={inputFields.category}
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_content}>
            <label htmlFor="name">Facilty Type</label>
            <InputField
              name="facilityType"
              type="text"
              value={inputFields.facilityType}
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_content}>
            <label htmlFor="name">Beds</label>
            <InputField
              name="beds"
              type="number"
              value={inputFields.beds}
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_content}>
            <label htmlFor="name">Currency</label>
            <InputField
              name="currency"
              type="text"
              value={inputFields.currency}
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_content}>
            <label htmlFor="name">Price</label>
            <InputField
              name="price"
              type="number"
              value={inputFields.price}
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_content_text}>
            <label htmlFor="name">Description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              value={inputFields.description}
              rows="10"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className={styles.input_content_text}>
            <label htmlFor="name">Policies</label>
            <textarea
              name="policies"
              id="policies"
              cols="30"
              value={inputFields.policies}
              onChange={handleChange}
              rows="10"
            ></textarea>
          </div>
          <div className={styles.input_content_img}>
            <label htmlFor="name">Add up to 4 images</label>
            <input
              onChange={handleSelectFile}
              //   onBlur={handleBlur}
              type="file"
              name="identification"
              accept="image/*"
              ref={selectFile}
              hidden
              multiple={true}
            />
            {previewImages?.length <= 4 && (
              <div
                className={styles.upload}
                onClick={() => selectFile.current.click()}
              >
                <img src={upload} alt="upload" />
                Upload space image(s)
              </div>
            )}
            {previewImages.length > 0 && (
              <div className="flex flex-wrap mt-2 w-full">
                {previewImages.map((url, index) => (
                  <div className="w-[100px] h-[100px] m-[3px]" key={index}>
                    <img
                      src={url}
                      alt={`Preview ${index}`}
                      className=" object-cover w-full h-full"
                    />
                    <div
                      className="flex  cursor-pointer text-[red] justify-center items-center"
                      onClick={() => handleDelSelected(index)}
                    >
                      Delete
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.features}>
            <h4>Features</h4>
            <div className={styles.feat}>
              <div className={styles.features_content}>
                <input
                  type="checkbox"
                  name="pool"
                  id="pool"
                  value={inputFields.pool}
                  checked={inputFields.pool}
                  onChange={onChecked}
                />
                <p>Pool</p>
              </div>
              <div className={styles.features_content}>
                <input
                  type="checkbox"
                  name="wifi"
                  id="wifi"
                  value={inputFields.wifi}
                  onChange={onChecked}
                  checked={inputFields.wifi}
                />
                <p>Wifi</p>
              </div>
              <div className={styles.features_content}>
                <input
                  type="checkbox"
                  name="parking"
                  id="parking"
                  onChange={onChecked}
                  value={inputFields.parkingSpace}
                  checked={inputFields.parkingSpace}
                />
                <p>Parking Space</p>
              </div>
              <div className={styles.features_content}>
                <input
                  type="checkbox"
                  name="outdoorSpace"
                  id="outdoorSpace"
                  value={inputFields.outdoorSpace}
                  onChange={onChecked}
                  checked={inputFields.outdoorSpace}
                />
                <p>Outdoor Space</p>
              </div>
              <div className={styles.features_content}>
                <input
                  type="checkbox"
                  name="kitchen"
                  id="kitchen"
                  value={inputFields.kitchen}
                  onChange={onChecked}
                  checked={inputFields.kitchen}
                />
                <p>Kitchen</p>
              </div>
              <div className={styles.features_content}>
                <input
                  type="checkbox"
                  name="ac"
                  value={inputFields.ac}
                  id="ac"
                  onChange={onChecked}
                  checked={inputFields.ac}
                />
                <p>A.c</p>
              </div>
              <div className={styles.features_content}>
                <input
                  type="checkbox"
                  name="restRoome"
                  id="restRoome"
                  onChange={onChecked}
                  value={inputFields.restRoome}
                  checked={inputFields.restRoome}
                />
                <p>Rest Room</p>
              </div>
              <div className={styles.features_content}>
                <input
                  type="checkbox"
                  name="videoGames"
                  checked={inputFields.videoGames}
                  id="videoGames"
                  value={inputFields.videoGames}
                  onChange={onChecked}
                />
                <p>Video Games</p>
              </div>
              <div className={styles.features_content}>
                <input
                  type="checkbox"
                  name="petFriendly"
                  id="petFriendly"
                  checked={inputFields.petFriendly}
                  onChange={onChecked}
                  value={inputFields.petFriendly}
                />
                <p>Pet Friendly </p>
              </div>
              <div className={styles.features_content}>
                <input
                  type="checkbox"
                  name="cleaningSupplies"
                  id="cleaningSupplies"
                  checked={inputFields.cleaningSupplies}
                  onChange={onChecked}
                  value={inputFields.cleaningSupplies}
                />
                <p>Cleaning Supplies</p>
              </div>
              <div className={styles.features_content}>
                <input
                  type="checkbox"
                  name="tabletopGames"
                  id="tabletopGames"
                  checked={inputFields.tabletopGames}
                  onChange={onChecked}
                  value={inputFields.tabletopGames}
                />
                <p>Tabletop Games</p>
              </div>
              <div className={styles.features_content}>
                <input
                  type="checkbox"
                  name="kidFriendly"
                  id="kidFriendly"
                  checked={inputFields.kidFriendly}
                  onChange={onChecked}
                  value={inputFields.kidFriendly}
                />
                <p>Kid-Friendly</p>
              </div>
              <div className={styles.features_content}>
                <input
                  type="checkbox"
                  name="workspace"
                  id="workspace"
                  checked={inputFields.workspace}
                  onChange={onChecked}
                  value={inputFields.workspace}
                />
                <p>workspace</p>
              </div>
            </div>
          </div>
          {isLoading ? (
            <ButtonSpinner />
          ) : (
            <div className="flex justify-between">
              <Button text="Edit Space" type="submit" />
              <Button
                text="Cancel"
                type="button"
                onClick={() => navigate(-1)}
                classes={styles.cancel}
              />
            </div>
          )}
        </form>
        {/* <Menu spaceId={createdSpaceId} /> */}
      </div>
      <div className="w-full md:w-1/4" />
    </div>
  );
};

export default EditListing;
