import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0vh auto`,
        maxWidth: "100%",
        padding: `9vh 6vw 6vh`,
        textAlign: "center",
        display: "flex"
      }}
    >
      <Link
        to="/about/"
        className="tab"
        style={{
          color: `#ef5d5d`,
          textDecoration: `none`,
          fontWeight: `bold`,
          fontSize: "15px",
          flex: "1 1 0px",
          textAlign: "left"
        }}
      >
        ABOUT
      </Link>

      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          className="tab"
          style={{
            color: `#ef5d5d`,
            textDecoration: `none`,
            fontSize: "24px",
            flex: "0 0 auto"
          }}
        >
          {siteTitle}
        </Link>
      </h2>

      <Link
        to="/work/"
        className="tab"
        style={{
          color: `#ef5d5d`,
          textDecoration: `none`,
          fontWeight: `bold`,
          fontSize: "15px",
          flex: "1 1 0px",
          textAlign: "right"
        }}
      >
        WORK
      </Link>
    </div>
    <div className="contact">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/jklodge"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/jessicalodge/"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:jessicaklodge@gmail.com?subject=Jess Lodge"
      >
        <i className="fas fa-envelope-open"></i>
      </a>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
