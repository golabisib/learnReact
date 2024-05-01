import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div>
        <Link to="/courses">Courses</Link>
        <hr />
        <Link to="/about-us">About Us</Link>
    </div>
  )
}

export default HomePage
