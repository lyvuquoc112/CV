import './App.css'
import PrintButton from './component/print-button'
import Header from './component/header'
import Education from './component/education'
import Skills from './component/skills'
import Objective from './component/object'
import Projects from './component/projects'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 print:py-0 print:bg-white font-sans text-gray-800">
      
      <PrintButton />

      {/* Cố định kích thước khung in để không bị nhảy layout */}
      <div className="max-w-[210mm] mx-auto bg-white p-10 sm:p-12 shadow-2xl print:shadow-none print:max-w-none print:p-6 print:w-[210mm]">
        
        <Header />

        {/* Cố định grid 3 cột khi in */}
        <div className="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-6 items-start">
          {/* CỘT TRÁI */}
          <div className="col-span-1 space-y-4 flex flex-col">
            <Education />
            <Skills />
          </div>

          {/* CỘT PHẢI */}
          <div className="col-span-1 md:col-span-2 print:col-span-2 space-y-4 flex flex-col">
            <Objective />
            <Projects />
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
