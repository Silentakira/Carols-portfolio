import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";

export const RopeRemotion: React.FC<{ startFrame: number }> = ({ startFrame }) => {
  const frame = useCurrentFrame();
  const { height } = useVideoConfig();

  const progress = Math.max(0, Math.min(1, (frame - startFrame) / 60));

  // Rope grows from 80px to 600px
  const ropeHeight = interpolate(progress, [0, 1], [80, 600]);
  const opacity = interpolate(progress, [0, 0.67, 1], [1, 0.6, 0.25]);

  return (
    <div style={{
      position: 'relative',
      height: `${height}px`,
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div
        style={{
          width: '1.5px',
          height: `${ropeHeight}px`,
          background: 'linear-gradient(to bottom, #f48fb1, transparent)',
          position: 'absolute',
          top: 0,
          opacity,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          width: '40px',
          height: '40px',
          border: '1px solid #f48fb1',
          borderRadius: '50%',
          opacity: 0.4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#f48fb1" strokeWidth="1.5">
          <path d="M6 10V2M2 5l4-3 4 3" />
        </svg>
      </div>
    </div>
  );
};
