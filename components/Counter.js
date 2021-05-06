import { useState } from 'react'

const Counter = () => {
  const initialState = Math.floor(Math.random() * 10) + 1
  const [count, setCount] = useState(initialState)
  return (
    <>
      <div>
        <p>現在のカウントは {count} です。</p>
        <button onClick={() => setCount(prevState => prevState + 1)}>+1</button>
        <button onClick={() => setCount(prevState => prevState - 1)}>-1</button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>
    </>
  )

}
export default Counter