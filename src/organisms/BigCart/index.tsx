import { FlexBox } from "../../atoms/Boxes";
import { useCart } from "../../Context/CartContext";
import DetailedCartItem from "../../molecules/DetailedCartItem";
import Invoice from "../../molecules/Invoice";
import { BigCartBodyContainer, BigCartContainer } from "./bigCartContainer.style";

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
  export function BigCartBody() {
    const {cart} = useCart()
    return (
      <BigCartBodyContainer >
        <BigCart/>
        <Invoice cart={cart} />
      </BigCartBodyContainer>
    )
  }