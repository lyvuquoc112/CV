import { LuMail, LuPhone, LuMapPin, LuGlobe } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { CV_DATA } from "../../constants/data";

const Header = () => {
  const { header } = CV_DATA;

  return (
    <header className="border-b-2 border-orange-600 pb-6 mb-6 flex flex-col-reverse sm:flex-row print:flex-row justify-between items-start print:items-start gap-6 break-inside-avoid">
      {/* Cột trái: Tên, Title, Contact */}
      <div className="flex-1">
        <h1 className="text-4xl font-extrabold text-gray-900 uppercase tracking-wider">
          {header.fullName}
        </h1>
        <h2 className="text-xl font-semibold text-orange-700 mt-2 uppercase tracking-widest">
          {header.title}
        </h2>

        {/* Lưới thông tin liên lạc */}
        <div className="mt-4 text-sm text-gray-600 space-y-2 sm:space-y-0 print:space-y-0">
          <div className="inline-block mr-6 align-middle">
            <span className="inline-block align-middle mr-1.5"><LuPhone size={16} className="text-orange-600" /></span>
            <span className="inline-block align-middle">{header.phone}</span>
          </div>
          <div className="inline-block mr-6 align-middle">
            <span className="inline-block align-middle mr-1.5"><LuMail size={16} className="text-orange-600" /></span>
            <a
              href={`mailto:${header.email}`}
              className="hover:text-orange-700 transition-colors inline-block align-middle relative z-50"
            >
              {header.email}
            </a>
          </div>
          <div className="inline-block mr-6 align-middle">
            <span className="inline-block align-middle mr-1.5"><FaGithub size={16} className="text-orange-600" /></span>
            <a
              href={header.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-700 transition-colors inline-block align-middle relative z-50"
            >
              github.com/{header.githubName}
            </a>
          </div>
          {header.portfolioUrl && (
            <div className="inline-block mr-6 align-middle">
              <span className="inline-block align-middle mr-1.5"><LuGlobe size={16} className="text-orange-600" /></span>
              <a
                href={header.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-orange-700 transition-colors inline-block align-middle relative z-50"
              >
                Portfolio Website
              </a>
            </div>
          )}
          <div className="inline-block mr-6 align-middle">
            <span className="inline-block align-middle mr-1.5"><LuMapPin size={16} className="text-orange-600" /></span>
            <span className="inline-block align-middle">{header.address}</span>
          </div>
        </div>
      </div>

      {/* Cột phải: Khu vực để hình thẻ */}
      <div className="shrink-0 w-28 h-36 sm:w-32 sm:h-40 bg-gray-200 rounded-lg overflow-hidden border-2 border-orange-100 shadow-sm print:shadow-none">
        <img
          src={header.avatar}
          alt={header.fullName}
          className="w-full h-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
