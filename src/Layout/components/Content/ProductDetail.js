import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DataContent } from "./Data";

function ProductDetail() {
  const location = useLocation().pathname.split("/")[2];
  const productId = Number(location);
  const thisProduct = DataContent.find((item) => item.id === productId);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Grid
      style={{
        margin: "100px auto",
      }}
    >
      <Card sx={{ maxWidth: 500, margin: "auto" }}>
        <CardMedia
          component="img"
          height="100%"
          image={thisProduct.thumbnail}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {thisProduct.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {thisProduct.new}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {thisProduct.price}
            <strike style={{ marginLeft: "16px" }}>{thisProduct.strike}</strike>
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={{ background: "#0000ff94", color: "#1a1717" }}>
            Thêm vào giỏ hàng
          </Button>
          <Button sx={{ background: "#0000ff94", color: "#1a1717" }}>
            Mua ngay
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProductDetail;
