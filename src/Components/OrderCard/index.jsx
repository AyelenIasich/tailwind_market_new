import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

function OrderCard(props) {

  const { id, title, images, price } = props;
  const deleteProduct = () => {
    console.log("eliminar producto");
  };

  return (
    <div className="flex justify-between items-center shadow-md mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            src={Array.isArray(images) ? images[0] : images}
            alt={title}
            className="w-full h-full rounded-lg object-cover"
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2 pe-2">
        <p className="text-lg font-medium">$ {price}</p>
        <XMarkIcon
          className="size-6 text-slate-600  cursor-pointer"
          onClick={deleteProduct}
        />
      </div>
    </div>
  );
}

export default OrderCard;
