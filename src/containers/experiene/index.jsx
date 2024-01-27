import React from "react";
import "./style.scss";

const Resume = () => {
  return (
    <div class= "Experience">
    <h1>Experience</h1>
      <section>
        <div class="project" id="experiene">
          <img
            class="project-img"
            src="https://img.freepik.com/premium-vector/sports-center-logo-vector-illustration-gym-fitness_675292-67.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1706140800&semt=ais"
          />

          <h2>Web bán đồ thể thao</h2>
          <h3>HTML,CSS,JS,PHP</h3>
          <p>Vai Trò: Xây dựng và phát triển</p>
        </div>

        <div class="project">
          <img
            class="project-img"
            src="https://phuongnamvina.com/img_data/images/mau-logo-ban-sua-online.jpg"
          />
          <h2>Web bán sữa</h2>
          <h3>HTML,CSS,JS,PHP</h3>
          <p>Vai Trò: Xây dựng và phát triển</p>
        </div>
      </section>
    </div>
  );
};
export default Resume;
