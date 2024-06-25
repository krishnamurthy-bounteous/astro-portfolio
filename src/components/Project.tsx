import React from "react";
import { skills } from "../skill";

interface Project {
  name: string;
  description: string;
  src: string;
  stack: (keyof typeof skills)[];
  link: string;
}

interface Props {
  project: Project;
}

const ProjectComponent: React.FC<Props> = ({ project }) => {
  return (
    <div className="flex-1 font-mono text-white flex gap-4 flex-col md:w-[480px] w-[340px] pb-4">
      <img
        className="w-[480px] rounded-xl"
        src={project.src}
        alt={project.name}
        data-aos="zoom-in"
        data-aos-delay="200"
      />
      <h2 className="text-2xl" data-aos="fade-right" data-aos-delay="100">
        {project.name}
      </h2>
      <p className="flex flex-wrap" data-aos="fade-right" data-aos-delay="200">
        {project.description}
      </p>
      <div
        className="flex flex-wrap"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        {project.stack.map((skill, index) => (
          <img
            key={index}
            src={skills[skill]}
            alt={skill}
            data-aos="fade-up-right"
            data-aos-delay={`${index * 150}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectComponent;
