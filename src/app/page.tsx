import ProjectCard from "@/components/ProjectCard";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <main>
      <div className="font-primary">
        <TopBar />
        <div className="grid grid-cols-2">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </main>
  );
}
