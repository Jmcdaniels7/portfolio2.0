import projects from "@/data/projects.json";

export default function SearchProjects({ query }) {
  if (!query) return null;

  const results = projects.filter((p) => {
    const matchLang = p.languages.some((l) =>
      l.toLowerCase().includes(query.toLowerCase())
    );
    const matchFramework = p.frameworks.some((f) =>
      f.toLowerCase().includes(query.toLowerCase())
    );
    return matchLang || matchFramework;
  });

  return (
    <div className="w-full flex flex-wrap justify-center mt-6 gap-6">
      {results.length === 0 ? (
        <p className="text-white">No projects found for "{query}"</p>
      ) : (
        results.map((p) => (
          <div
            key={p.id}
            className="bg-gray-800 text-white p-6 rounded-2xl w-72 shadow-lg hover:scale-105 transition-all"
          >
            <h2 className="text-xl font-semibold mb-2">{p.name}</h2>
            <p className="text-gray-300 mb-2">{p.description}</p>
            <p className="text-sm">
              <strong>Languages:</strong> {p.languages.join(", ")}
            </p>
            <p className="text-sm">
              <strong>Frameworks:</strong> {p.frameworks.join(", ")}
            </p>
            <a
              href={p.website}
              target="_blank"
              className="text-blue-400 underline mt-2 block"
            >
              {p.website ? "Website": ""}
            </a>
            <a
              href={p.github}
              target="_blank"
              className="text-blue-400 underline mt-2 block"
            >
              GitHub
            </a>
          </div>
        ))
      )}
    </div>
  );
}
