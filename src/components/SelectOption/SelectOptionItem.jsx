import React from "react";

const SelectOptionItem = ({name}) => (
  <option className="selectOptionItem" value= {name}>
    {name}
  </option>
);

export default SelectOptionItem;
