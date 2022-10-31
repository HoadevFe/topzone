import AppleIcon from "@mui/icons-material/Apple";
import { Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../Header/Logo/logo-video.png";
import styles from "./styles.module.scss";
import InfoFooter from "./SuvFooter/InfoFooter";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#101010",
      }}
    >
      <Box sx={{ padding: "0 30px" }} component="div">
        <div className={styles.headFooter}>
          <Link className={styles.linkHeader} to="/">
            <span>
              <img className={styles.logo} src={logo} alt="logo" />
            </span>
          </Link>
          <Divider
            sx={{
              background: "#3b3b3b",
              marginLeft: "16px",
              marginRight: "16px",
            }}
            orientation="vertical"
            variant="middle"
            flexItem
          />
          <AppleIcon
            sx={{
              display: { md: "flex" },
              marginTop: "8px",
              color: "white",
            }}
          />
        </div>
        <InfoFooter />
      </Box>
    </Box>
  );
}

export default Footer;
