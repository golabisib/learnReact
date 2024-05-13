import { useRef } from "react"


function RefComponent() {
    const number = useRef(0);
    console.log("render")

    const clickHandler = () => {
        number.current = number.current + 5;
        console.log(number)
    }
    return (
        <div>
        <button type="button" onClick={clickHandler}>+</button>
    </div>
  )
}

export default RefComponent
