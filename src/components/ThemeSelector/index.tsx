import { useTheme } from "../../context/ThemeContext";
import { useState, useEffect } from "react";

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px altı mobil kabul edelim
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) return null; // Mobilde hiç render etme

  const knobLeft = theme === "dark" ? "37.5px" : "2.5px";

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        position: "absolute",
        alignItems: "center",
        right: 0,
        margin: "5vh",
        zIndex: 5,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <span style={{ cursor: "pointer" }} onClick={() => setTheme("light")}>
          LIGHT
        </span>
        {/* <span onClick={() => setTheme("neon")}>NEON</span> */}
      </div>

      <div
        className="switch-toggle-container"
        style={{
          borderRadius: "9999px",
          position: "relative",
        }}
      >
        <div
          className="switch-toggle-knob"
          style={{
            position: "absolute",
            top: "50%",
            left: knobLeft,
            transform: "translateY(-50%)",
            borderRadius: "9999px",
            transition: "left 0.3s ease",
          }}
        ></div>
      </div>

      <span style={{ cursor: "pointer" }} onClick={() => setTheme("dark")}>
        DARK
      </span>
    </div>
  );
};

export default ThemeSelector;
