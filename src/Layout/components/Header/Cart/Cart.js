import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { IconButton, Stack } from "@mui/material";
import styles from "./style.module.scss";
export default function Cart() {
  return (
    <Stack className={styles.Stack}>
      <IconButton aria-label="cart">
        <ShoppingBagIcon className={styles.iconCart} />
      </IconButton>
    </Stack>
  );
}

// PaperProps={{ classes: { root: styles.DialogRoot } }}
