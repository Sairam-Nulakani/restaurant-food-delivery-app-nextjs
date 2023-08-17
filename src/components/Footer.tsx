import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-5 md:h-4 p-6 lg:p-4 xl:p-8 text-white flex items-center justify-between bg-red-500">
      <Link href="/" className="font-bold text-2xl">
        King of Kitchens
      </Link>
      <p>All Rights Reserved</p>
    </div>
  );
};

export default Footer;
