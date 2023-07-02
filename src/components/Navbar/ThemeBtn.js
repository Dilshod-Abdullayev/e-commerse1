import React from "react";
import { Button } from "antd";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
export default function ThemeBtn() {
  return (
    <Button
      type="primary"
      style={{ background: "#274c5b" }}
      icon={<BsFillSunFill />}
    />
  );
}
