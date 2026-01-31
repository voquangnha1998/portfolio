import { type ReactNode } from "react";

export function ResumeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-200 py-10 flex justify-center">
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-3">
        {children}
      </div>
    </div>
  );
}
