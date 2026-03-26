import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Sequence,
} from "remotion";
import { AnimatedTitle } from "../components/AnimatedTitle";
import { PhotoCardRemotion } from "../components/PhotoCardRemotion";
import { RopeRemotion } from "../components/RopeRemotion";

interface PortfolioShowcaseProps {
  title: string;
  subtitle: string;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({
  title,
  subtitle,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames, width, height } = useVideoConfig();

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
      {/* Scene 1: Hero (0-300 frames / 0-10 seconds) */}
      <Sequence from={0} durationInFrames={300}>
        <AbsoluteFill style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '100px',
        }}>
          <AnimatedTitle
            text={title}
            startFrame={30}
            duration={2}
          />

          {/* Subtitle fades in after title */}
          {frame > 150 && (
            <div style={{
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              color: '#888888',
              opacity: interpolate(frame, [150, 180], [0, 1], {
                extrapolateRight: 'clamp',
              }),
            }}>
              {subtitle}
            </div>
          )}
        </AbsoluteFill>
      </Sequence>

      {/* Scene 2: Rope Animation (300-450 frames / 10-15 seconds) */}
      <Sequence from={300} durationInFrames={150}>
        <AbsoluteFill>
          <RopeRemotion startFrame={0} />
        </AbsoluteFill>
      </Sequence>

      {/* Scene 3: Portfolio Grid (450-900 frames / 15-30 seconds) */}
      <Sequence from={450}>
        <AbsoluteFill style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '100px',
        }}>
          {/* Section Header */}
          <div style={{
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: '#f48fb1',
            marginBottom: '48px',
            opacity: interpolate(frame, [450, 480], [0, 1], {
              extrapolateRight: 'clamp',
            }),
          }}>
            Selected Works
          </div>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            gap: '8px',
            width: '1400px',
            height: '700px',
          }}>
            {portfolioItems.map((item, index) => {
              // Grid positions matching original layout
              const positions = [
                { col: 'span 2', row: 'span 2' }, // item-1
                { col: 'auto', row: 'auto' },     // item-2
                { col: 'auto', row: 'auto' },     // item-3
                { col: 'span 2', row: 'span 2' }, // item-4
                { col: 'span 2', row: 'auto' },   // item-5
                { col: 'auto', row: 'auto' },     // item-6
                { col: 'auto', row: 'auto' },     // item-7
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
                    startFrame={450}
                    delay={5}
                    index={index}
                  />
                </div>
              );
            })}
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
