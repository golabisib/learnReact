import { useRef } from "react"


function RefComponent() {
    const number = useRef(0);
    console.log(number)

    const clickHandler = (number) => {
        number.current = 5;
    }
    return (
        <div>
        <button type="button" onClick={clickHandler}>+</button>
    </div>
  )
}

export default RefComponent
