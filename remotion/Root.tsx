import { Composition } from "remotion";
import { PortfolioShowcase } from "./compositions/PortfolioShowcase";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="PortfolioShowcase"
        component={PortfolioShowcase}
        durationInFrames={900} // 30 seconds @ 30fps
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          title: "Carolina Celedón",
          subtitle: "Photography · Porto",
        }}
      />
    </>
  );
};
