import { useSelector } from "react-redux";
import { selectCounter } from "../features/counter/counterSlice";

function Counter() {
  const counter = useSelector(selectCounter);
  return (
    <div>
      counter
      <h2>counter is {counter}</h2>
    </div>
  );
}

export default Counter;
