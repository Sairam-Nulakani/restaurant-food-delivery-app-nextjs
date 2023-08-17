import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartIcon = () => {
  return (
    <Link href="/cart" className="flex items-center justify-center">
      <div className="relative w-8 h-8 md:w-5 md:h-5 text-xl">
        <AiOutlineShoppingCart />
      </div>
      <span>Cart(4)</span>
    </Link>
  );
};

export default CartIcon;
