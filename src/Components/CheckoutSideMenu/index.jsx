import React, { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../Context/index";
import OrderCard from "../OrderCard";
import "./styles.css";

function CheckoutSideMenu() {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts } =
    useContext(ShoppingCardContext);
  console.log("cartProduct, ", cartProducts.length);

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed z-10 right-0 bg-white border-slate-400 rounded-md  shadow-xl `}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon
          className="size-6 text-slate-600  cursor-pointer"
          onClick={closeCheckoutSideMenu}
        />
      </div>
      <div className="px-6">
        {cartProducts.map((cartProduct) => (
          <OrderCard {...cartProduct} key={cartProduct.id}/>
        ))}
      </div>
    </aside>
  );
}

export default CheckoutSideMenu;
