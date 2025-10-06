import { FaUniversity, FaSchool } from "react-icons/fa";
const Education = () => {
  const educationData = [
    {
      institution: "Jadavpur University [B.E.]",
      period: "2024 - 2028",
      details: ["Current CGPA: 9.02"],
      icon:FaUniversity ,
    },
    {
      institution: "R.P Vivekananda Vidyapith [10+2]",
      period: "2012 - 2024",
      details: ["10th grade percentage: 91%", "12th grade percentage: 88%"],
      icon: FaSchool,
    },
  ];

  return (
    <div id="Education" className="p-10 md:p-24">
      <h1 className={`text-2xl md:text-4xl  font-bold md:text-center`}>
        Education
      </h1>
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          {/* The main container for the timeline */}
          <div className="relative">
            {/* The vertical line */}
            <div className="absolute left-5 top-2 w-1 h-full bg-sky-500"></div>

            {/* Mapping over the education data to create timeline items */}
            {educationData.map((edu, index) => (
              <div key={index} className="relative pl-14 pb-12">
                {/* The Icon on the timeline */}
                <div className="absolute top-0 left-5 transform -translate-x-1/2">
                  <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center">
                    <edu.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* The Content */}
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-sky-600">
                    {edu.institution}
                  </h3>
                  <p className="text-sm  mt-1">{edu.period}</p>
                  <div className="mt-4 space-y-2">
                    {edu.details.map((detail, i) => {
                      const parts = detail.split(":");
                      return (
                        <p key={i} className="text-lg">
                          <span className="font-bold">{parts[0]}:</span>
                          {parts[1]}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Education;
