import React, { useContext } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../Context/index";

function Card({ product }) {
  const { id, category, price, title, images } = product;

  const {
    count,
    setCount,
    openProductDetail,
    setProductToShow,
    setCartProducts,
    cartProducts,
    openCheckoutSideMenu,
    closeProductDetail,
    closeCheckoutSideMenu,
  } = useContext(ShoppingCardContext);

  const addItemToCart = (e, product) => {
    e.stopPropagation();
    setCount(count + 1);
    const newShoppingCart = [...cartProducts, product];
    setCartProducts(newShoppingCart);
    closeProductDetail();
    openCheckoutSideMenu();
  };

  const showProduct = (productDetail) => {
    setProductToShow(productDetail);
    closeCheckoutSideMenu();
    openProductDetail();
  };

  const renderIcon = (id) => {
    const isInCart = cartProducts.some((product) => product.id === id);
    const baseClasses = "absolute top-0 right-0 flex justify-center items-center h-6 w-6 rounded-full m-2 p-1 font-medium cursor-pointer";
    const icon = isInCart ? (
      <CheckIcon className="h-6 w-6 text-green-800" />
    ) : (
      <PlusIcon className="h-6 w-6 text-slate-600" />
    );
    const backgroundColor = isInCart ? "bg-green-100" : "bg-white";

    return (
      <div
        className={`${baseClasses} ${backgroundColor}`}
        onClick={!isInCart ? (e) => addItemToCart(e, product) : undefined}
      >
        {icon}
      </div>
    );
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow-md"
      onClick={() => showProduct(product)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg texte-black text-xs m-2 px-2 py-1">
          {category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg bg-slate-100"
          src={Array.isArray(images) ? images[0] : images}
          alt={title}
        />
        {renderIcon(id)}
      </figure>
      <p className="flex justify-between px-2">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  );
}

export default Card;
