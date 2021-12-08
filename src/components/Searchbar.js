import { SearchOutlined } from "@material-ui/icons";
import React from "react";

const Searchbar = () => {
  return (
    <div className="sidebar__searchContainer">
      <SearchOutlined />
      <input
        className="searchBar"
        placeholder="Click here to search"
        type="text"
      />
    </div>
  );
};

export default Searchbar;
