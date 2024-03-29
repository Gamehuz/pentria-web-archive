import { useRef, useState } from "react";
import styles from "./Menu.module.scss";

import Button from "@/components/Button";
import InputField from "@/components/InputField";

import ButtonSpinner from "@/components/ButtonSpiner";
import { AddActivityToSpace } from "@/redux/features/space/service";
import { dispatch } from "@/redux/store";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import upload from "../assets/upload.svg";

const Menu = ({ spaceId }) => {
  const createdSpaceId = spaceId || localStorage.getItem("createdSpaceId");
  const selectFile = useRef();
  const { isLoading } = useSelector((state) => state.util);
  const [previewImage, setPreviewImage] = useState();
  const [inputfields, setInputfields] = useState({
    name: "",
    price: "",
    image: "",
    duration: "",
    currency: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputfields({ ...inputfields, [name]: value });
  };

  const handleSelectFile = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
    }

    selectFile.current.value = null;
  };

  const handleAddMenu = async (e) => {
    e.preventDefault();
    if (!createdSpaceId) return toast.error("Please create space first");
    if (
      !inputfields.name ||
      !inputfields.price ||
      !inputfields.duration ||
      !inputfields.currency
    )
      return toast.error("Please fill all fields");
    const res = await dispatch(
      AddActivityToSpace({
        spaceId: createdSpaceId,
        ...inputfields,
        image: previewImage,
        price: Number(inputfields.price),
      })
    );
    if (res?.addActivity) {
      setInputfields({
        name: "",
        price: "",
        image: "",
        duration: "",
        currency: "",
      });
      setPreviewImage("");
      localStorage.removeItem("createdSpaceId");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };
  return (
    <div className={styles.menu_container}>
      <h2>Menu</h2>
      <form onSubmit={handleAddMenu}>
        <div className={styles.input_content}>
          <label htmlFor="name">Name</label>
          <InputField name="name" type="text" onChange={handleInputChange} />
        </div>

        <div className={styles.input_content_hr}>
          <label htmlFor="name">Price</label>
          <div>
            <InputField name="price" type="text" onChange={handleInputChange} />
            <div className="ml-4">
              {[{ name: "Hr" }, { name: "Min" }].map((item, index) => (
                <div
                  key={index}
                  onClick={() =>
                    setInputfields({ ...InputField, duration: item.name })
                  }
                  className={`${
                    inputfields.duration === item.name && styles.activeDur
                  }`}
                >
                  {item.name}
                  {/* <input type="radio" name="time" /> */}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.input_content}>
          <label htmlFor="name">Currency</label>
          <InputField
            name="currency"
            type="text"
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.input_content_img}>
          <label htmlFor="name">Add image</label>
          <input
            onChange={handleSelectFile}
            type="file"
            name="identification"
            accept="image/*"
            ref={selectFile}
            hidden
            multiple={false}
          />
          <div
            className={styles.upload}
            onClick={() => selectFile.current.click()}
          >
            <img src={upload} alt="upload" />
            Upload menu image(s)
          </div>
          {previewImage && (
            <div className="flex flex-wrap mt-2 w-full">
              <div className="w-[100px] h-[100px] m-[3px]">
                <img
                  src={previewImage}
                  alt={`Preview `}
                  className=" object-cover w-full h-full"
                />
                {/* <div
                  className="flex  cursor-pointer text-[red] justify-center items-center"
                  onClick={() => handleDelSelected(index)}
                >
                  Delete
                </div> */}
              </div>
            </div>
          )}
        </div>
        {isLoading ? (
          <ButtonSpinner />
        ) : (
          <Button text="save" classes="bg-[#BF4D01]" type="submit" />
        )}
      </form>
    </div>
  );
};

export default Menu;
