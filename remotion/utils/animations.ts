import { interpolate, spring } from "remotion";

// Convert Framer Motion spring to Remotion spring
export function remotionSpring(frame: number, fps: number) {
  return spring({
    frame,
    fps,
    config: {
      damping: 10,
      stiffness: 80,
      mass: 0.8,
    },
  });
}

// Ease-in-out cubic (matches Framer Motion's [0.2, 0.8, 0.2, 1])
export function easeInOutCubic(t: number): number {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Stagger children animation
export function staggerChildren(
  frame: number,
  delay: number,
  total: number
): number[] {
  return Array.from({ length: total }, (_, i) => {
    const startFrame = delay + (i * delay);
    return Math.max(0, Math.min(1, (frame - startFrame) / 30));
  });
}
