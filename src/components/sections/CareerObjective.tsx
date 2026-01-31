
export function CareerObjective({ text }: { text: string }) {
  return (
    <section>
      <h2 className="text-lg font-bold border-b pb-1 mb-3">
        Career Objective
      </h2>
      <p className="text-gray-700 whitespace-pre-line">{text}</p>
    </section>
  );
}
