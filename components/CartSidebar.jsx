"use client"

import { useShoppingCart } from "use-shopping-cart"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"



const CartSidebar = () => {

  const {
    cartCount,
    cartDetails,
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
          <SheetTitle>My Shopping Cart({cartCount})</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default CartSidebar