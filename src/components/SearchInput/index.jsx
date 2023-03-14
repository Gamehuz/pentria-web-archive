import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../redux/utils/UtilSlice";
import searchIcon from "./searchIcon.svg";
import styles from "./searchinput.module.scss";

/**
 * A component that renders a search input field and accepts a className prop that is of type string and is required.
 * @name SearchInput
 * @param {string} className
 * @returns the search input component with the given className
 */

const SearchInput = () => {
  const { searchQuery } = useSelector((state) => state.util);
  const dispatch = useDispatch();
  const getSearchValue = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className={styles.sidebar_input}>
      <div className={styles.sidebar_inputWrap}>
        <img src={searchIcon} alt="" className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => getSearchValue(e)}
        />
      </div>
    </div>
  );
};

export default SearchInput;
