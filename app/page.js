import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Project One"
            description="A web app built with Next.js and TailwindCSS."
            image="/project1.png"
            link="https://github.com/yourname/project1"
          />
          <ProjectCard
            title="Project Two"
            description="Mobile-first responsive website."
            image="/project1.png"
            link="https://github.com/yourname/project2"
          />
        </div>
      </section>
    </div>
  );
}
