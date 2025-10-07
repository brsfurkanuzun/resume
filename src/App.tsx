import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./swiper.css";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Miscellaneous from "./components/Miscellaneous";
import ThemeSelector from "./components/ThemeSelector";
import Shape from "./components/Shape";
import Intro from "./components/Intro";

export default function App() {
  const swiperRef = useRef<any>(null);
  const [showIntro, setShowIntro] = useState(true);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1O0mAhXP3su0I6atFE1qvsGoz6xsniRai";
    link.download = "furkanuzun_resume.pdf";
    link.click();
  };

  return (
    <div style={{ height: "100vh", overflow: "hidden", position: "relative" }}>
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}

      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }} // Burada fade-in süresi
          style={{ width: "100%", height: "100%" }}
        >
          <ThemeSelector />
          <Shape />

          <Swiper
            direction="vertical"
            slidesPerView={1}
            mousewheel={true}
            modules={[Mousewheel]}
            style={{ width: "100vw", height: "100vh" }}
          >
            <SwiperSlide>
              <Home />
            </SwiperSlide>

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
                  renderBullet: (index, className) =>
                    `<span class="${className}">${index + 1}</span>`,
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
        </motion.div>
      )}
    </div>
  );
}
