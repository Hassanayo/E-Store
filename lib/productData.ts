import { useState } from "react";

export async function ProductsData() {
    const [isPending, setIsPending] = useState(true)
    const res = await fetch(
        "https://storefront-844a2-default-rtdb.firebaseio.com/products.json"
      )
        .then((res) => {
            setIsPending(false)
          return res.json();
          
        })
        .then((data) => {
          return data;
        })
        .catch((err) => {
          console.log(err)
          throw new Error("an error occured");
          
          
        });
        return {
            props: { products: res },
          };
}