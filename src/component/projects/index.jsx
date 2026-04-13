import { LuBriefcase } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { CV_DATA } from "../../constants/data";

const Projects = () => {
  const { projects } = CV_DATA;

  return (
    <section className="break-inside-avoid">
      <h3 className="text-xl font-bold text-gray-900 border-b-2 border-orange-100 pb-2 mb-4 flex items-center gap-2">
        <LuBriefcase size={22} className="text-orange-600" />
        PROJECTS
      </h3>

      {projects.map((project) => (
        <div key={project.id} className="bg-gray-50 p-5 rounded-lg border border-gray-100 print:bg-gray-50 mb-6 last:mb-0">
          <div className="flex flex-col sm:flex-row print:flex-row sm:justify-between print:justify-between sm:items-baseline print:items-baseline mb-2">
            <h4 className="text-lg font-bold text-orange-800 flex-1 mr-2">
              {project.name}
            </h4>
            <span className="text-sm font-semibold text-gray-500 bg-white px-2 py-1 rounded shadow-sm border border-gray-100 mt-1 sm:mt-0 print:mt-0 -mr-2 sm:-mr-4 print:-mr-4 whitespace-nowrap">
              {project.role}
            </span>
          </div>

          <div className="mb-4 text-sm">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline flex items-center gap-1 w-fit"
            >
              <FaGithub size={14} /> {project.githubDisplay}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4 text-sm bg-white p-3 rounded shadow-sm border border-gray-100 print:bg-white">
            <div>
              <span className="font-semibold text-gray-700">Team Size:</span> {project.teamSize}
            </div>
            <div>
              <span className="font-semibold text-gray-700">Tech Stack:</span> {project.techStack}
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <h5 className="font-semibold text-gray-800 mb-1 italic underline">Responsibilities:</h5>
              <ul className="list-disc list-outside ml-5 text-sm text-gray-700 space-y-1 leading-relaxed">
                {project.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>

            <div className="bg-orange-50 p-3 rounded border border-orange-100 mt-4 print:bg-orange-50">
              <h5 className="font-semibold text-orange-800 mb-1">Challenges & Solutions:</h5>
              <p className="text-sm text-gray-700 leading-relaxed text-justify">
                {project.challenges}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
