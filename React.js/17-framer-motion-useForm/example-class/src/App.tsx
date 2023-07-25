import React from "react";
import logo from "./logo.svg";
import "./App.css";
import About from "./views/About";
import { motion } from "framer-motion";
import { containerVarient, fadeIn } from "./util/animations/animation";
import ContactMe from "./views/ContactMe";

const projects = [
  {
    id: 1,
    name: "project",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
  },
  {
    id: 2,
    name: "project2",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
  },
  {
    id: 3,
    name: "project3",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
  },
];

function App() {
  return (
    <div className="App">
      <ContactMe/>
      <motion.div
        // variants={fadeIn("up", "spring", 1, 1)}
        // initial="hidden"
        // animate="visible"
        style={{ height: "800px", border: "1px solid black" }}
      >
        HELLO
        <motion.button
          // whileHover={{
          //   scale: 1.1,
          //   boxShadow: "0px 0px 8px 8px black",
          // }}
          // transition={{
          //   duration: 0.3,
          //   repeatType: "reverse",
          //   repeat: Infinity
          // }}
        >
          TEST
        </motion.button>
      </motion.div>
      <About />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {projects.map((project, idx) => {
          const delay = 0.5 * idx + 0.5;
          return (
            <motion.div
              variants={fadeIn("right", "spring", delay, 0.75)}
              style={{ width: "30vw" }}
              key={project.id}
              whileInView="visible"
              initial="hidden"
            >
              <h3>{project.name}</h3>
              <img
                style={{ width: "100%" }}
                src={project.imageURL}
                alt={project.name}
              />
            </motion.div>
          );
        })}
      </div>
      <motion.div
        // variants={fadeIn("up", "spring", 1, 1)}
        // initial="hidden"
        // animate="visible"
        style={{ height: "800px", border: "1px solid black" }}
      >
        HELLO
      </motion.div>
    </div>
  );
}

export default App;
