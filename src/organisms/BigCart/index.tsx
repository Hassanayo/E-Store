import { useCart } from "../../Context/CartContext";
import DetailedCartItem from "../../molecules/DetailedCartItem";
import { BigCartContainer } from "./bigCartContainer.style";

export default function BigCart() {
  const {cart, handleDelete} = useCart()
    return (
      <BigCartContainer>
        {cart.map((product, index) => {
          return (
            <DetailedCartItem onDelete={() => handleDelete(index)} price={product.amount} name={product.productname} key={index}  source={product.img} id={index} />
          )
        })}
        
      </BigCartContainer>
    )
  }