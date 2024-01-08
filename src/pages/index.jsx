import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>주니어 개발자의 개발 블로그입니다.</p>
    </Layout>
  );
};

export const Head = () => <title>Home</title>;

export default IndexPage;
