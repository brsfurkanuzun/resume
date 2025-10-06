import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./swiper.css";
import { useRef } from "react";

import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Miscellaneous from "./components/Miscellaneous";
import ThemeSelector from "./components/ThemeSelector";
import Shape from "./components/Shape";

export default function App() {
  const swiperRef = useRef<any>(null);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1O0mAhXP3su0I6atFE1qvsGoz6xsniRai";
    link.download = "furkanuzun_resume.pdf"; // kaydedilecek dosya adı
    link.click();
  };
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
          <div className="custom-pagination"></div>
          <Swiper
            direction="horizontal"
            slidesPerView={1}
            mousewheel={{ forceToAxis: true }}
            modules={[Mousewheel, Pagination]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            style={{ width: "100vw", height: "100vh" }}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className}">${index + 1}</span>`;
              },
            }}
          >
            <SwiperSlide>
              <About />
              <div
                onClick={() => swiperRef.current.slideNext()}
                className="next-button"
              >
                go to <span className="neon-highlight">Experience</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Experience />
              <div
                onClick={() => swiperRef.current.slideNext()}
                className="next-button"
              >
                go to <span className="neon-highlight">Miscellaneous</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={() => handleDownload()} className="next-button">
                download my <span className="neon-highlight">Resume</span>
              </div>
              <Miscellaneous />
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
