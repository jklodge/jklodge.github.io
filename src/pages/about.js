import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 700) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export default () => {
  useStaticQuery(graphql`
    query {
      jessbg: file(relativePath: { eq: "jessbg.jpg" }) {
        ...fluidImage
      }
    }
  `);
  return (
    <Layout>
      <SEO title="About" />
      <div className="about-container">
        <div className="about">
          <h1>about me</h1>
          <p>
            I love bringing ideas to life, I started my career in marketing, and
            then moved on to product roles building the vision for products in
            the finance and media industries. I undertook the Web Development
            Immersive course at General Assembly, where I gained developer
            skills to build the products that I previously managed. Working in
            JavaScript including node environemnts and frameworks including
            React and Angular.
          </p>
        </div>
        <div className="about-contact">
          <h1>contact me</h1>
          <p>
            email:
            <a
              href="mailto:jessicaklodge@gmail.com?Subject=Hey%20Jess"
              rel="noopener noreferrer"
              target="_top"
            >
              <span>
                <br></br> jessicaklodge@gmail.com
              </span>
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};
