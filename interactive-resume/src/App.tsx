import { useTheme } from "./context/ThemeContext";
import Home from "./components/Home"
import About from "./components/About"
import Miscellaneous from "./components/Miscellaneous"

export default function App() {
  const { theme, setTheme } = useTheme();

  const knobLeft = theme === "dark" ? "37.5px" : "2.5px";

  return (<><div
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        padding: "2.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <div style={{ display: "flex", gap: "1rem", }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <span onClick={() => setTheme("light")}>LIGHT</span>
          <span onClick={() => setTheme("neon")}>NEON</span>
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
        <span onClick={() => setTheme("dark")}>DARK</span>
      </div>
    </div>
    
    <About/>
    <Miscellaneous/>
    
  </>
    
  );
}
