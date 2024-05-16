import { useLocalStorage } from "../hooks/useLocalStorage"
import { useTitle } from "../hooks/useTitle"



function CustomComponent() {

    useTitle("Custom Page")
    const [name, setName] = useLocalStorage("name", "")

  return (
    <div>
        <p>{name}</p>
        <input type="text" onChange={e => setName(e.target.value)} />
    </div>
  )
}

export default CustomComponent
