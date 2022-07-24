export async function ProductsData() {
    const res = await fetch('http://localhost:8000/products')
    const data = await res.json()

    return data
}
async function fetchData() {
    const res = await fetch("http://localhost:8000/products");
    const data = await res.json();
    console.log(data);

    return data
  }