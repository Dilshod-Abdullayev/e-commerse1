import React from "react";
import { Select } from "antd";
const { Option } = Select;
const SelectLang = () => {
  const handleChange = (value) => {
    // console.log(`Selected: ${value}`);
  };

  return (
    <Select defaultValue="option1" onChange={handleChange}>
      <Option value="option1">o`z</Option>
      <Option value="option2">уз</Option>
      <Option value="option3">eng</Option>
    </Select>
  );
};

export default SelectLang;
