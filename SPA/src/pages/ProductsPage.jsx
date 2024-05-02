import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const Products = [
    {id: 1 , name: "Product 1"},
    {id: 2 , name: "Product 2"},
    {id: 3 , name: "Product 3"},
    {id: 4 , name: "Product 4"},
]

function ProductsPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    //get:
    const sortBy = searchParams.get("sortBy");
    const order = searchParams.get("order");

    //set:
    const sortHandler = () => {
        setSearchParams({sortBy: "price", order: "asc"})
    };

    const homeHandler = () => {
        navigate("/");
        // in navigate(A)
        // A = -1 -> one page prev
        // A = +1 -> one page next
        // in A ("/", { replace: true }) catch is clear and prev is deleted
    }

  return (
    <div>
        <NavBar />
        <button onClick={sortHandler}>sort</button>
        <ul>
            {Products.map( (product) => (
            <li key={product.id}>
                <Link to={`/products/${product.id}`} >{product.name}</Link>
            </li>
        ))}
        </ul>
        <button onClick={homeHandler}>Go Home</button>
    </div>
  )
}

export default ProductsPage
