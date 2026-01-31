import './App.css'

import Section from "./components/Section"
import { profile, skills, experiences } from "./data/resume"

function App() {
  return (
    <div className="min-h-screen px-6 py-10">
      <header className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold">{profile.name}</h1>
        <p className="text-gray-400 mt-2">{profile.title}</p>
        <p className="text-gray-500 text-sm mt-1">
          {profile.location} • {profile.email}
        </p>
      </header>

      <main className="max-w-4xl mx-auto grid gap-10">
        <Section title="Skills">
          <div className="grid md:grid-cols-2 gap-4 text-gray-400">
            <div>
              <strong>Backend:</strong> {skills.backend.join(", ")}
            </div>
            <div>
              <strong>Frontend:</strong> {skills.frontend.join(", ")}
            </div>
            <div>
              <strong>Database:</strong> {skills.database.join(", ")}
            </div>
            <div>
              <strong>Cloud:</strong> {skills.cloud.join(", ")}
            </div>
          </div>
        </Section>

        <Section title="Work Experience">
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.company}>
                <h3 className="font-semibold text-lg">
                  {exp.role} — {exp.company}
                </h3>
                <p className="text-gray-500 text-sm mb-2">{exp.time}</p>
                <ul className="list-disc list-inside text-gray-400">
                  {exp.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      </main>

      <footer className="text-center text-gray-600 mt-16">
        © 2026 Vo Quang Nha
      </footer>
    </div>
  )
}

export default App
