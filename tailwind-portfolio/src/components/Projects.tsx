import { projects } from "../data";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
const Projects = () => {
  return (
    <section className="py-16 bg-sky-50 min-h-[80vh]" id="projects">
      <div className="mx-auto w-11/12 max-w-6xl">
        <SectionTitle text="projects" />
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8 justify-items-center">
          {projects.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Projects;
