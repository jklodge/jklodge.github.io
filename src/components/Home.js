import React from "react";
import HomeProjects from "./HomeProjects";

export default () => {
  return (
    <main>
      <div className="homeAbout">
        <h3>Hey!</h3>
        <p>
          I am Jess, a developer based in London. In short, I am passionate
          about bringing fun, helpful or just crazy ideas to life. I enjoy
          working on new things with different technologies. Here is a selection
          of projects I've worked on professionally, plus my own projects.
          Please feel free to explore & tell me what you think!
        </p>
      </div>
      <HomeProjects />
    </main>
  );
};
