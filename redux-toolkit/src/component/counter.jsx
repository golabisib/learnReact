import { useSelector } from "react-redux";

function Counter() {
  const counter = useSelector((store) => store.counter.counterValue);
  return (
    <div>
      counter
      <h2>counter is {counter}</h2>
    </div>
  );
}

export default Counter;
