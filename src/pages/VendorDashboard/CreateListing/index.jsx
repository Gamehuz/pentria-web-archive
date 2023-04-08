import { useRef, useState } from "react";
import styles from "./CreateListing.module.scss";

import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import Menu from "./Menu/Menu";

import { toast } from "react-hot-toast";
import upload from "./assets/upload.svg";

const CreateListing = () => {
  const selectFile = useRef();
  const [inputFields, setInputFields] = useState({
    name: "",
    address: "",
    category: "",
    description: "",
    policy: "",
    identification: "",
    pool: false,
    wifi: false,
    parkingSpace: false,
    outdoorSpace: false,
    kitchen: false,
    ac: false,
    videoGames: false,
    petFriendly: false,
    cleaningSupplies: false,
    tabletopGames: false,
    kidFriendly: false,
    workspace: false,
  });
  const [previewImages, setPreviewImages] = useState([]);
  const [uploadID, setUploadID] = useState([]);

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
      setUploadID((prev) => [...prev, fileArray.map((file) => file.name)]);
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

  console.log(inputFields);

  const handleDelSelected = (index) => {
    setUploadID((prev) => {
      const newUploadID = [...prev];
      newUploadID.splice(index, 1);
      return newUploadID;
    });
    setPreviewImages((prev) => {
      const newPreviewImages = [...prev];
      newPreviewImages.splice(index, 1);
      return newPreviewImages;
    });
  };

  const handleCreateSpace = (e) => {
    e.preventDefault();
    console.log(inputFields);
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
            <label htmlFor="name">Address</label>
            <InputField name="address" type="text" onChange={handleChange} />
          </div>
          <div className={styles.input_content}>
            <label htmlFor="name">Category</label>
            <InputField name="category" type="text" onChange={handleChange} />
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
            <label htmlFor="name">Policy</label>
            <textarea
              name="policy"
              id="policy"
              cols="30"
              onChange={handleChange}
              rows="10"
            ></textarea>
          </div>
          <div className={styles.input_content_img}>
            <label htmlFor="name">Add up to 6 images</label>
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
            {previewImages?.length <= 6 && (
              <div
                className={styles.upload}
                onClick={() => selectFile.current.click()}
              >
                <img src={upload} alt="upload" />
                Upload your ID
              </div>
            )}
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
                  name="parkingSpace"
                  id="parkingSpace"
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

          <Button text="create listing" type="submit" />
        </form>
        <Menu />
      </div>
      <div className="w-full md:w-1/4" />
    </div>
  );
};

export default CreateListing;
