import React, {useContext} from "react";
import {ShoppingCardContext} from "../../Context/index";

function Card({ category, price, title, images }) {
  const context = useContext(ShoppingCardContext);

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow-md">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg texte-black text-xs m-2 px-2 py-1">
          {category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg bg-slate-100"
          src={Array.isArray(images) ? images[0] : images}
          alt={title}
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white h-6 w-6 rounded-full m-2 pb-2 pt-1 px-2 font-medium"
          onClick={() => context.setCount(context.count + 1)}
        >
          +
        </div>
      </figure>
      <p className="flex justify-between px-2">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  );
}

export default Card;
