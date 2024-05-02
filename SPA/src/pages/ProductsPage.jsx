import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom"

const Products = [
    {id: 1 , name: "Product 1"},
    {id: 2 , name: "Product 2"},
    {id: 3 , name: "Product 3"},
    {id: 4 , name: "Product 4"},
]

function ProductsPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    //get:
    const sortBy = searchParams.get("sortBy");
    const order = searchParams.get("order");
    console.log(searchParams.toString())
    console.log({sortBy, order})

    //set:
    const sortHandler = () => {
        setSearchParams({sortBy: "price", order: "asc"})
    };

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
    </div>
  )
}

export default ProductsPage
