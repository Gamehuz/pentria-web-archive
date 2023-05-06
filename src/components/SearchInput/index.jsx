// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../redux/utils/UtilSlice";
import searchIcon from "./searchIcon.svg";

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
    <div className=''>
      <div className="flex">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 bg-[#E9E9E9] rounded-3xl shadow-sm outline-none lg:px-10"
          value={searchQuery}
          onChange={(e) => getSearchValue(e)}
        />
        <img src={searchIcon} alt="" className='relative right-10' />
      </div>
    </div>
  );
};

export default SearchInput;
