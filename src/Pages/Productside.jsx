import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import style from "./Productside.module.scss"

export default function Productside() {
    
    const { slug } = useParams()

    const API_URL = `http://localhost:4000/api/products/${slug}`

    const [Products, setProducts] = useState([])
    const [error, setError] = useState(null)
    
    useEffect(() => {
        fetch(API_URL)
        .then(res => { 
                if (!res.ok) throw new e+rror(`HTTP ${res.status}`)
                return res.json()
            })
            .then(data => {
                console.log(data)
                setProducts(data)
            })
            .catch(err => setError(err.message))
    }, [API_URL])

    return(
        <div className={style.Productsdetails}>
            <img src={Products.image} alt="Product Billede" />
            <h1>{Products.name}</h1>
            <p>{Products.description}</p>
            <br />
            <p>{Products.price}</p>

        </div>
    )
}

