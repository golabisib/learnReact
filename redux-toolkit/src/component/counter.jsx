import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  selectCounter,
} from "../features/counter/counterSlice";

function Counter() {
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
    </div>
  );
}

export default Counter;
