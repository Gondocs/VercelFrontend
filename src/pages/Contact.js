import React from "react";
import useScrollAnimations from "../useScrollAnimations";

const contactInfo = {
  email: "gondocs.robert@gmail.com",
  github: "https://github.com/Gondocs",
  linkedin: "https://www.linkedin.com/in/róbert-göndöcs-578486280/",
};

function ContactForm({ className }) {
  return (
    <form
      className={`flex flex-col gap-3 bg-black text-white rounded-lg shadow-lg p-6 w-[75%] ${
        className || ""
      }`.trim()}
    >
      <input
        type="text"
        placeholder="Név"
        required
        className="bg-[#181a1b] text-white border border-[#444] rounded px-4 py-2 focus:border-[#61dafb] outline-none"
      />
      <input
        type="email"
        placeholder="Email cím"
        required
        className="bg-[#181a1b] text-white border border-[#444] rounded px-4 py-2 focus:border-[#61dafb] outline-none"
      />
      <textarea
        placeholder="Üzenet"
        rows={4}
        required
        className="bg-[#181a1b] text-white border border-[#444] rounded px-4 py-2 focus:border-[#61dafb] outline-none"
      />
      <button
        type="submit"
        className="bg-[#61dafb] text-[#181a1b] font-bold rounded px-4 py-2 mt-2 hover:bg-[#4ec6e6] transition"
      >
        Üzenet küldése
      </button>
    </form>
  );
}

function ContactLinks({ className }) {
  return (
    <div
      className={`flex gap-4 bg-black text-white rounded-lg shadow-lg p-4 mt-4 ${
        className || ""
      }`.trim()}
    >
      <a
        href={contactInfo.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#61dafb] hover:underline"
      >
        GitHub
      </a>
      <span>|</span>
      <a
        href={contactInfo.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#61dafb] hover:underline"
      >
        LinkedIn
      </a>
    </div>
  );
}

export default function Contact() {
  useScrollAnimations();
  return (
    <main className="py-16">
      <section className="w-[75%] mx-auto bg-black rounded-xl shadow-lg p-8 animate-slide-in-up">
        <h1 className="text-5xl font-extrabold text-[#ffffff] mb-10 animate-slide-in-left text-center">
          Kapcsolat
        </h1>
        <p className="text-white mb-4 animate-slide-in-up text-center">
          Elérsz e-mailen:{" "}
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-white underline animate-slide-in-up"
          >
            {contactInfo.email}
          </a>
        </p>
        <div className="w-full flex flex-col items-center">
          <ContactForm className="animate-slide-in-up text-center" />
          <ContactLinks className="animate-slide-in-up" />
        </div>
      </section>
    </main>
  );
}
