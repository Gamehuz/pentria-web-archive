import { useRef, useState } from "react";
import styles from "./Menu.module.scss";

import Button from "../../../../components/Button";
import InputField from "../../../../components/InputField";

import { toast } from "react-hot-toast";
import upload from "../assets/upload.svg";

const Menu = ({ spaceId }) => {
  const selectFile = useRef();
  const [previewImages, setPreviewImages] = useState([]);
  const [inputfields, setInputfields] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleSelectFile = (e) => {
    const files = e.target?.files;
    if (files && files.length <= 3) {
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

  const handleAddMenu = async (e) => {
    e.preventDefault();
    if (!spaceId) return toast.error("Please create space first");
  };
  return (
    <div className={styles.menu_container}>
      <h2>Menu</h2>
      <form onSubmit={handleAddMenu}>
        <div className={styles.input_content}>
          <label htmlFor="name">Name</label>
          <InputField name="name" type="text" />
        </div>

        <div className={styles.input_content_hr}>
          <label htmlFor="name">Price</label>
          <div>
            <h1>NGN</h1>
            <InputField name="price" type="text" />
            <div>
              <div>Hr</div>
              <div>Min</div>
            </div>
          </div>
        </div>

        <div className={styles.input_content_img}>
          <label htmlFor="name">Add up to 3 images</label>
          <input
            //   onChange={handleChange}
            //   onBlur={handleBlur}
            type="file"
            name="identification"
            accept="image/*"
            ref={selectFile}
            hidden
          />
          {previewImages?.length <= 3 && (
            <div
              className={styles.upload}
              onClick={() => selectFile.current.click()}
            >
              <img src={upload} alt="upload" />
              Upload menu image(s)
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
        <Button text="save" classes="bg-[#BF4D01]" type="submit" />
      </form>
    </div>
  );
};

export default Menu;
