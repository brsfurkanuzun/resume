import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/swiper-bundle.css";

import Home from "./components/Home";
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
        direction="vertical"
        slidesPerView={1}
        mousewheel={true}
        modules={[Mousewheel]}
        style={{ width: "100vw", height: "100vh" }}
      >
        {/* Dikeyde ilk slide: HOME */}
        <SwiperSlide>
          <Home />
        </SwiperSlide>

        {/* Dikeyde ikinci slide: yatay swiper */}
        <SwiperSlide>
          <Swiper
            direction="horizontal"
            slidesPerView={1}
            mousewheel={{ forceToAxis: true }}
            modules={[Mousewheel]}
            style={{ width: "100vw", height: "100vh" }}
          >
            <SwiperSlide>
              <About />
            </SwiperSlide>
            <SwiperSlide>
              <Experience />
            </SwiperSlide>
            <SwiperSlide>
              <Miscellaneous />
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
