import { AuthControls, Layout, Profile, Users } from "../../components";
import { useAppSelector } from "../../store/hooks";
import { StyledHome } from "./Home.styled";

export const Home = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return (
    <Layout>
      <StyledHome>
        {isLoggedIn ? <Profile /> : <AuthControls />}

        {isLoggedIn && <Users />}
      </StyledHome>
    </Layout>
  );
};
