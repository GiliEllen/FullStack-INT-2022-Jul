import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../util/animations";

const projects = [
  {
    id: 1,
    name: "projectA",
    imgSRC:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
  },
  {
    id: 2,
    name: "projectB",
    imgSRC:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
  },
  {
    id: 3,
    name: "projectC",
    imgSRC:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
  },
];

const Projects = () => {
  return (
    <motion.div
      variants={fadeIn("left", "spring", 0.2, 0, "before")}
      initial="hidden"
      whileInView="visible"
    >
      <motion.h2
        variants={fadeIn("left", "spring", 0.2, 0.75, "before")}
        initial="hidden"
        whileInView="visible"
      >
        I have worked on:
      </motion.h2>
      <motion.div
        variants={fadeIn("right", "tween", 0.5, 0, "before")}
        initial="hidden"
        whileInView="visible"
        style={{ display: "flex", justifyContent: "center", gap: "30px" }}
      >
        {projects.map((project, index) => {
            const delay = (0.5 * index) +0.5
            console.log(delay)
          return (
            <motion.div
              variants={fadeIn("right", "tween", delay, 1)}
              initial="hidden"
              whileInView="visible"
              style={{ width: "30vw" }}
              key={project.id}
            >
              <h2>{project.name}</h2>
              <img
                style={{ width: "100%" }}
                src={project.imgSRC}
                alt={project.name}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
