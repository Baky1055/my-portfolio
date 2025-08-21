import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard
          title="Automation Testing Framework"
          description="Python + Selenium based automation framework."
          image="/project1.png"
          link="https://github.com/yourname/automation-framework"
        />
        <ProjectCard
          title="Portfolio Website"
          description="Personal portfolio built with Next.js and Tailwind."
          image="/project1.png"
          link="https://github.com/yourname/portfolio"
        />
      </div>
    </div>
  );
}
