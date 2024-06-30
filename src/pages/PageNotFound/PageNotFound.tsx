import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { StyledNotFound } from "./PageNotFound.styled";

export const PageNotFound: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <StyledNotFound>
      <p>
        Page on <span>{currentPath}</span> does not exist!
      </p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </StyledNotFound>
  );
};

export default PageNotFound;
