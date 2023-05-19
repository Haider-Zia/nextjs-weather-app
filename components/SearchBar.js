import { useDispatch, useSelector } from "react-redux";
import { addSearched } from "@/slices/searchHistorySlice";
import { HistoryOutlined } from "@ant-design/icons";

import React, { useState } from "react";
import { AutoComplete, Input } from "antd";

const SearchBar = ({ search }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const history = useSelector((state) => state.searchHistory.history);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    if (input) {
      dispatch(addSearched(input));
      search(input);
    }
  };

  const handleClick = (item) => {
    setInput(item);
  };

  return (
    <AutoComplete
      style={{
        width: "50vw",
      }}
      value={input}
      options={history.map((item, index) => {
        return {
          label: (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
              onClick={() => handleClick(item)}
            >
              {item}
              <span>
                <HistoryOutlined />
              </span>
            </div>
          ),
          value: item,
          key: index,
        };
      })}
    >
      <Input.Search
        size="large"
        placeholder="Search City"
        onSearch={handleSearch}
        onChange={handleChange}
      />
    </AutoComplete>
  );
};

export default SearchBar;
