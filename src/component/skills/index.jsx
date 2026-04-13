import { LuCode } from "react-icons/lu";
import { CV_DATA } from "../../constants/data";

const Skills = () => {
  const { skills } = CV_DATA;

  return (
    <section className="break-inside-avoid">
      <h3 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-2 mb-3 flex items-center gap-2">
        <LuCode size={20} className="text-orange-600" />
        SKILLS
      </h3>

      {skills.categories.map((cat) => (
        <div className="mb-4" key={cat.id}>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            {cat.name}
          </h4>
          <div className="flex flex-wrap gap-2">
            {cat.items.map((item, idx) => (
              <span
                key={idx}
                className={`${
                  cat.name === "Core & Frameworks"
                    ? "bg-orange-100 text-orange-800 print:bg-orange-100 print:text-orange-900"
                    : "bg-gray-100 text-gray-800 print:bg-gray-100"
                } text-xs font-medium px-2 py-1 rounded`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}

      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Soft Skills</h4>
        <p className="text-sm text-gray-600 leading-relaxed">
          {skills.softSkills}
        </p>
      </div>
    </section>
  );
};

export default Skills;
