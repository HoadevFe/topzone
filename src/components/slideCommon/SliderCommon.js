import Slider from "react-slick";
import styles from "./styles.module.scss";
import AppleIcon from "@mui/icons-material/Apple";

// import "./slick.module.css";
// import "./slick-theme.module.css";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function SliderCommon(props) {
  const { title, data, slidesToShow, slidesToScroll } = props;
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div style={{ marginTop: "80px" }}>
      <Link className={styles.link} to={title.link}>
        <h1 style={{ marginBottom: "50px", fontSize: "40px" }}>
          {title.icon ? (
            // <span style={{ marginRight: "8px" }}>
            <AppleIcon sx={{ marginRight: "8px" }} />
          ) : (
            // </span>
            ""
          )}
          {title.title}
        </h1>
      </Link>

      <Slider className={styles.slider} {...settings}>
        {data.map((item) => (
          <Card
            key={item.id}
            className={styles.Card}
            sx={{
              width: "90% !important",
              borderRadius: "16px",
              background: "#323232",
            }}
          >
            <Link className={styles.link} to={item.link}>
              <CardActionArea>
                <div
                  style={{
                    marginTop: "1rem",
                    height: "1rem",
                    textAlign: "start",
                    paddingLeft: "1rem",
                  }}
                >
                  <span className={item.new ? styles.newProduct : ""}>
                    {item.new}
                  </span>
                </div>
                <CardMedia
                  className={styles.cardMedia}
                  sx={{
                    height: "300px",
                    objectFit: "scale-down",
                  }}
                  component="img"
                  image={item.thumbnail}
                  alt={item.title}
                />
                <CardContent sx={{ paddingTop: "8px" }}>
                  <Typography
                    sx={{ color: "white", margin: 0, fontSize: "15px" }}
                    gutterBottom
                    variant="h3"
                    component="div"
                  >
                    {item.name}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography
                    sx={{ color: "white", fontSize: "18px", fontWeight: 700 }}
                    gutterBottom
                    variant="span"
                    component="span"
                  >
                    {item.price}
                  </Typography>
                  <Typography
                    sx={{ color: "white", fontSize: "15px" }}
                    gutterBottom
                    variant="span"
                    component="span"
                  >
                    <strike>{item.strike}</strike>
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "15px",
                      paddingLeft: "4px",
                    }}
                    gutterBottom
                    variant="span"
                    component="span"
                  >
                    {item.discount}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        ))}
      </Slider>
      <p>Lướt qua để xem sản phẩm</p>
    </div>
  );
}
