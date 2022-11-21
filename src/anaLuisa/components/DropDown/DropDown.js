import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { StyledDropDown } from "./StyledDropDown";

export default function DropDown({ sortList, sortBy, setSortBy }) {
  const [openDropDown, setOpenDropDown] = useState(false);

  return (
    <StyledDropDown>
      <div className="dropdown">
        <div
          className="content-flexbox"
          onClick={() => {
            setOpenDropDown(!openDropDown);
          }}
        >
          <div className="dropdown-value">
            SORT
            <span>{sortBy ? `(${sortBy})` : ""}</span>
          </div>
          <div className="arrow">
            <ArrowDropDownIcon />
          </div>
        </div>
        {openDropDown && (
          <div className="drop-down-options">
            {sortList.map((option) => {
              return (
                <div
                  key={option}
                  className={`drop-down-option ${
                    option === sortBy ? "active" : ""
                  }`}
                  onClick={() => {
                    setOpenDropDown(!openDropDown);
                    setSortBy(option === "All" ? null : option);
                  }}
                >
                  {option}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </StyledDropDown>
  );
}
