import { Outlet, Link } from "react-router-dom"
import NavBar from "../components/NavBar"


function AboutUs() {
  return (
    <div>
        <NavBar />
        <h1>About Us</h1>
        <ul>
            <li>
                <Link to="programmers" >Programmers</Link>{/* relative address */}
            </li>
            <li>
                <Link to="users" >Users</Link>{/* relative address */}
            </li>
        </ul>
        <Outlet />
    </div>
  )
}

export default AboutUs
