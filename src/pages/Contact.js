import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useScrollAnimations from "../useScrollAnimations";
import { useMediaQuery } from "react-responsive";

const contactInfo = {
  email: "gondocs.robert@gmail.com",
  github: "https://github.com/Gondocs",
  linkedin: "https://www.linkedin.com/in/róbert-göndöcs-578486280/",
};

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
        className="flex items-center gap-2 text-white hover:underline"
      >
        <img src="github-original.svg" alt="GitHub logo" className="w-6 h-6" />
        GitHub
      </a>
      <span>|</span>
      <a
        href={contactInfo.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white hover:underline"
      >
        <img src="linkedin.svg" alt="LinkedIn logo" className="w-6 h-6" />
        LinkedIn
      </a>
    </div>
  );
}

export default function Contact() {
  useScrollAnimations();

  const isMobile = useMediaQuery({ maxWidth: 810 });
  const form = useRef();
  const [formStatus, setFormStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ouid7wu",
        "template_s4rs0dc", // Correct template ID
        form.current,
        "tio4130Fx1YhSkdYA"
      )
      .then(
        () => {
          setFormStatus("SUCCESS");
        },
        (error) => {
          setFormStatus("FAILED");
          console.error("Email sending failed:", error.text);
        }
      );
  };

  return (
    <main className="pt-16">
      <section
        className={`mx-auto bg-black rounded-xl shadow-lg p-8 animate-slide-in-up${
          !isMobile ? " w-[75%]" : "w-[90%]"
        }`}
      >
        <h1
          className={` font-extrabold text-[#ffffff] mb-10 animate-slide-in-left text-center ${
            !isMobile ? "text-5xl" : "text-4xl"
          }`}
        >
          Kapcsolat
        </h1>
        <p className="text-white mb-4 animate-slide-in-up text-center text-2xl">
          Elérsz e-mailen:
          <br />
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-white underline animate-slide-in-up"
          >
            {contactInfo.email}
          </a>
        </p>
        <div className="w-full flex flex-col items-center">
          <ContactLinks className="animate-slide-in-up text-xl" />
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-3 bg-black text-white rounded-lg shadow-lg p-6 w-[100%] mx-auto"
        >
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Név"
              required
              className="w-full bg-[#181a1b] text-white border border-[#444] rounded px-4 py-2 focus:border-[#61dafb] outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email cím"
              required
              className="w-full bg-[#181a1b] text-white border border-[#444] rounded px-4 py-2 focus:border-[#61dafb] outline-none"
            />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              placeholder="Üzenet"
              rows={4}
              required
              className="w-full bg-[#181a1b] text-white border border-[#444] rounded px-4 py-2 focus:border-[#61dafb] outline-none"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Üzenet küldése"
              className="w-full bg-[#61dafb] text-[#181a1b] font-bold rounded px-4 py-2 mt-2 hover:bg-[#4ec6e6] transition cursor-pointer"
            />
          </div>
        </form>

        {formStatus === "SUCCESS" && (
          <p className="text-green-500 mt-4">Üzenet sikeresen elküldve!</p>
        )}
        {formStatus === "FAILED" && (
          <p className="text-red-500 mt-4">
            Hiba történt az üzenet küldésekor.
          </p>
        )}
      </section>
    </main>
  );
}
