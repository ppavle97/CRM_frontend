import { AuthControls, Layout, Profile } from "../../components";
import { useAppSelector } from "../../store/hooks";
import { StyledHome } from "./Home.styled";

export const Home = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return (
    <Layout>
      <StyledHome>
        {isLoggedIn ? <Profile /> : <AuthControls />}
        <p>Hello from Home</p>
      </StyledHome>
    </Layout>
  );
};
