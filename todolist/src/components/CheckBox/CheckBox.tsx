import React from "react";
import "./CheckBox.css";

interface CheckBoxProps {
  checked?: boolean;
  onClick?(): void;
}

const CheckBox = ({ checked, onClick }: CheckBoxProps) => {
  return (
    <>
      <div className="container" onClick={onClick}>
        <div className="checkIcon">{checked && "V"}</div>
      </div>
    </>
  );
};

export default CheckBox;
