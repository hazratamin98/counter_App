import React from "react"
import { useState } from "react"

const Counter = () => {
  const handleOnchange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState("")

  return (
    <div className="counter_wrapper">
      <h1>Counter</h1>
      <div>
        <textarea
          // value={text}
          onChange={handleOnchange}
          placeholder="start typing"
        ></textarea>
      </div>
      <div className=" result_wrapper ">
        <h2> words : {text.toString().split(" ").length}</h2>
        <h2> Character : {text.length} </h2>
      </div>
      <div className="text_wrapper">
        <h3>Text Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Counter
