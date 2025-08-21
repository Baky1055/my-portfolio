export default function Contact() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <form className="max-w-lg space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border px-4 py-2 rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border px-4 py-2 rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full border px-4 py-2 rounded-lg"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Send
        </button>
      </form>
    </div>
  );
}
