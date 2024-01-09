import * as React from "react";
import styled from "@emotion/styled";
import { Link, useStaticQuery, graphql } from "gatsby";
import useSiteMetadata from "../hooks/useSiteMetadata";

const Container = styled.div`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
`;

const Header = styled.header`
  font-size: 3rem;
  color: gray;
  font-weight: 700;
  margin: 3rem 0;
`;

const Heading = styled.h1`
  color: rebeccapurple;
`;

const NavList = styled.ul`
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
  const siteMetadata = useSiteMetadata();

  return (
    <Container>
      <Header>{siteMetadata.title}</Header>
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
