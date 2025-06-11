import React from 'react';

export default function Experience() {
  return (
    <main className="py-8">
      <h1 className="text-3xl font-bold text-[#61dafb] mb-6">Experience</h1>
      <section className="max-w-2xl mx-auto">
        <div className="bg-[#23272a] text-[#e0e0e0] rounded-xl my-4 p-6 shadow-lg">
          <h2 className="text-xl font-bold text-[#61dafb]">Frontend Developer</h2>
          <h3 className="text-[#b0b0b0] mb-2">Awesome Web Co. | 2022 - Present</h3>
          <ul className="list-disc ml-6">
            <li>Developed and maintained modern React applications.</li>
            <li>Collaborated with designers to create engaging UIs.</li>
            <li>Optimized performance and accessibility.</li>
          </ul>
        </div>
        <div className="bg-[#23272a] text-[#e0e0e0] rounded-xl my-4 p-6 shadow-lg">
          <h2 className="text-xl font-bold text-[#61dafb]">Web Development Intern</h2>
          <h3 className="text-[#b0b0b0] mb-2">Startup Hub | 2021 - 2022</h3>
          <ul className="list-disc ml-6">
            <li>Assisted in building landing pages and dashboards.</li>
            <li>Learned best practices in responsive design.</li>
          </ul>
        </div>
        <div className="bg-[#23272a] text-[#e0e0e0] rounded-xl my-4 p-6 shadow-lg">
          <h2 className="text-xl font-bold text-[#61dafb]">BSc Computer Science</h2>
          <h3 className="text-[#b0b0b0] mb-2">University of Example | 2018 - 2021</h3>
          <ul className="list-disc ml-6">
            <li>Graduated with honors.</li>
            <li>Specialized in web technologies and UI/UX.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
