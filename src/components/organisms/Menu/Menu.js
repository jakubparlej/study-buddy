import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 110px;
  height: 100%;
  border-right: 1px solid #dfe2e8;
  text-align: right;
  margin: 20px 0;
`;

const Logo = styled.h1`
  font-size: 1rem;
  width: 100%;
  padding: 13px 1rem;
  background-color: ${({ theme }) => theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.white};
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 3rem 0;
  padding: 1rem;

  p {
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: bold;
  }
`;

const Menu = () => {
  return (
    <Wrapper>
      <Logo>Studdy Buddy</Logo>
      <Nav>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/add-user">
          <p>Add user</p>
        </Link>
      </Nav>
    </Wrapper>
  );
};
export default Menu;
