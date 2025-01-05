import React, { useContext } from "react";
import { ShoppingCardContext } from "../../Context/index";

function ChartItem() {
  const { count } = useContext(ShoppingCardContext);

  return <li>🛒 {count}</li>;
}

export default ChartItem;
