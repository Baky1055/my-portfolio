export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center py-12">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-40 h-40 rounded-full border-4 border-blue-600 mb-6 md:mb-0 md:mr-8"
      />
      <div>
        <h1 className="text-4xl font-bold mb-4">Hi, I’m Abdullah 👋</h1>
        <p className="text-lg text-gray-700 mb-6">
          I’m a Software Quality Assurance Engineer specializing in test
          automation, manual testing, and CI/CD.
        </p>
        <a
          href="/Abdullah_CV.pdf"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
