import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = e => {
    e.target.value = e.target.value.toLowerCase();
    console.log(e.target.value);
    setSearchInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.search(searchInput);
  };
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-center book-heading">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSubmit}>
            <label htmlFor="customerName" className="customer-name">
              Customer name
            </label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
                onChange={handleSearchInput}
              />
              <SearchButton
                search={() => props.search(searchInput)}
                onClick={() => props.search(searchInput)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Search;
