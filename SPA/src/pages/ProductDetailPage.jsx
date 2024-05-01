import { useParams } from "react-router-dom"

function ProductDetailPage() {
    const params = useParams();

  return (
    <div>
        Product {params.id}
    </div>
  )
}

export default ProductDetailPage

