import React, { createContext, useState } from "react";

export const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({ children }) => {
  // Shopping Cart - Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping Cart - Increment quantity
  const [count, setCount] = useState(0);

  // Product Detail - Show Product detail
  const [productToShow, setProductToShow] = useState({});

  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  };
  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  // Checkout Side Menu - Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(true);
  };
  const closeCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(false);
  };

  return (
    <ShoppingCardContext.Provider
      value={{
        count,
        isProductDetailOpen,
        productToShow,
        cartProducts,
        isCheckoutSideMenuOpen,
        setCartProducts,
        setProductToShow,
        setCount,
        openProductDetail,
        closeProductDetail,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
};
