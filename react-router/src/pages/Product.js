
import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

const Product = () => {
    // 4 - Rota Dinâmica
    const {id} = useParams();

    // 5 - Carregamento de dados individual
    const url = 'http://localhost:3000/products/' + id

    const {data: product, loading, error} = useFetch(url)

    console.log(product)

  return (
    <>
        <p>Id do produto: {id}</p>
        {error && <p>Ocorreu um erro...</p>}
        {loading && <p>Carregando...</p>}
        {product && (
          <div>
            <h1>{product.name}</h1>
            <p>R${product.price}</p>
          </div>
        )}
    </>

  )
}

export default Product
