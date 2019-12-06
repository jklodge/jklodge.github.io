import React from "react";
import Home from "../components/home";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Footer from "../components/footer";

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <Footer />
  </Layout>
);

export default IndexPage;
