import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShieldIcon from "@mui/icons-material/Shield";
import ReplayIcon from "@mui/icons-material/Replay";
import styles from "./styles.module.scss";

const DataSuvSlide = [
  {
    icon: <TaskAltIcon />,
    title: "Mẫu mã đa dạng, chính hãng",
  },
  {
    icon: <LocalShippingIcon />,
    title: "Giao hàng toàn quốc",
  },
  {
    icon: <ShieldIcon />,
    title: "Bảo hành có cam kết tới 12 tháng",
  },
  {
    icon: <ReplayIcon />,
    title: "Có thể đổi trả tại TGDĐ",
  },
];

const card = (
  <div className={styles.Container}>
    {DataSuvSlide.map((item, index) => (
      <CardContent sx={{ padding: "20px 60px !important" }} key={index}>
        <Typography
          sx={{ marginBottom: 0 }}
          className={styles.Typography}
          color="white"
          gutterBottom
        >
          {item.icon}
        </Typography>
        <Typography
          sx={{ marginBottom: 0 }}
          className={styles.Typography}
          color="white"
          gutterBottom
        >
          {item.title}
        </Typography>
      </CardContent>
    ))}
  </div>
);

export default function SuvSlide() {
  return (
    <Box sx={{ marginTop: "-4px", width: "100%" }}>
      <Card sx={{ background: "#333" }} variant="outlined">
        {card}
      </Card>
    </Box>
  );
}
