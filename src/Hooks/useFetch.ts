import { useState } from "react"

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:8000/products')
    const data = await res.json()

    return {
        props: { products: data}
    }
}

export const Products = ({products}: any) => {
    const [items, setItems] = useState(products)
}