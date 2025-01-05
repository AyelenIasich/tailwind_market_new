import React, { createContext, useState } from "react";

export const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({ children }) => {
  
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

  return (
    <ShoppingCardContext.Provider
      value={{
        count,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        setCount,
        openProductDetail,
        closeProductDetail,
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
};
