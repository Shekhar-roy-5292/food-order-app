import React from "react";
import AboutImage from "../assets/About.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About us</h1>
        <p>
          Amet aute proident Lorem officia laboris. Do mollit velit laborum
          exercitation magna do. Qui officia eiusmod reprehenderit occaecat in
          mollit cillum deserunt sint. Qui ea pariatur dolore ad dolore qui
          reprehenderit dolor deserunt non ut. Nostrud excepteur adipisicing
          exercitation tempor ipsum ullamco non enim anim. Adipisicing amet anim
          consequat ea nulla sit commodo est et.Exercitation sit irure culpa
          quis tempor elit et ad aute reprehenderit quis laborum eu enim. Qui
          nulla cillum duis amet est mollit cillum laboris ad voluptate fugiat
          anim ipsum exercitation. Eu incididunt velit ad eiusmod. Id ad
          proident magna eiusmod incididunt officia eiusmod. Id nisi mollit
          nostrud ad culpa minim enim duis elit mollit eiusmod quis cupidatat.
          Ullamco ad voluptate aute laboris nisi aute nulla nostrud exercitation
          Lorem. Aliquip fugiat est consectetur nulla irure nostrud fugiat
          incididunt excepteur. Fugiat excepteur non reprehenderit reprehenderit
          dolor do Lorem. Elit dolore proident culpa non excepteur eu officia
          culpa. Voluptate aliquip Lorem fugiat fugiat exercitation anim aliquip
          non. Excepteur esse Lorem anim elit cupidatat irure qui veniam dolore
          tempor aliquip adipisicing non. Incididunt cillum nulla magna velit
          labore sunt commodo occaecat et reprehenderit. Minim ex proident enim
          Lorem velit irure. Veniam eu ut ut velit officia excepteur in. Ullamco
          amet nostrud sunt dolor adipisicing cupidatat excepteur labore
          proident adipisicing eu ut in do. Magna deserunt in mollit consequat
          officia aute ullamco in dolor consequat. Magna elit occaecat mollit
          esse et do in in duis cillum sit amet. Nulla enim pariatur ut laboris
          adipisicing. Occaecat in dolor et aliquip esse consequat enim Lorem
          laborum mollit. Laborum in cupidatat dolor deserunt incididunt culpa
          sunt consequat occaecat tempor nisi in. Incididunt ad magna eiusmod
          minim eiusmod ipsum eu Lorem cillum anim culpa nulla incididunt.
          Deserunt aliquip nostrud amet duis laborum officia dolor aliqua qui
          cillum sunt aliquip.
        </p>
      </div>
    </div>
  );
}

export default About;
