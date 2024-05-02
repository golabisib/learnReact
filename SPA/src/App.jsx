import {BrowserRouter ,Routes , Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import AboutUs from "./pages/AboutUs";
import PageNotFound from "./pages/404";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Programmers from "./components/Programmers";



function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/landing" element={<Navigate to="/" replace />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />


            <Route path="/about-us" element={<AboutUs />}>
                <Route path="programmers" element={<Programmers />} />{/*Nested Route*/}
                <Route path="users" element={<div>Users</div>} />{/*Nested Route*/}
            </Route>

            <Route path="/*" element={<PageNotFound />}/>
        </Routes>
    </BrowserRouter>
  )
}//in HomePage component we could use "index" instead "path="/""

export default App
