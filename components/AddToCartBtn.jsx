"use client"

import { useShoppingCart } from "use-shopping-cart"


const AddToCartBtn = ({ btnStyles, text, icon, id, currency, name, description, images, price }) => {

  const { addItem } = useShoppingCart();

  const bike = {
    id: id,
    currency: currency,
    name: name,
    deription: description,
    images: images,
    price: price
  };

  return (
    <button 
      className={`${btnStyles}`}
      onClick={() => addItem(bike)}  
    >
      <div>
        {text}
      </div>
      <div>
        {icon}
      </div>
    </button>
  )
}

export default AddToCartBtn