import React from "react"
import { useState } from "react"

const Counter = () => {
  const handleOnchange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState(0)

  return (
    <div className="counter_wrapper">
      <h1>Counter</h1>
      <div>
        <textarea
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
    </div>
  )
}

export default Counter
