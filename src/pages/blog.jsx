import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPage = () => {
  return (
    <Layout pageTitle="Blog Posts">
      <p>최근 작성된 블로그 포스트를 확인해보세요.</p>
    </Layout>
  );
};

export const Head = () => <Seo title="Blog Posts" />;

export default BlogPage;
