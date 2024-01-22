"use client"

import { useShoppingCart } from "use-shopping-cart"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { ScrollArea } from "./ui/scroll-area"
import CartItem from "./CartItem"



const CartSidebar = () => {

  const {
    cartCount,            // Número de ptos en el carrito
    cartDetails,          // Objeto con pares key-value, donde las keys son IDs del producto en el carrito y el value son los details de cada entry
    shouldDisplayCart,    // Boolean 
    handleCartClick,      // Toggles shouldDisplayCart between true and false.
    totalPrice,
  } = useShoppingCart()

  return (
    <Sheet 
      open={shouldDisplayCart}
      onOpenChange={() => handleCartClick()}  
    >
      <SheetContent>
        <SheetHeader>
          <SheetTitle
            className="text-left mb-12"
          >
            My Shopping Cart({cartCount})
          </SheetTitle>
        </SheetHeader>
        <>
          {cartCount === 0 
            ? <div>Your cart is empty</div> 
            : <ScrollArea className="h-[70vh] xl:h-[74vh] pr-4 mb-4">
              { cartDetails && Object.entries(cartDetails).map(([key, item]) => (
                <CartItem item={item} key={key} />
              ))}
            </ScrollArea>
          }
        </>
      </SheetContent>
    </Sheet>
  )
}

export default CartSidebar