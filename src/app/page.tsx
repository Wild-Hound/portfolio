import ProjectCard from "@/components/ProjectCard";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <main>
      <div className="font-primary">
        <TopBar />
        <div className="grid grid-cols-2">
          <ProjectCard bg_color="#4c3b4d" />
          <ProjectCard bg_color="#c9eddc" />
          <ProjectCard bg_color="#54645C" />
          <ProjectCard bg_color="#6a706e" />
        </div>
      </div>
    </main>
  );
}
