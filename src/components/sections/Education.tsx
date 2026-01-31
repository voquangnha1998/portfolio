import type { Education } from "../../types/resume";

export function EducationSection({ items }: { items: Education[] }) {
  return (
    <section>
      <h2 className="text-lg font-bold border-b pb-1 mb-3">Education</h2>
      {items.map((edu) => (
        <div key={edu.school}>
          <p className="font-semibold">{edu.school}</p>
          <p className="text-gray-600">Major: {edu.major}</p>
          <p className="text-gray-600">GPA: {edu.gpa}</p>
        </div>
      ))}
    </section>
  );
}
