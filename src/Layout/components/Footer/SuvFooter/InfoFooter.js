import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from "./styles.module.scss";
import Bct from "../SuvFooter/image/bct.png";
import Dmca from "../SuvFooter/image/dmca.png";
import Ncsc from "../SuvFooter/image/ncsc.png";

function InfoFooter() {
  return (
    <>
      <Box sx={{ margin: 0 }} className={styles.containerInfo}>
        <Box sx={{ fontSize: "15px", marginBottom: "16px" }}>
          <Typography sx={{ color: "white", paddingBottom: "10px" }}>
            Tổng đài
          </Typography>
          <Typography
            display="block"
            variant="p"
            sx={{ color: "#e5e5e5", paddingBottom: "10px" }}
          >
            <span style={{ display: "inline-block", width: "78px" }}>
              Mua hàng:
            </span>
            <a style={{ marginRight: "4px" }} href="1900.9696.42">
              1900.9696.42
            </a>
            (7:30 - 22:00)
          </Typography>
          <Typography
            display="block"
            variant="p"
            sx={{ color: "#e5e5e5", paddingBottom: "10px" }}
          >
            <span style={{ display: "inline-block", width: "78px" }}>
              CSKH:
            </span>
            <a style={{ marginRight: "4px" }} href="1900.9696.42">
              1900.9696.42
            </a>
            (7:30 - 22:00)
          </Typography>
          <Typography
            display="block"
            variant="p"
            sx={{ color: "#e5e5e5", paddingBottom: "10px" }}
          >
            <span style={{ display: "inline-block", width: "78px" }}>
              Kỹ thuật:
            </span>
            <a style={{ marginRight: "4px" }} href="1900.9696.42">
              1900.9696.42
            </a>
            (7:30 - 22:00)
          </Typography>
          <Typography
            variant="p"
            sx={{ color: "#e5e5e5", paddingBottom: "10px" }}
          >
            Kết nối với chúng tôi
          </Typography>
        </Box>
        <Box sx={{ fontSize: "15px", marginBottom: "16px" }}>
          <Typography sx={{ color: "white", paddingBottom: "10px" }}>
            Hệ thống cửa hàng
          </Typography>
          <Typography
            display="block"
            variant="p"
            sx={{ color: "#e5e5e5", paddingBottom: "10px" }}
          >
            Xem 93 cửa hàng
          </Typography>
          <Typography
            display="block"
            variant="p"
            sx={{ color: "#e5e5e5", paddingBottom: "10px" }}
          >
            Nội quy cửa hàng
          </Typography>
          <Typography
            display="block"
            variant="p"
            sx={{ color: "#e5e5e5", paddingBottom: "10px" }}
          >
            Chất lượng phục vụ
          </Typography>
          <Typography
            display="block"
            variant="p"
            sx={{ color: "#e5e5e5", paddingBottom: "10px" }}
          >
            Chính sách bảo hành & đổi trả
          </Typography>
        </Box>
        <Box sx={{ fontSize: "15px", marginBottom: "16px" }}>
          <Typography sx={{ color: "white", paddingBottom: "10px" }}>
            Hỗ trợ khách hàng
          </Typography>
          <Typography
            display="block"
            variant="p"
            sx={{ color: "#e5e5e5", paddingBottom: "10px" }}
          >
            Điều kiện giao dịch chung
          </Typography>
          <Typography
            display="block"
            variant="p"
            sx={{ color: "#e5e5e5", paddingBottom: "10px" }}
          >
            Hướng dẫn mua hàng online
          </Typography>
          <Typography
            display="block"
            variant="p"
            sx={{ color: "#e5e5e5", paddingBottom: "10px" }}
          >
            Chính sách giao hàng
          </Typography>
          <Typography
            display="block"
            variant="p"
            sx={{ color: "#e5e5e5", paddingBottom: "10px" }}
          >
            Hướng dẫn thanh toán
          </Typography>
        </Box>
        <Box sx={{ fontSize: "15px", marginBottom: "16px" }}>
          <Typography sx={{ color: "white", paddingBottom: "10px" }}>
            Về thương hiệu Topzone
          </Typography>
          <Typography
            display="block"
            variant="p"
            sx={{ color: "#e5e5e5", paddingBottom: "10px" }}
          >
            Tích điểm Quà tặng VIP
          </Typography>
          <Typography
            display="block"
            variant="p"
            sx={{ color: "#e5e5e5", paddingBottom: "10px" }}
          >
            Giới thiệu TopZone
          </Typography>
          <Typography
            display="block"
            variant="p"
            sx={{ color: "#e5e5e5", paddingBottom: "10px" }}
          >
            Bán hàng doanh nghiệp
          </Typography>
          <Typography
            display="block"
            variant="p"
            sx={{ color: "#e5e5e5", paddingBottom: "10px" }}
          >
            Chính sách bảo mật thông tin
          </Typography>
        </Box>
        <Box sx={{ fontSize: "15px", marginBottom: "16px" }}>
          <Typography sx={{ color: "white", paddingBottom: "10px" }}>
            Trung tâm bảo hành TopCare
          </Typography>
          <Typography
            display="block"
            variant="p"
            sx={{ color: "#e5e5e5", paddingBottom: "10px" }}
          >
            Giới thiệu TopCare
          </Typography>
        </Box>
      </Box>
      <div className={styles.certify}>
        <div className={styles.certifyText}>
          <p className={styles.text}>
            © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở
            KH & ĐT TP.HCM cấp ngày 02/01/2007
          </p>
          <p className={styles.text}>
            Địa chỉ: 128 Trần Quang Khải, P. Tân Định, Q.1, TP. Hồ Chí Minh.
            Điện thoại: 028 38125960.
          </p>
        </div>
        <div className={styles.certifyImage}>
          <div className={styles.imgBct}>
            <img src={Bct} alt="btc" />
          </div>
          <div className={styles.imgNcsc}>
            <img src={Ncsc} alt="btc" />
          </div>
          <div className={styles.imgDmca}>
            <img src={Dmca} alt="btc" />
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoFooter;
