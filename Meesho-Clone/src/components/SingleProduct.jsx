import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SingleProduct = ({ onSelectItem }) => {
  const [productInfo, setProductInfo] = useState({});
  const params = useParams();
  // console.log(params);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${params.id}`
      );
      const data = await response.json();
      // console.log(data);
      setProductInfo(data);
    };
    fetchData();
  }, [params.id]);

  return (
    <Box sx={{ flexGrow: 1, margin: "2vh 10vw" }}>
      <Grid container spacing={2}>
        <Grid xs={5}>
          <Card
            sx={{
              maxWidth: 445,
              margin: "auto",
            }}
          >
            <CardMedia
              sx={{ height: 500 }}
              image={productInfo.image}
              title="single Product Image"
            />
          </Card>
          <div className="buttons">
            <Button
              variant="outlined"
              sx={{
                color: "rgb(159, 32, 137)",
                border: "1px solid rgb(159, 32, 137)",
              }}
              onClick={() => {
                onSelectItem(productInfo);
              }}
            >
              <ShoppingCartOutlinedIcon sx={{ marginRight: 1 }} />
              Add to Cart
            </Button>
            <Button
              variant="contained"
              sx={{ background: "rgb(159, 32, 137)" }}
            >
              Buy Now
            </Button>
          </div>
        </Grid>

        <Grid xs={7}>
          <Item sx={{ background: "blue" }}>
            <Card>
              <CardContent className="card-css">
                <Typography gutterBottom variant="body2" color="text.secondary">
                  {productInfo.title}
                </Typography>
                <span className="span-card">
                  <CurrencyRupeeIcon sx={{ marginRight: "-5px" }} />
                  <Typography variant="h6">{productInfo.price}</Typography>
                  <Typography
                    gutterBottom
                    variant="caption"
                    color="text.secondary"
                  >
                    onwards
                  </Typography>
                </span>
                <Typography
                  gutterBottom
                  variant="caption"
                  color="text.secondary"
                  className="delivery"
                >
                  Free Delivery
                </Typography>
                <span className="span-card">
                  <span className="reviews">
                    {productInfo?.rating?.rate}
                    <StarRateRoundedIcon />
                  </span>
                  <Typography
                    gutterBottom
                    variant="caption"
                    color="text.secondary"
                  >
                    {productInfo?.rating?.count} reviews
                  </Typography>
                </span>
              </CardContent>
            </Card>
            <Card className="cardText">
              <Typography variant="h5" color="text.primary">
                Product Details
              </Typography>
              <br />
              <Typography gutterBottom variant="body2" color="text.secondary">
                Name: {productInfo.title}
              </Typography>
              <Typography gutterBottom variant="body2" color="text.secondary">
                Description: {productInfo.description}
              </Typography>
              <Typography gutterBottom variant="body2" color="text.secondary">
                Category: {productInfo.category}
              </Typography>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SingleProduct;
