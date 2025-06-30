import { useState } from "react"


function Counter() {
    let [count, setCount] = useState(0);
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount((prev) => prev + 1 )}> + </button>
        <button onClick={() => setCount((prev) => prev - 1 )}> - </button>
    </div>
  )
}

export default Counter