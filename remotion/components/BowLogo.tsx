import { useCurrentFrame, interpolate } from "remotion";

export const BowLogo: React.FC<{ startFrame: number }> = ({ startFrame }) => {
  const frame = useCurrentFrame();
  const progress = Math.max(0, Math.min(1, (frame - startFrame) / 30));

  const scale = interpolate(progress, [0, 1], [0.8, 1], {
    extrapolateRight: 'clamp',
  });
  const opacity = interpolate(progress, [0, 0.5, 1], [0, 0.8, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transform: `scale(${scale})`,
      opacity,
    }}>
      <svg width="18" height="18" viewBox="0 0 24 24" style={{
        stroke: '#f48fb1',
        strokeWidth: 1.2,
        fill: 'none',
      }}>
        <path d="M12 11C10.5 8.5 7.5 7.5 5.5 8.5C3.5 9.5 3 12.5 5 14L12 11Z" />
        <path d="M12 11C13.5 8.5 16.5 7.5 18.5 8.5C20.5 9.5 21 12.5 19 14L12 11Z" />
        <path d="M11.5 11.5L9 19" />
        <path d="M12.5 11.5L15 19" />
      </svg>
      <span style={{
        fontFamily: "'Playfair Display', serif",
        fontStyle: 'italic',
        fontSize: '19px',
        color: '#333333',
      }}>
        Carolina
      </span>
    </div>
  );
};
