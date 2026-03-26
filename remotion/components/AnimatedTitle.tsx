import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { easeInOutCubic } from "../utils/animations";

interface AnimatedTitleProps {
  text: string;
  startFrame: number;
  duration: number;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  text,
  startFrame,
  duration,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Calculate progress (0 to 1)
  const progress = Math.min(
    Math.max((frame - startFrame) / (duration * fps), 0),
    1
  );

  const easedProgress = easeInOutCubic(progress);

  // Character-by-character reveal
  const chars = text.split('');
  const totalChars = chars.length;

  return (
    <h1 style={{
      fontFamily: "'Playfair Display', serif",
      fontStyle: 'italic',
      fontSize: '120px',
      fontWeight: 400,
      color: '#333333',
      margin: 0,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '2px',
    }}>
      {chars.map((char, i) => {
        const charProgress = Math.max(0, Math.min(1, (progress * totalChars - i) / 2));
        const opacity = charProgress;
        const y = (1 - easedProgress) * 40;

        return (
          <span
            key={i}
            style={{
              display: 'inline-block',
              opacity,
              transform: `translateY(${y}px)`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      })}
    </h1>
  );
};
