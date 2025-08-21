export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          className="text-blue-600 font-medium hover:underline"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}
