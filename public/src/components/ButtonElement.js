import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
  border-radius: 50px;
  background: #423edd;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: white;
  font-size: ${({ fontBig }) => (fontBig ? "24px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border: 2px solid #045de9;

  &:hover {
    background: white;
    color: #423edd;
    transform: all 0.2s ease-in-out;
  }
`;
