import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import { useState } from "react";

export default function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=10&page=2"
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {products.map((product) => {
          return (
            <Grid key={product.id} xs={3}>
              <ProductCard product={product} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
