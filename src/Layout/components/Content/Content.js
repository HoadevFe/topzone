import SliderCommon from "~/components/slideCommon/SliderCommon";
import {
  DataContent,
  titleAccsessory,
  titleIpad,
  titleIphone,
  titleMac,
  titleSound,
  titleWatch,
} from "./Data";
function Content() {
  // const titleIphone = "iPhone";
  // const titleMac = "Mac";
  // const titleiPad = "iPad";
  // const titleWatch = "WATCH";
  // const titleSound = "Âm thanh";
  // const titleAccesory = "Phụ kiện";
  // const titleTekZone = "TekZone";

  return (
    <>
      <SliderCommon
        slidesToShow={4}
        slidesToScroll={4}
        title={titleIphone}
        data={DataContent}
      />
      <SliderCommon
        slidesToShow={4}
        slidesToScroll={4}
        title={titleMac}
        data={DataContent}
      />
      <SliderCommon
        slidesToShow={4}
        slidesToScroll={4}
        title={titleIpad}
        data={DataContent}
      />
      <SliderCommon
        slidesToShow={4}
        slidesToScroll={4}
        title={titleWatch}
        data={DataContent}
      />
      <SliderCommon
        slidesToShow={4}
        slidesToScroll={4}
        title={titleSound}
        data={DataContent}
      />
      <SliderCommon
        slidesToShow={4}
        slidesToScroll={4}
        title={titleAccsessory}
        data={DataContent}
      />
      {/* <SliderCommon
        slidesToShow={3}
        slidesToScroll={3}
        title={titleTekZone}
        data={DataContent}
      /> */}
    </>
  );
}

export default Content;
