import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>
        개발을 통해 우리 삶의 다양한 문제를 해결하는 것이 목표인 주니어
        개발자입니다.
      </p>
    </Layout>
  );
};

export const Head = () => <Seo title="About" />;

export default AboutPage;
