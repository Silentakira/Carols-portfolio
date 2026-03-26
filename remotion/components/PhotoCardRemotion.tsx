import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";

interface PhotoCardRemotionProps {
  title: string;
  gradient: string;
  startFrame: number;
  delay: number;
  index: number;
}

export const PhotoCardRemotion: React.FC<PhotoCardRemotionProps> = ({
  title,
  gradient,
  startFrame,
  delay,
  index,
}) => {
  const frame = useCurrentFrame();

  const actualStart = startFrame + (index * delay);
  const progress = Math.max(0, Math.min(1, (frame - actualStart) / 30));

  // Scale and fade in
  const scale = interpolate(progress, [0, 1], [0.9, 1], {
    extrapolateRight: 'clamp',
  });
  const opacity = interpolate(progress, [0, 0.5, 1], [0, 0.8, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '2px',
        opacity,
        transform: `scale(${scale})`,
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          background: gradient,
          transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '24px',
          background: 'linear-gradient(to top, rgba(244, 143, 177, 0.85), rgba(244, 143, 177, 0.4), transparent)',
          transform: `translateY(${(1 - progress) * 10}px)`,
        }}
      >
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '24px',
            color: '#333333',
            margin: 0,
          }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};
