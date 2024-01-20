'use client'

import { urlFor } from "@/app/lib/sanity";
import Image from "next/image"; 
import Link from "next/link";
import { CgEye, CgShoppingBag } from 'react-icons/cg';

const Bike = ({ bike }) => {

  const popularBikeCat = bike.categories.find((bike) => bike.name === 'popular');
 
  return (
    <div className="group">
      <div className="border h-[328px] mb-5 p-4 overflow-hidden relative">
        <div className="bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all duration-300
        flex justify-center items-center"
        >
          {/* badge */}
        </div>
      </div>
    </div>
  )
}

export default Bike