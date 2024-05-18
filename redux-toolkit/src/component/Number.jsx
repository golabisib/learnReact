import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectNumber } from "../features/number/numberSlice";



function NumberComp() {
  const number = useSelector(selectNumber);
  const dispatch = useDispatch();
  return (
    <div>
      counter
      <h2>number is {number}</h2>
      <button type="button" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch(decrement())}>
        Decrement
      </button>

    </div>
  );
}

export default NumberComp;
