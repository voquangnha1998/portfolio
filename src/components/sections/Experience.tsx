import type { Experience } from "../../types/resume";

export function ExperienceSection({ items }: { items: Experience[] }) {
  return (
    <section>
      <h2 className="text-lg font-bold border-b pb-1 mb-4">
        Work Experience
      </h2>

      {items.map((exp) => (
        <div key={exp.company} className="mb-6">
          <p className="font-semibold">
            {exp.company} – {exp.role}
          </p>
          <p className="text-sm text-gray-500">{exp.period}</p>

          {exp.projects.map((p) => (
            <div key={p.name} className="ml-3 mt-2">
              <p className="font-medium">{p.name}</p>
              <p className="text-xs text-gray-500">
                Team size: {p.teamSize}
              </p>
              <p className="text-xs text-gray-500">
                Tech stack: {p.techStack}
              </p>
              <ul className="list-disc ml-5">
                {p.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
