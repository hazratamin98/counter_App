import React from "react";
import { useState } from "react";

const Counter = () => {
  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState(0);

  return (
    <div className="counter_wrapper">
      <h1>Counter</h1>
      <div>
        <textarea
          value={text}
          onChange={handleOnchange}
          placeholder="start typing"
        ></textarea>
      </div>
      <div>
        <h2>
          {" "}
          {text.split(" ").length} words {text.length} Character{" "}
        </h2>
      </div>
      <h3>Text Preview</h3>
      <p>{text}</p>
    </div>
  );
};

export default Counter;
