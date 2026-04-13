import { LuPrinter } from "react-icons/lu";

const PrintButton = () => {
  const handlePrint = () => window.print();
  return (
    <div className="max-w-[210mm] mx-auto mb-4 flex justify-end print:hidden">
      <button
        onClick={handlePrint}
        className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors shadow-md"
      >
        <LuPrinter size={18} />
        <span>Xuất PDF / In CV</span>
      </button>
    </div>
  );
};

export default PrintButton;
