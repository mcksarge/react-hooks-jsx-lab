import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>West Philadelphia born and raised, on the playground is where I spend most of my days.</p>
      <img src={image} alt="I made this"></img>
    </div>
  );
}

export default About;
