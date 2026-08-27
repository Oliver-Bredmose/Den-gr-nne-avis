import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import style from "./../Pages/Kategoriside.module.scss"
import { NavLink } from "react-router-dom"

export default function Ketegoriside() {
    const { slug } = useParams()

    const API_URL = `http://localhost:4000/api/products/category/${slug}`

    const [Kategori, setKategori] = useState([])
    const [error, setError] = useState(null)
    
    useEffect(() => {
        fetch(API_URL)
        .then(res => { 
                if (!res.ok) throw new Error(`HTTP ${res.status}`)
                return res.json()
            })
            .then(data => {
                setKategori(Array.isArray(data) ? data : data.products || [])
            })
            .catch(err => setError(err.message))
    }, [API_URL])

    return(
        <div className={style.Kategori}>

            {error && <p>Kunne ikke hente produkter: {error}</p>}
            {Kategori.length > 0 ? (
                <div>{Kategori.map(produkt => (
                    <article key={produkt.id}>
                        
                        <NavLink to={`/produkt/${produkt.slug}`}>
                        <img
                            src={produkt.image} alt={produkt.name || produkt.title}
                        />
                        </NavLink>
                        
                        <h2>{produkt.name || produkt.title}</h2>
                        <p>{produkt.description}</p>
                        <p>{produkt.price} kr.</p>
                    </article>
                ))}</div>
            ) : (
                !error && <p>Ingen produkter fundet</p>
            )}
        </div>
    )
}
