import React, { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../Context/index";
import "./styles.css";

function ProductDetail() {
  const { isProductDetailOpen, closeProductDetail, productToShow } =
    useContext(ShoppingCardContext);
  const { title, images, price, description } = productToShow;

  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } product-detail  flex-col fixed z-10 right-0 bg-white border-slate-400 rounded-md  shadow-xl `}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Product Detail</h2>
        <XMarkIcon
          className="size-6 text-slate-600  cursor-pointer"
          onClick={closeProductDetail}
        />
      </div>
      <div className="px-6">
        <figure>
          <img
            src={Array.isArray(images) ? images[0] : images}
            alt={title}
            className="w-full h-full rounded-lg"
          />
        </figure>
        <p className="flex flex-col py-3">
          <span className="font-medium text-2xl">$ {price}</span>
          <span className="font-medium text-md">{title}</span>
          <span className="font-light text-sm">{description}</span>
        </p>
      </div>
    </aside>
  );
}

export default ProductDetail;
