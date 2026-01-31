import type { Profile, Skills } from "../../types/resume";

type Props = {
  profile: Profile;
  skills: Skills;
};

export function Sidebar({ profile, skills }: Props) {
  return (
    <aside className="bg-gray-50 p-6 space-y-6 text-sm">
      <div className="text-center">
        <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 mb-4" />
        <h1 className="text-xl font-bold uppercase">{profile.name}</h1>
        <p className="text-gray-500">{profile.title}</p>
      </div>

      <section>
        <h2 className="font-semibold mb-2">Personal Info</h2>
        <ul className="space-y-1 text-gray-600">
          <li>Gender: {profile.gender}</li>
          <li>DOB: {profile.dob}</li>
          <li>Email: {profile.email}</li>
          <li>Phone: {profile.phone}</li>
          <li>Location: {profile.location}</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold mb-2">Skills</h2>
        {Object.entries(skills).map(([group, items]) => (
          <div key={group}>
            <p className="font-medium capitalize">{group}</p>
            <ul className="list-disc ml-4">
              {items.map((s: string | number, idx: number) => (
                <li key={typeof s === "string" || typeof s === "number" ? s : idx}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </aside>
  );
}
