import { useEffect, useState } from "react";
import {
  AuthControls,
  Layout,
  Pagination,
  Profile,
  Users,
} from "../../components";
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
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    dispatch(fetchUsers());
    const params = new URLSearchParams(location.search);
    const query = params.get("search") || "";
    setSearchQuery(query);
    const page = params.get("page");
    setCurrentPage(page ? parseInt(page, 10) : 1);
  }, [dispatch, location.search]);

  const handleSearch = (query: string) => {
    setSearchQuery(query.trim());
    setCurrentPage(1);

    const params = new URLSearchParams(location.search);
    if (query.trim() !== "") {
      params.set("search", query.trim());
    } else {
      params.delete("search");
    }
    params.set("page", "1");
    navigate({ search: params.toString() });
  };

  const filteredUsers = users.filter(
    (user: User) =>
      user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const itemsPerPage = 10;

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    const params = new URLSearchParams(location.search);
    params.set("page", page.toString());
    navigate({ search: params.toString() });
  };

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
              <Users users={paginatedUsers} />
            )}

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </StyledHome>
    </Layout>
  );
};
