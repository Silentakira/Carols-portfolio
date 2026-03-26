import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
} from "remotion";
import { AnimatedTitle } from "../components/AnimatedTitle";
import { PhotoCardRemotion } from "../components/PhotoCardRemotion";
import { BowLogo } from "../components/BowLogo";

interface PortfolioShowcaseProps {
  title: string;
  subtitle: string;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({
  title,
  subtitle,
}) => {
  const frame = useCurrentFrame();
  const { fps, height, width } = useVideoConfig();

  // Scroll progress - simulates user scrolling down the page
  // 0-150 frames: pause at hero
  // 150-600 frames: scroll down through page
  // 600-750 frames: pause at portfolio
  // 750-900 frames: continue to footer
  const scrollProgress = interpolate(
    frame,
    [150, 600],
    [0, 1],
    { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' }
  );

  // Calculate scroll position
  const totalPageHeight = 2400;
  const scrollY = scrollProgress * (totalPageHeight - height);

  // Cursor movement - simulates user moving mouse around
  const cursorX = interpolate(frame, [0, 100, 200, 350, 500, 700, 900], [width/2, width/2, width-200, 200, width-300, width/2, width/2], {
    extrapolateRight: "clamp",
  });
  const cursorY = interpolate(frame, [0, 100, 200, 350, 500, 700, 900], [height/2, height/2, height/2, height-200, height-300, height-200, height/2], {
    extrapolateRight: "clamp",
  });

  // Cursor scale on hover
  const cursorScale = interpolate(
    frame,
    [0, 350, 380, 500, 530, 700, 730, 900],
    [1, 1, 1.5, 1.5, 1, 1, 1, 1],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  // Portfolio cards data
  const portfolioItems = [
    { title: "Para ver", gradient: "linear-gradient(145deg, #fce4ec, #f8bbd0)" },
    { title: "Fast", gradient: "linear-gradient(145deg, #f8bbd0, #f48fb1)" },
    { title: "Rua", gradient: "linear-gradient(145deg, #fce4ec, #f06292)" },
    { title: "The Porto Selos", gradient: "linear-gradient(145deg, #f48fb1, #ec407a)" },
    { title: "Para ver II", gradient: "linear-gradient(145deg, #f8bbd0, #e91e63)" },
    { title: "Rua Fragments", gradient: "linear-gradient(145deg, #f06292, #d81b60)" },
    { title: "Fast Motion", gradient: "linear-gradient(145deg, #fce4ec, #ffb6c1)" },
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#ffffff",
        fontFamily: "'Jost', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Fixed Navigation Bar - stays at top */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        padding: "2rem 4rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 100,
        background: "linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 100%)",
      }}>
        <BowLogo startFrame={30} />
        <div style={{
          display: "flex",
          gap: "2rem",
        }}>
          {["Work", "About", "Contact"].map((link, i) => (
            <a
              key={link}
              href="#"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#f48fb1",
                textDecoration: "none",
                opacity: interpolate(frame, [30 + (i * 10), 60 + (i * 10)], [0, 1], { extrapolateRight: "clamp" }),
              }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Scrollable Content */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          transform: `translateY(${-scrollY}px)`,
          willChange: "transform",
        }}
      >
        <div style={{ position: "relative", width: "100%", height: totalPageHeight }}>
          {/* Hero Section */}
          <div style={{
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "5rem",
            position: "relative",
          }}>
            <AnimatedTitle
              text={title}
              startFrame={30}
              duration={2}
            />

            {/* Subtitle */}
            <div style={{
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              color: "#888888",
              marginTop: "0.5rem",
              opacity: interpolate(frame, [90, 120], [0, 1], { extrapolateRight: "clamp" }),
            }}>
              {subtitle}
            </div>
          </div>

          {/* Rope Zone */}
          <div style={{
            position: "relative",
            height: "80vh",
            display: "flex",
            justifyContent: "center",
          }}>
            {/* Animated rope */}
            <div style={{
              width: "1.5px",
              height: interpolate(scrollProgress, [0, 0.3], [80, 600], { extrapolateRight: "clamp" }),
              background: "linear-gradient(to bottom, #f48fb1, transparent)",
              position: "absolute",
              top: 0,
              opacity: interpolate(scrollProgress, [0, 0.2, 0.5], [1, 0.6, 0.25], { extrapolateRight: "clamp" }),
            }} />

            {/* Rope button */}
            <div style={{
              position: "absolute",
              bottom: "10vh",
              width: "40px",
              height: "40px",
              border: "1px solid #f48fb1",
              borderRadius: "50%",
              opacity: 0.4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#f48fb1" strokeWidth="1.5">
                <path d="M6 10V2M2 5l4-3 4 3" />
              </svg>
            </div>
          </div>

          {/* Portfolio Section */}
          <div style={{
            position: "relative",
            zIndex: 40,
            backgroundColor: "#ffffff",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "2rem 3rem 4rem",
            minHeight: "80vh",
          }}>
            {/* Section Header */}
            <div style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#f48fb1",
              marginBottom: "2rem",
              textAlign: "center",
              opacity: interpolate(scrollProgress, [0.3, 0.4], [0, 1], { extrapolateRight: "clamp" }),
            }}>
              Selected Works
            </div>

            {/* Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "repeat(3, 1fr)",
              gap: "8px",
              width: "100%",
              height: "65vh",
              maxHeight: "700px",
            }}>
              {portfolioItems.map((item, index) => {
                const positions = [
                  { col: "span 2", row: "span 2" },
                  { col: "auto", row: "auto" },
                  { col: "auto", row: "auto" },
                  { col: "4", row: "span 2" },
                  { col: "span 2", row: "auto" },
                  { col: "auto", row: "auto" },
                  { col: "auto", row: "auto" },
                ];

                const pos = positions[index];

                return (
                  <div
                    key={index}
                    style={{
                      gridColumn: pos.col,
                      gridRow: pos.row,
                    }}
                  >
                    <PhotoCardRemotion
                      title={item.title}
                      gradient={item.gradient}
                      startFrame={Math.floor(400 + (index * 15))}
                      delay={5}
                      index={index}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div style={{
            padding: "3rem 4rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(122, 106, 101, 0.2)",
            marginTop: "2rem",
            opacity: interpolate(scrollProgress, [0.75, 0.85], [0, 1], { extrapolateRight: "clamp" }),
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              color: "#888888",
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" style={{
                stroke: "#f48fb1",
                strokeWidth: 1.2,
                fill: "none",
              }}>
                <path d="M12 11C10.5 8.5 7.5 7.5 5.5 8.5C3.5 9.5 3 12.5 5 14L12 11Z" />
                <path d="M12 11C13.5 8.5 16.5 7.5 18.5 8.5C20.5 9.5 21 12.5 19 14L12 11Z" />
                <path d="M11.5 11.5L9 19" />
                <path d="M12.5 11.5L15 19" />
              </svg>
              <span>Carolina Celedón</span>
            </div>
            <div style={{
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#888888",
            }}>
              © 2025
            </div>
          </div>
        </div>
      </div>

      {/* Custom cursor that moves around */}
      <div style={{
        position: "fixed",
        width: `${20 * cursorScale}px`,
        height: `${20 * cursorScale}px`,
        border: "1px solid #d81b60",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        transform: `translate(${cursorX}px, ${cursorY}px)`,
        opacity: 0.8,
        transition: "width 0.2s ease, height 0.2s ease",
      }} />
    </AbsoluteFill>
  );
};
