import {BrowserRouter ,Routes , Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import AboutUs from "./pages/AboutUs";
import PageNotFound from "./pages/404";

function App() {


  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="*" element={<PageNotFound />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
