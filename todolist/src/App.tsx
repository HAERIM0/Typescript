import React from "react";
import "./App.css";
import Item from "./components/Item/Item";
function App() {
  return (
    <>
      <div className="mainContainer">
        <div className="appContainer">
          <Item text="할일 1" />
          <Item text="할일 2" />
          <Item text="완료한 일" completed />
          <input
            type="text"
            className="inputText"
            placeholder="내용을 입력후 엔터"
          />
        </div>
      </div>
    </>
  );
}

export default App;
