import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Stack } from "@mui/material";
import styles from "./styles.module.scss";
export default function Search() {
  return (
    <Stack className={styles.Stack}>
      <IconButton aria-label="search">
        <SearchIcon className={styles.iconSearch} />
      </IconButton>
    </Stack>
  );
}
