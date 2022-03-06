import React from "react"
import { useState } from "react"

const Counter = () => {
  const [text, setText] = useState("")

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  function wordCount() {
    let str = { text }.trim()

    let arr = str.split(" ")
    let i
    let count = 0

    for (i = 0; i < arr.length; i++) {
      if (arr[i] != " " && arr[i] != "") count++
    }
    return count
  }

  return (
    <div className="counter_wrapper">
      <h1>Counter</h1>
      <div>
        <textarea
          // value={text}
          onChange={handleOnChange}
          placeholder="start typing"
        ></textarea>
      </div>
      <div className=" result_wrapper ">
        <h2 className="word_wrapper">
          words : {wordCount[text]}
          {/* words <br /> {text.toString().split(" ").length - 1} */}
        </h2>
        <h2 className="character_wrapper">
          {" "}
          Character <br /> {text.length}{" "}
        </h2>
      </div>
      <div className="text_wrapper">
        <h3>Text Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Counter
