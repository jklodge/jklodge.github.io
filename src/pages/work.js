import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "../components/header";
import Work from "../components/Work";

export default () => {
  const data = useStaticQuery(graphql`
    query SiteHeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <main>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Work />
    </main>
  );
};
