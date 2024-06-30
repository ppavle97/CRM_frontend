import { useEffect, useState } from "react";
import { AuthControls, Layout, Profile, Users } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { StyledHome, SearchInput, NoResultsMessage } from "./Home.styled";
import { fetchUsers } from "../../store/features/user/userActions";
import { User } from "../../store/features/user/userTypes";
import { useLocation, useNavigate } from "react-router-dom";

export const Home = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const users = useAppSelector((state) => state.user.users);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    dispatch(fetchUsers());
    const params = new URLSearchParams(location.search);
    const query = params.get("search") || "";
    setSearchQuery(query);
  }, [dispatch, location.search]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    const params = new URLSearchParams(location.search);
    if (query.trim() !== "") {
      params.set("search", query.trim());
    } else {
      params.delete("search");
    }

    navigate({ search: params.toString() });
  };

  const filteredUsers = users.filter(
    (user: User) =>
      user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <StyledHome>
        {isLoggedIn ? <Profile /> : <AuthControls />}
        {isLoggedIn && (
          <>
            <SearchInput
              type="text"
              placeholder="Search by name or email"
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleSearch(e.target.value)
              }
              onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  handleSearch(searchQuery);
                }
              }}
            />

            {filteredUsers.length === 0 ? (
              <NoResultsMessage>No results found.</NoResultsMessage>
            ) : (
              <Users users={filteredUsers} />
            )}
          </>
        )}
      </StyledHome>
    </Layout>
  );
};
