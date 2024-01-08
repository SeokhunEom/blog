import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>주니어 개발자의 개발 블로그입니다.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/icon.png"
      />
    </Layout>
  );
};

export const Head = () => <title>Home</title>;

export default IndexPage;
