import { LuTarget } from "react-icons/lu";
import { CV_DATA } from "../../constants/data";

const Objective = () => {
  const { objective } = CV_DATA;

  return (
    <section className="break-inside-avoid mb-4">
      <h3 className="text-xl font-bold text-gray-900 border-b-2 border-orange-100 pb-2 mb-3 flex items-center gap-2">
        <LuTarget size={22} className="text-orange-600" />
        OBJECTIVE
      </h3>
      <p className="text-gray-700 text-justify leading-relaxed">
        {objective}
      </p>
    </section>
  );
};

export default Objective;
