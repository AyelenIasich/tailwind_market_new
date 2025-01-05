import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";
import { apiUrl } from "../../api";
import ProductsList from "../../Components/ProductsList";
import CardSkeleton from "../../Components/CardSkeleton";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`);
        if (!response.ok) {
          console.error("Error: ", response.status);
          return;
        }
        const data = await response.json();
        setItems(data);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ProductDetail />

      <ProductsList
        loading={loading}
        products={items}
        onLoading={() =>
          Array.from({ length: 8 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))
        }
      >
        {(product) => <Card key={product.id} {...product} />}
      </ProductsList>
    </>
  );
}

export default Home;
