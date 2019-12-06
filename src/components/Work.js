import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import "./layout.css";

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
  const data = useStaticQuery(graphql`
    query {
      crimenoWork: file(relativePath: { eq: "crimeno.png" }) {
        ...fluidImage
      }
      gaysWork: file(relativePath: { eq: "gays.png" }) {
        ...fluidImage
      }
      crumbsWork: file(relativePath: { eq: "crumbs.png" }) {
        ...fluidImage
      }
      rollingstonesWork: file(relativePath: { eq: "rollingstones.png" }) {
        ...fluidImage
      }
      poemportraitsWork: file(relativePath: { eq: "poemportraits.png" }) {
        ...fluidImage
      }
      radicalluxWork: file(relativePath: { eq: "radicallux.png" }) {
        ...fluidImage
      }
      powwowWork: file(relativePath: { eq: "powwow.png" }) {
        ...fluidImage
      }
      activateWork: file(relativePath: { eq: "activate.png" }) {
        ...fluidImage
      }
      SonyMoulinRouge: file(relativePath: { eq: "SonyMoulinRouge.png" }) {
        ...fluidImage
      }
      audemars: file(relativePath: { eq: "audemars.png" }) {
        ...fluidImage
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <main>
      <div className="workPage"></div>
      <div className="cardContainer">
        <div className="border"></div>
        <h1 className="title">
          Vanilla Javascript/Hugo Template - Financial Times x Audemars Piguet
        </h1>
        <div className="work-container">
          <div className="work-card">
            <a
              href="https://audemarspiguet.ft.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img fluid={data.audemars.childImageSharp.fluid} />
            </a>
          </div>
        </div>
        <h1 className="title">Angular 2/Spotify API - Sony</h1>
        <div className="work-container">
          <div className="work-card">
            <a
              href="https://wearebohemians.moulinrougemusicalalbum.com/#/home"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Img fluid={data.SonyMoulinRouge.childImageSharp.fluid} />
            </a>
          </div>
        </div>
        <br />
        <h1 className="title">Technical Liasion - Google</h1>
        <div className="work-container">
          <div className="work-card">
            <a
              href="https://artsexperiments.withgoogle.com/poemportraits"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Img fluid={data.poemportraitsWork.childImageSharp.fluid} />
            </a>
          </div>
          <div className="work-card">
            <a
              href="https://learndigital.withgoogle.com/activate"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Img fluid={data.activateWork.childImageSharp.fluid} />
            </a>
          </div>
          <br />
        </div>
        <h1 className="title">React/Redux - PowWowNow</h1>
        <div className="work-container">
          <div className="work-card">
            <a
              href="https://www.powwownow.co.uk/sign-in"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Img fluid={data.powwowWork.childImageSharp.fluid} />
            </a>
          </div>
        </div>
        <br />
        <h1 className="title">
          Vanilla JS/Adobe Experience Manager - selfridges
        </h1>
        <div className="work-container">
          <div className="work-card">
            <a
              href="https://www.selfridges.com/GB/en/features/articles/selfridges-loves/the-rolling-stones-at-selfridges/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Img
                className="workImage"
                fluid={data.rollingstonesWork.childImageSharp.fluid}
              />
            </a>
          </div>
          <br />
          <div className="work-card">
            <a
              href="https://www.selfridges.com/QA/en/features/articles/radical-luxury/radical-luxury-at-selfridges/https://www.selfridges.com/QA/en/features/articles/radical-luxury/radical-luxury-at-selfridges/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Img fluid={data.radicalluxWork.childImageSharp.fluid} />
            </a>
          </div>
        </div>
        <br />
        <h1 className="title">Fun Side Project - React/Node/Express</h1>
        <div className="work-container">
          <div className="work-card">
            <a
              href="http://www.crimeno.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Img fluid={data.crimenoWork.childImageSharp.fluid} />
            </a>
          </div>
          <br />
          <div className="work-card">
            <a
              href="https://yearbook-awards.herokuapp.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Img fluid={data.gaysWork.childImageSharp.fluid} />
            </a>
          </div>
        </div>
        <br />
        <h1 className="title">Fun Side Project - P5.js Canvas</h1>
        <div className="work-container">
          <div className="work-card">
            <a
              href="https://jesslodge.herokuapp.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Img fluid={data.crumbsWork.childImageSharp.fluid} />
            </a>
          </div>
        </div>
        <br />
      </div>
    </main>
  );
};
