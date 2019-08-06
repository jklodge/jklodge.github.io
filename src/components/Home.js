import React from "react";
import Work from "./Work";

export default () => {
  return (
    <main>
      <div className="homeAbout">
        <h3>Hey!</h3>
        <p>
          I am Jess, a developer based in London. In short, I am passionate
          about bringing fun, helpful or just crazy ideas to life. I enjoy
          working on new things with different technologies. Here is a selection
          of projects I've worked on, plus my own work. Please feel free to
          explore & tell me what you think about it!
        </p>
      </div>
      <Work />
    </main>
  );
};
