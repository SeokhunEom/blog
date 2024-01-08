import * as React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const Container = styled.div`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
`;

const Heading = styled.h1`
  color: rebeccapurple;
`;

const NavList = styled.nav`
  display: flex;
  list-style: none;
  padding-left: 0;
`;

const NavListItem = styled.li`
  padding-right: 2rem;
`;

const NavLinkText = styled(Link)`
  color: black;
`;

const Layout = ({ pageTitle, children }) => {
  return (
    <Container>
      <nav>
        <NavList>
          <NavListItem>
            <NavLinkText to="/">Home</NavLinkText>
          </NavListItem>
          <NavListItem>
            <NavLinkText to="/about">About</NavLinkText>
          </NavListItem>
        </NavList>
      </nav>
      <main>
        <Heading>{pageTitle}</Heading>
        {children}
      </main>
    </Container>
  );
};

export default Layout;
