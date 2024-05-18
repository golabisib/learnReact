import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCounter,
} from "../features/counter/counterSlice";
import { useState } from "react";

function Counter() {
  const [value, setValue] = useState(1);
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();
  return (
    <div>
      counter
      <h2>counter is {counter}</h2>
      <button type="button" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button" onClick={() => dispatch(incrementByAmount(+value))}>
        IncrementByAmount
      </button>
    </div>
  );
}

export default Counter;
