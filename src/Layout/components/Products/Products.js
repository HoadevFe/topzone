import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { DataProduct } from "./Data";
import styles from "./styles.module.scss";

export default function Products() {
  return (
    <div className={styles.container}>
      {DataProduct.map((item) => (
        <Link
          key={item.id}
          className={styles.link}
          style={{ textDecoration: "none" }}
          to={item.link}
        >
          <Card
            className={styles.Card}
            sx={{
              maxWidth: "180px",
              borderRadius: "16px",
              background: "#323232",
              height: "100%",
            }}
          >
            <CardActionArea sx={{ height: "90%" }}>
              <CardMedia
                sx={{
                  margin: "16px",
                  width: "80%",
                  marginTop: "32px",
                  height: "60%",
                  objectFit: "scale-down",
                }}
                component="img"
                image={item.thumbnail}
                alt={item.title}
              />
              <CardContent>
                <Typography
                  sx={{ color: "white" }}
                  gutterBottom
                  variant="p"
                  component="div"
                >
                  {item.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      ))}
    </div>
  );
}
