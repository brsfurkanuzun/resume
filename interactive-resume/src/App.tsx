import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/swiper-bundle.css";

import About from "./components/About";
import Experience from "./components/Experience";
import Miscellaneous from "./components/Miscellaneous";
import ThemeSelector from "./components/ThemeSelector";
import Shape from "./components/Shape";

export default function App() {
  return (
    <div style={{ height: "100vh", overflow: "hidden", position: "relative" }}>
      <ThemeSelector />
      <Shape />

      <Swiper
        direction="horizontal"
        slidesPerView={1}
        style={{ width: "100vw", height: "100vh" }}
      >
        <SwiperSlide>
          <About />
        </SwiperSlide>
        <SwiperSlide style={{ width: "100vw", height: "100vh" }}>
          <Experience />
        </SwiperSlide>
        <SwiperSlide style={{ width: "100vw", height: "100vh" }}>
          <Miscellaneous />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
