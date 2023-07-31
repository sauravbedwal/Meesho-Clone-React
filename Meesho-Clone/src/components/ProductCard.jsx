import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// import "../App.css";

import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const cardClick = () => {
    // console.log(product.id);
    navigate(`/single-product/${product.id}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }} onClick={cardClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          // width="auto"
          image={product.image}
          alt="t-shirt"
        />
        <CardContent className="card-css">
          <Typography gutterBottom variant="body2" color="text.secondary">
            {product.title.slice(0, 25)}
          </Typography>
          <span className="span-card">
            <CurrencyRupeeIcon sx={{ marginRight: "-5px" }} />
            <Typography variant="h6">{product.price}</Typography>
            <Typography gutterBottom variant="caption" color="text.secondary">
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
              {product.rating.rate}
              <StarRateRoundedIcon
                sx={{ fontSize: "17px", marginLeft: "7px" }}
              />
            </span>
            <Typography gutterBottom variant="caption" color="text.secondary">
              {product.rating.count} Reviews
            </Typography>
          </span>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
