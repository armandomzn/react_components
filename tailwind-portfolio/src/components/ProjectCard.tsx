import { Projects } from "../interfaces/ProjectsInterface";
import { FaGithubSquare } from "react-icons/fa";

interface Props {
  project: Projects;
}
const ProjectCard = ({ project }: Props) => {
  return (
    <article className="rounded bg-white shadow-lg grid grid-rows-2-rows h-full">
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-52 object-cover rounded-t"
      />
      <div className="p-4 grid gap-y-2 grid-rows-2-rows">
        <h4 className="capitalize tracking-wider text-sky-600 text-xl font-medium">
          {project.title}
        </h4>
        <p className="leading-loose text-sky-900">{project.description}</p>
        <a
          href={project.github}
          target="_blank"
          className="text-sky-700 text-4xl hover:text-sky-600 duration-200"
        >
          <FaGithubSquare />
        </a>
      </div>
    </article>
  );
};
export default ProjectCard;
