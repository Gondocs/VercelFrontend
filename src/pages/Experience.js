import React from 'react';

export default function Experience() {
  return (
    <main className="py-8">
      <h1 className="text-3xl font-bold text-[#61dafb] mb-6">Experience</h1>
      <section className="w-[75%] max-w-4xl mx-auto bg-black">
        <div className="bg-black text-white rounded-xl my-4 p-6 shadow-lg">
          <h2 className="text-xl font-bold text-white">Frontend Developer</h2>
          <h3 className="text-white mb-2">Awesome Web Co. | 2022 - Present</h3>
          <ul className="list-disc ml-6">
            <li>Developed and maintained modern React applications.</li>
            <li>Collaborated with designers to create engaging UIs.</li>
            <li>Optimized performance and accessibility.</li>
          </ul>
        </div>
        <div className="bg-black text-white rounded-xl my-4 p-6 shadow-lg">
          <h2 className="text-xl font-bold text-white">Web Development Intern</h2>
          <h3 className="text-white mb-2">Startup Hub | 2021 - 2022</h3>
          <ul className="list-disc ml-6">
            <li>Assisted in building landing pages and dashboards.</li>
            <li>Learned best practices in responsive design.</li>
          </ul>
        </div>
        <div className="bg-black text-white rounded-xl my-4 p-6 shadow-lg">
          <h2 className="text-xl font-bold text-white">BSc Computer Science</h2>
          <h3 className="text-white mb-2">University of Example | 2018 - 2021</h3>
          <ul className="list-disc ml-6">
            <li>Graduated with honors.</li>
            <li>Specialized in web technologies and UI/UX.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
