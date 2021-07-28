import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "black" : "#6b705c")};
  white-space: nowrap;

  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 40px;

  height: 30px;

  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  color: ${({ primary }) => (primary ? "#fff" : "#ffe8d6")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};

  &:hover {
    transform: translateY(-2px);
    color: #fff;
  }

  @media screen and (max-width: 960px) {
    width: 20%;
  }
`;
