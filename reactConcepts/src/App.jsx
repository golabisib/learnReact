//component composition

// import Parent from "./Component/Parent"
import WellcomeMessage from "./WellcomeMessage"
import WellcomePage from "./WellcomePage"

function App() {


  return (
    <>
    <h1>React Concepts</h1>
    {/* <Parent /> */}
    <WellcomePage>
        <WellcomeMessage userName="Roozbeh"/>
    </WellcomePage>
    </>
  )
}

export default App
