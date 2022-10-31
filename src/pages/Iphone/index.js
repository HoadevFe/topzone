import { useEffect } from "react";
import styles from "./styles.module.scss";
function IphonePage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className={styles.container}>
      <h2>Iphone</h2>
    </div>
  );
}

export default IphonePage;
