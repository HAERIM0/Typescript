import React, { useState } from "react";
import CheckBox from "../CheckBox/CheckBox";
import DeleteButton from "../DeleteButton/DeleteButton";
import Text from "../Text/Text";

interface ItemProps {
  completed?: boolean;
  text: string;
}

const Item = ({ completed, text }: ItemProps) => {
  return (
    <>
      <div className="intemContainer">
        <CheckBox checked={completed} />
        <Text completed={completed}>{text}</Text>
      </div>
    </>
  );
};

export default Item;
