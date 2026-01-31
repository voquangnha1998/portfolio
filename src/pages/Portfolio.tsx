//import { resume } from "./../data/resume";
// import { ResumeLayout } from "./../components/layout/ResumeLayout";
// import { Sidebar } from "./../components/layout/Sidebar";
// import { CareerObjective } from "./../components/sections/CareerObjective";
// import { EducationSection } from "./../components/sections/Education";
// import { ExperienceSection } from "./../components/sections/Experience";

// export default function Portfolio() {
//   return (
//     <ResumeLayout>
//       <Sidebar
//         profile={resume.profile}
//         skills={resume.skills}
//       />

//       <main className="md:col-span-2 p-8 space-y-8">
//         <CareerObjective text={resume.careerObjective} />
//         <EducationSection items={resume.education} />
//         <ExperienceSection items={resume.experiences} />
//       </main>
//     </ResumeLayout>
//   );
// }

import { resume } from "./../data/resume";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-200 py-12 flex justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT COLUMN */}
        <aside className="space-y-6">
          {/* Avatar card */}
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="w-36 h-36 mx-auto rounded-full bg-gray-300 mb-4" />
            <h1 className="text-xl font-bold tracking-wide">
              {resume.profile.name}
            </h1>
            <p className="text-gray-500 text-sm uppercase">
              {resume.profile.title}
            </p>
          </div>

          {/* Personal info */}
          <div className="bg-white rounded-lg shadow p-6 text-sm">
            <ul className="space-y-2 text-gray-700">
              <li>👤 {resume.profile.gender}</li>
              <li>🎂 {resume.profile.dob}</li>
              <li>✉️ {resume.profile.email}</li>
              <li>📞 {resume.profile.phone}</li>
              <li>🌐 {resume.profile.website}</li>
              <li>📍 {resume.profile.location}</li>
            </ul>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-lg shadow p-6 text-sm">
            <h2 className="bg-gray-200 px-3 py-1 text-xs font-semibold uppercase mb-3">
              Skills
            </h2>
            {Object.entries(resume.skills).map(([group, items]) => (
              <div key={group} className="mb-3">
                <p className="font-semibold capitalize text-gray-700">
                  {group.replace(/([A-Z])/g, " $1")}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </aside>

        {/* RIGHT COLUMN */}
        <main className="md:col-span-2 space-y-6">
          {/* Education */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="bg-gray-200 px-3 py-1 text-xs font-semibold uppercase mb-3">
              Education
            </h2>
            {resume.education.map((edu) => (
              <div key={edu.school}>
                <p className="font-semibold">
                  {edu.school}
                </p>
                <p className="text-sm text-gray-700">
                  Major: {edu.major}
                </p>
                <p className="text-sm text-gray-700">GPA: {edu.gpa}</p>
              </div>
            ))}
          </div>

          {/* Career objective */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="bg-gray-200 px-3 py-1 text-xs font-semibold uppercase mb-3">
              Career Objective
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
              {resume.careerObjective}
            </p>
          </div>

          {/* Work experience */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="bg-gray-200 px-3 py-1 text-xs font-semibold uppercase mb-4">
              Work Experience
            </h2>

            {resume.experiences.map((exp) => (
              <div key={exp.company} className="mb-6">
                <p className="font-semibold text-gray-900">
                  Developer, {exp.company}
                </p>
                <p className="text-xs text-gray-500 mb-2">{exp.period}</p>

                {exp.projects.map((project, idx) => (
                  <div key={project.name} className="ml-4 mb-4">
                    <p className="font-semibold text-sm">
                      {idx + 1}. {project.name}
                    </p>
                    <p className="text-xs text-gray-600">
                      Team size: {project.teamSize}
                    </p>
                    <p className="text-xs text-gray-600 mb-1">
                      Tech stack: {project.techStack}
                    </p>
                    <ul className="ml-5 text-sm text-gray-700 space-y-1">
                      {project.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
