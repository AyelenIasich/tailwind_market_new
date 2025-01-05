import React from "react";
import Layout from "../Layout";

function ProductsList(props) {
  const renderFunc = props.children || props.render;
  return (
    <Layout>
      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-screen-lg px-4 ">
          {props.loading && props.onLoading()}

          {!props.loading &&
            props.products.map((product) => renderFunc(product))}
        </div>
      </div>
    </Layout>
  );
}

export default ProductsList;
