import { useEffect, useState } from "react"


function Photos() {
    const [isShow, setInShow] = useState(false);
    const [text, setText] = useState("");
    useEffect( () => {
        console.log("golabi") //useEffect is executed twice because react wants to make sure useEffect should be executed.(in dev mode)
    },[])
    const clickHandler = () => {
        setInShow ( (isShow) => !isShow);
        setText("newText");
    }
  return (
    <div>
        <h1>Botostart</h1>
        {isShow && <h3>{text}</h3>}
        <button onClick={clickHandler} type="button" >Toggle</button>
    </div>
  )
}

export default Photos
