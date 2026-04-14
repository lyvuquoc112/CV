import { LuGraduationCap, LuAward, LuExternalLink } from "react-icons/lu";
import { CV_DATA } from "../../constants/data";

const Education = () => {
  const { education } = CV_DATA;

  return (
    <section className="break-inside-avoid mb-4">
      <h3 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-2 mb-3 flex items-center gap-2">
        <LuGraduationCap size={20} className="text-orange-600" />
        EDUCATION
      </h3>
      <div className="mb-3">
        <h4 className="font-bold text-gray-800">{education.school}</h4>
        <p className="text-sm text-gray-600 italic">Major: {education.major}</p>
        <p className="text-sm text-gray-500">{education.status}</p>
      </div>
      <div className="space-y-3 text-sm text-gray-700">
        {education.certificates.map((cert) => (
          <div className="flex items-start gap-2" key={cert.id}>
            <LuAward
              size={16}
              className={`${
                cert.type === "academic" ? "text-amber-500" : "text-blue-500"
              } mt-0.5 shrink-0`}
            />
            <div>
              <p>
                <strong>{cert.title}:</strong> {cert.details}
              </p>
              <div className="mt-1.5">
                <div className={`inline-block border rounded transition-colors box-border text-${
                    cert.type === "academic" ? "orange" : "blue"
                  }-700 hover:text-white hover:bg-${
                    cert.type === "academic" ? "orange" : "blue"
                  }-600 bg-${
                    cert.type === "academic" ? "orange" : "blue"
                  }-50 border-${
                    cert.type === "academic" ? "orange" : "blue"
                  }-100 print:bg-${
                    cert.type === "academic" ? "orange" : "blue"
                  }-50 print:border-${
                    cert.type === "academic" ? "orange" : "blue"
                  }-100`}>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block relative z-50 text-xs font-medium px-2 py-1 align-middle"
                  >
                    <LuExternalLink size={12} className="inline-block align-baseline mr-1" />
                    {cert.type === "academic" ? "View Certificates" : "View Score Info"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;