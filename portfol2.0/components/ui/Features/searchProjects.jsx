import projects from "@/data/projects.json";
import { FaGithub } from "react-icons/fa";

export default function SearchProjects({ query }) {
    const results = !query
    ? projects
    : projects.filter((p) => {
        const matchLang = p.languages.some((l) =>
          l.toLowerCase() === query.toLowerCase()
        );
        const matchFramework = p.frameworks.some((f) =>
          f.toLowerCase() === query.toLowerCase()
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
            className="bg-gray-800 text-white p-6 rounded-2xl w-89 h-75 shadow-lg hover:scale-105 transition-all"
          >
            <h2 className="text-xl font-semibold mb-2">{p.name}</h2>
            <p className="text-gray-300 mb-2">{p.description}</p>
            <p className="text-sm">
              <strong>Languages:</strong> {p.languages.join(",  ")}
            </p>
            <p className="text-sm">
              <strong>Frameworks:</strong> {p.frameworks.join(",  ")}
            </p>
            <p className="text-sm">
              <strong>Database/Cloud Technologies: </strong> { p.DBCloudTech.join(",  ") }
            </p>
            
            <div className="flex items-center gap-4 mt-5">
              <a href={p.github} target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} className="text-white hover:text-gray-300" />
              </a>

              {p.website && (
                <a
                  href={p.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline hover:text-gray-300"
                >
                  Website
                </a>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
