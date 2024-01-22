import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { FaPlus , FaMinus, Fax } from 'react-icons/fa6';


const CartItem = ({item}) => {
  return (
    <div className="flex w-full justify-between mb-4 items-center h-[120px] border-b">
    {/* image */}
    <div className="w-[110px] h-[110px] relative">
      <Image 
        src={urlFor(item.images[0]).url()}
        fill
        priority
        sizes='(max-width: 110px) 110px, 110px'
        className="object-contain"
        alt=""
      />
    </div>
    </div>
  )
}

export default CartItem