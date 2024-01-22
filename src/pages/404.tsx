import * as React from "react";

import Seo from "../components/Seo";
import Layout from "../layout";
import NotFound from "../components/NotFound/NotFound";

type NotFoundPageProps = {
  location: Location;
};

const NotFoundPage: React.FC<NotFoundPageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="seokhun.dev | Not Found" />
      <NotFound />
    </Layout>
  );
};

export default NotFoundPage;
