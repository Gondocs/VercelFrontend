import React from 'react';
import useScrollAnimations from '../useScrollAnimations';

export default function Experience() {
  useScrollAnimations();
  return (
    <main className="py-8">
      <h1 className="text-3xl font-bold text-[#61dafb] mb-6 animate-slide-in-left">Experience</h1>
      <section className="w-[75%] max-w-4xl mx-auto bg-black">
        <div className="bg-black text-white rounded-xl my-4 p-6 shadow-lg animate-slide-in-up">
          <h2 className="text-xl font-bold text-white animate-slide-in-left">Frontend Developer</h2>
          <h3 className="text-white mb-2 animate-slide-in-right">Awesome Web Co. | 2022 - Present</h3>
          <ul className="list-disc ml-6">
            <li className="animate-slide-in-up">Developed and maintained modern React applications.</li>
            <li className="animate-slide-in-up">Collaborated with designers to create engaging UIs.</li>
            <li className="animate-slide-in-up">Optimized performance and accessibility.</li>
          </ul>
        </div>
        <div className="bg-black text-white rounded-xl my-4 p-6 shadow-lg animate-slide-in-up">
          <h2 className="text-xl font-bold text-white animate-slide-in-left">Web Development Intern</h2>
          <h3 className="text-white mb-2 animate-slide-in-right">Startup Hub | 2021 - 2022</h3>
          <ul className="list-disc ml-6">
            <li className="animate-slide-in-up">Assisted in building landing pages and dashboards.</li>
            <li className="animate-slide-in-up">Learned best practices in responsive design.</li>
          </ul>
        </div>
        <div className="bg-black text-white rounded-xl my-4 p-6 shadow-lg animate-slide-in-up">
          <h2 className="text-xl font-bold text-white animate-slide-in-left">BSc Computer Science</h2>
          <h3 className="text-white mb-2 animate-slide-in-right">University of Example | 2018 - 2021</h3>
          <ul className="list-disc ml-6">
            <li className="animate-slide-in-up">Graduated with honors.</li>
            <li className="animate-slide-in-up">Specialized in web technologies and UI/UX.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
