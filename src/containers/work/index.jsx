import React from "react";
import "./style.scss";

const Portfolio = () => {
  return (
    <div class="content" id="work">
     <h1>Work</h1>
      <div class="timeline">
       
        <div class="event" style={{ top: "-20px" }}>
          <pre class="name ">
           &#123; <br/>    "education":  [ <br/>    &#123; <br/>      "level": "High School", <br/>      "start_year": 2018, <br/>      "end_year": 2021 <br/>     &#125;, <br/>     &#123; <br/>      "level":
            "University", <br/>      "start_year": 2021, <br/>      "current": true <br/>     &#125; ,<br/>],<br/>      "internship": &#123; <br/>      "start_year": 2023, <br/>      "current": true <br/>    &#125;<br/>&#125;
          </pre>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;