import { useRef, useState } from "react";
import styles from "./CreateListing.module.scss";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Menu from "./Menu/Menu";

import ButtonSpinner from "@/components/ButtonSpiner";
import { CreateSpace } from "@/redux/features/space/service";
import { dispatch } from "@/redux/store";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import upload from "./assets/upload.svg";

const CreateListing = () => {
  const selectFile = useRef();
  const { isLoading } = useSelector((state) => state.util);
  const [createdSpaceId, setCreatedSpaceId] = useState(null);
  const [inputFields, setInputFields] = useState({
    name: "",
    location: "",
    facilityType: "",
    category: "",
    description: "",
    beds: 0,
    policies: "",
    image: "",
    pool: false,
    currency: "",
    price: 0.0,
    wifi: false,
    parking: false,
    outdoorSpace: false,
    kitchen: false,
    restRoome: false,
    ac: false,
    videoGames: false,
    petFriendly: false,
    cleaningSupplies: false,
    tabletopGames: false,
    kidFriendly: false,
    workspace: false,
  });
  const [previewImages, setPreviewImages] = useState([]);

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
      CreateSpace({
        ...inputFields,
        image: previewImages,
        beds: Number(inputFields.beds),
        price: parseFloat(inputFields.price),
      })
    );
    if (res?.createSpace?._id) {
      localStorage.setItem("createdSpaceId", res.createSpace?._id);
      setCreatedSpaceId(res.createSpace?._id);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="w-full md:w-1/4" />
      <div className={styles.createlist_container}>
        <h1>Create a new listing </h1>

        <form onSubmit={handleCreateSpace}>
          <div className={styles.input_content}>
            <label htmlFor="name">Name</label>
            <InputField name="name" type="text" onChange={handleChange} />
          </div>
          <div className={styles.input_content}>
            <label htmlFor="name">location</label>
            <InputField name="location" type="text" onChange={handleChange} />
          </div>
          <div className={styles.input_content}>
            <label htmlFor="name">Category</label>
            <InputField name="category" type="text" onChange={handleChange} />
          </div>
          <div className={styles.input_content}>
            <label htmlFor="name">Facilty Type</label>
            <InputField
              name="facilityType"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_content}>
            <label htmlFor="name">Beds</label>
            <InputField name="beds" type="number" onChange={handleChange} />
          </div>
          <div className={styles.input_content}>
            <label htmlFor="name">Currency</label>
            <InputField name="currency" type="text" onChange={handleChange} />
          </div>
          <div className={styles.input_content}>
            <label htmlFor="name">Price</label>
            <InputField name="price" type="number" onChange={handleChange} />
          </div>
          <div className={styles.input_content_text}>
            <label htmlFor="name">Description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
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
                  checked={inputFields.parkingSpace}
                />
                <p>Parking Space</p>
              </div>
              <div className={styles.features_content}>
                <input
                  type="checkbox"
                  name="outdoorSpace"
                  id="outdoorSpace"
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
                  onChange={onChecked}
                  checked={inputFields.kitchen}
                />
                <p>Kitchen</p>
              </div>
              <div className={styles.features_content}>
                <input
                  type="checkbox"
                  name="ac"
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
                />
                <p>workspace</p>
              </div>
            </div>
          </div>
          {isLoading ? (
            <ButtonSpinner />
          ) : (
            <Button text="create listing" type="submit" />
          )}
        </form>
        <Menu spaceId={createdSpaceId} />
      </div>
      <div className="w-full md:w-1/4" />
    </div>
  );
};

export default CreateListing;
