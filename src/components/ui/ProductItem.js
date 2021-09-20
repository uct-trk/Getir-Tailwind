import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const ProductItem = ({ product }) => {
  return (
    <div className="bg-white relative flex flex-col items-center p-3 gap-y-1 text-center text-sm font-semibold">
      <button className="absolute top-3 right-3 flex items-center justify-center border border-gray-200 rounded-lg shadow-md hover:bg-brand-color hover:text-brand-yellow transition-colors text-brand-color w-8 h-8 cursor-pointer">
        <AiOutlinePlus />
      </button>
      <img src={product.image} alt={product.title} />
      <div className="text-sm font-semibold text-brand-color">
        {product.price} TL
      </div>
      <div className="text-sm font-semibold text-gray-900">{product.title}</div>
      <div className="text-gray-500">{product.alt}</div>
    </div>
  );
};

export default ProductItem;
