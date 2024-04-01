// events
function Counter() {
    const increaseHandler = () => console.log("increase");

    return (
    <>
    <h1>counter</h1>
    <button onClick={increaseHandler}>increase</button>
    </>
  )
}
// or:
// just <button onClick={() => console.log("increase")}>increase</button>
// without any external function
export default Counter
