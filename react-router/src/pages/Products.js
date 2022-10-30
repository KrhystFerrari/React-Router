
import { useParams } from "react-router-dom"

const Products = () => {
    // 4 - Rota Dinâmica
    const {id} = useParams();

  return <>
    <p>Id do produto: {id}</p>
  </>
}

export default Products
