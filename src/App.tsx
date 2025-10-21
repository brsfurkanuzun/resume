import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./swiper.css";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Miscellaneous from "./components/Miscellaneous";
import ThemeSelector from "./components/ThemeSelector";
import Shape from "./components/Shape";
import Intro from "./components/Intro";
import StaggeredMenu from "./components/StaggeredMenu";

export default function App() {
  const verticalSwiperRef = useRef<any>(null);
  const horizontalSwiperRef = useRef<any>(null);
  const [showIntro, setShowIntro] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1O0mAhXP3su0I6atFE1qvsGoz6xsniRai";
    link.download = "furkanuzun_resume.pdf";
    link.click();
  };

  // Menu navigation handler
  const handleMenuNavigation = (link: string) => {
    switch (link) {
      case "/":
        verticalSwiperRef.current?.slideTo(0);
        break;
      case "/about":
        verticalSwiperRef.current?.slideTo(1);
        horizontalSwiperRef.current?.slideTo(0);
        break;
      case "/services":
        verticalSwiperRef.current?.slideTo(1);
        horizontalSwiperRef.current?.slideTo(1);
        break;
      case "/contact":
        verticalSwiperRef.current?.slideTo(1);
        horizontalSwiperRef.current?.slideTo(2);
        break;
    }
  };

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about me", link: "/about" },
    { label: "Works", ariaLabel: "View our services", link: "/services" },
    { label: "Misc.", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "Instagram", link: "https://www.instagram.com/barisfurkanuzun/" },
    { label: "LinkedIn", link: "https://www.linkedin.com/in/barisfurkanuzun/" },
    { label: "GitHub", link: "https://github.com/brsfurkanuzun" },
    { label: "X", link: "https://x.com/barisfurkanuzun" },
  ];

  return (
    <div style={{ height: "100vh", overflow: "hidden", position: "relative" }}>
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}

      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{ width: "100%", height: "100%" }}
        >
          <ThemeSelector />
          <Shape />
          {isMobile && (
            <StaggeredMenu
              position="right"
              items={menuItems}
              socialItems={socialItems}
              displaySocials={true}
              displayItemNumbering={true}
              menuButtonColor="#000"
              openMenuButtonColor="#000"
              changeMenuColorOnOpen={true}
              colors={["#42e2f4", "#fbf2b1"]}
              accentColor="#42e2f4"
              onMenuOpen={() => console.log("Menu opened")}
              onMenuClose={() => console.log("Menu closed")}
              onItemClick={handleMenuNavigation} // Yeni prop
            />
          )}
          <Swiper
            direction="vertical"
            slidesPerView={1}
            mousewheel={true}
            modules={[Mousewheel]}
            onSwiper={(swiper) => (verticalSwiperRef.current = swiper)}
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
                onSwiper={(swiper) => (horizontalSwiperRef.current = swiper)}
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
                  {!isMobile && (
                    <div
                      onClick={() => horizontalSwiperRef.current.slideNext()}
                      className="next-button"
                    >
                      go to <span className="neon-highlight">Experience</span>
                    </div>
                  )}
                </SwiperSlide>

                <SwiperSlide>
                  <Experience />
                  {!isMobile && (
                    <div
                      onClick={() => horizontalSwiperRef.current.slideNext()}
                      className="next-button"
                    >
                      go to{" "}
                      <span className="neon-highlight">Miscellaneous</span>
                    </div>
                  )}
                </SwiperSlide>

                <SwiperSlide>
                  <Miscellaneous />
                  <div onClick={() => handleDownload()} className="next-button">
                    {isMobile ? (
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 575 475"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          transform: "rotate(90deg)",
                          cursor: "pointer",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <path
                          d="M571.338 246.337L346.338 471.337C343.994 473.681 340.815 474.997 337.5 474.997C334.185 474.997 331.006 473.681 328.662 471.337C326.318 468.993 325.001 465.814 325.001 462.499C325.001 459.184 326.318 456.005 328.662 453.661L532.323 249.999H12.5C9.18479 249.999 6.00537 248.682 3.66117 246.338C1.31696 243.993 0 240.814 0 237.499C0 234.183 1.31696 231.004 3.66117 228.66C6.00537 226.316 9.18479 224.999 12.5 224.999H532.323L328.662 21.3366C326.318 18.9926 325.001 15.8135 325.001 12.4987C325.001 9.18381 326.318 6.00473 328.662 3.66077C331.006 1.31682 334.185 8.55549e-08 337.5 0C340.815 -8.55549e-08 343.994 1.31682 346.338 3.66077L571.338 228.661C572.499 229.821 573.42 231.199 574.048 232.715C574.677 234.232 575 235.857 575 237.499C575 239.14 574.677 240.765 574.048 242.282C573.42 243.798 572.499 245.176 571.338 246.337Z"
                          fill="black"
                        />
                      </svg>
                    ) : (
                      <>
                        download my{" "}
                        <span className="neon-highlight">Resume</span>
                      </>
                    )}
                  </div>
                </SwiperSlide>
              </Swiper>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      )}
    </div>
  );
}
