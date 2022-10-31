import Content from "~/Layout/components/Content/Content";
import Products from "~/Layout/components/Products/Products";
import SimpleSlider from "~/Layout/components/Slide/SimpleSlider";
import SuvSlide from "~/Layout/components/SubSlide/SuvSlide";
import styles from "./styles.module.scss";

function HomePage() {
  return (
    <div className={styles.container}>
      <SimpleSlider />
      <SuvSlide />
      <Products />
      <Content />
    </div>
  );
}

export default HomePage;
