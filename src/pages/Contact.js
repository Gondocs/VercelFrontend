import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useScrollAnimations from "../useScrollAnimations";
import { useMediaQuery } from "react-responsive";
import ReCAPTCHA from "react-google-recaptcha";

const contactInfo = {
  email: "gondocs.robert@gmail.com",
  github: "https://github.com/Gondocs",
  linkedin: "https://www.linkedin.com/in/róbert-göndöcs-578486280/",
};

function ContactLinks({ className }) {
  return (
    <div
      className={`flex gap-4 gradient-card rounded-lg shadow-lg p-4 mt-4 ${
        className || ""
      }`.trim()}
    >
      <a
        href={contactInfo.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
      >
        <img
          src="github-original.svg"
          alt="GitHub logo"
          width={24}
          height={24}
          loading="lazy"
          className="w-6 h-6"
        />
        GitHub
      </a>
      <span className="text-gray-500">|</span>
      <a
        href={contactInfo.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
      >
        <img
          src="linkedin.svg"
          alt="LinkedIn logo"
          width={24}
          height={24}
          loading="lazy"
          className="w-6 h-6"
        />
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
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Kérlek igazold, hogy nem vagy robot (reCAPTCHA)");
      return;
    }
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
    <main className="pt-16 pb-20 relative">
      <section
        className={`mx-auto glow-border rounded-xl shadow-lg p-10 animate-slide-in-up${
          !isMobile ? " w-[75%]" : "w-[90%]"
        }`}
      >
        <h1
          className={`font-extrabold gradient-text mb-10 animate-slide-in-left text-center ${
            !isMobile ? "text-6xl" : "text-4xl"
          }`}
        >
          Kapcsolat
        </h1>
        <p className="text-gray-300 mb-6 animate-slide-in-up text-center text-2xl">
          Elérsz e-mailen:
          <br />
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-primary hover:text-accent underline animate-slide-in-up transition-colors duration-300"
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
          className="flex flex-col gap-4 gradient-card rounded-lg shadow-lg p-8 w-[100%] mx-auto mt-8"
        >
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Név"
              required
              className="w-full bg-gray-900/50 text-white border border-primary/30 rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all duration-300"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email cím"
              required
              className="w-full bg-gray-900/50 text-white border border-primary/30 rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all duration-300"
            />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              placeholder="Üzenet"
              rows={4}
              required
              className="w-full bg-gray-900/50 text-white border border-primary/30 rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all duration-300 resize-none"
            />
          </div>
          <div className="flex justify-center my-2">
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE}
              onChange={handleCaptchaChange}
            />
          </div>
          <div>
            <input
              type="submit"
              value="Üzenet küldése"
              className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg px-6 py-3 mt-2 hover:from-accent hover:to-primary transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-primary/50"
            />
          </div>
        </form>

        {formStatus === "SUCCESS" && (
          <p className="text-green-400 mt-6 text-center font-semibold animate-slide-in-up">✓ Üzenet sikeresen elküldve!</p>
        )}
        {formStatus === "FAILED" && (
          <p className="text-red-400 mt-6 text-center font-semibold animate-slide-in-up">
            ✗ Hiba történt az üzenet küldésekor.
          </p>
        )}
      </section>
    </main>
  );
}
