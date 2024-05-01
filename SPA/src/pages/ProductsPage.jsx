import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"

const Products = [
    {id: 1 , name: "Product 1"},
    {id: 2 , name: "Product 2"},
    {id: 3 , name: "Product 3"},
    {id: 4 , name: "Product 4"},
]

function ProductsPage() {
  return (
    <div>
        <NavBar />
        <ul>
            {Products.map( (product) => (
            <li key={product.id}>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default ProductsPage
