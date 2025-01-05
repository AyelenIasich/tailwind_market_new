import React, { useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../Context/index";

function ChartItem() {
  const { count } = useContext(ShoppingCardContext);

  return (
    <li className="flex items-center justify-center ">
      <ShoppingBagIcon className="h-6 w-6 text-slate-600 me-2" />
      <div>{count}</div>
    </li>
  );
}

export default ChartItem;
