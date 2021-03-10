import React, { useState, useCallback, useRef } from 'react'
import Todo from '../react-use/use-reducer'

export default () => (
  <>
    <Counter />
    <Todo />
  </>
)

const ButtonPair = React.memo(({ onIncrement, onDecrement }) => (
  <>
    <button type="button" onClick={onIncrement}>
      Increment Counter
    </button>
    <button type="button" onClick={onDecrement}>
      Decrement Counter
    </button>
  </>
))

function Counter() {
  const [counter, setCounter] = useState(0)
  const incrementCounter = useCallback(() => setCounter(counter + 1), [counter])
  const decrementCounter = useCallback(() => setCounter(counter - 1), [counter])

  const inputEl = useRef(null)
  const [value, setValue] = useState(0)
  const handleChange = evt => {
    // evt.target.value === inputEl.current.value
    setValue(evt.target.value)
    // eslint-disable-next-line radix
    setCounter(parseInt(inputEl.current.value))
  }

  return (
    <div>
      <h2>{counter}</h2>
      <ButtonPair onIncrement={incrementCounter} onDecrement={decrementCounter} />
      <input ref={inputEl} type="number" onChange={handleChange} value={value} />
    </div>
  )
}
