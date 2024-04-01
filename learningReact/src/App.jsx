import Test from "./ReactFragment.jsx";
import Header from "./header.jsx";
import CourseList from "./Courselist.jsx";
import Banner from "./Banner.jsx";
function App() {

  return (
      <>
        <Header />
        <Banner
        title="botostart"
        description="This is a programming website"
        numOfStudent={5000}
        />
        <p>React project</p>
        <Test />
        <CourseList />
    </>
  )
}
//41

export default App
