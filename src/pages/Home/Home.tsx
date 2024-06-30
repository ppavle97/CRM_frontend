import { AuthControls, Layout } from "../../components";
import { StyledHome } from "./Home.styled";

export const Home = () => {
  return (
    <Layout>
      <StyledHome>
        <AuthControls />
        <p>Hello from Home</p>
      </StyledHome>
    </Layout>
  );
};
