import React from "react";

const SelectOption = ({name}) => (
  <option className="selectOptionItem" value= {name}>
    {name}
  </option>
);

export default SelectOption;
