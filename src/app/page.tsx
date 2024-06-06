import ProjectCard from "@/components/ProjectCard";
import TopBar from "@/components/TopBar";
import { projects } from "@/lib/Models/projects";

export default function Home() {
  return (
    <main>
      <div className="font-primary">
        <TopBar />
        <div className="grid grid-cols-2 gap-2 p-3">
          {projects?.map((project, index) => {
            return (
              <ProjectCard
                imgSrc={project?.imgSrc}
                title={project?.name}
                key={index}
                projectID={`${project?.id}`}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
