import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useScrollAnimations from "../useScrollAnimations";
import ReCAPTCHA from "react-google-recaptcha";

const contactInfo = {
  email: "gondocs.robert@gmail.com",
  github: "https://github.com/Gondocs",
  linkedin: "https://www.linkedin.com/in/róbert-göndöcs-578486280/",
};

export default function Contact() {
  useScrollAnimations();

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
    <main className="pt-20 pb-20 relative z-10">
      <section className="max-w-6xl mx-auto px-6">
        {/* Section Header - Centered */}
        <div className="text-center mb-16 animate-slide-in-down">
          <h1 className="text-6xl font-black gradient-text mb-6">Kapcsolat</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">Lépj velem kapcsolatba az alábbi űrlapon keresztül, vagy írj közvetlenül emailben. A csillaggal jelölt mezők kitöltése kötelező. Az üzenet elküldéséhez igazold, hogy nem vagy robot (reCAPTCHA).</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Column - Info */}
          <div className="animate-slide-in-left">
            <div className="gradient-card p-10 rounded-2xl h-full">
              <h2 className="text-3xl font-bold text-white mb-8">Vedd fel a kapcsolatot!</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Email</div>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-white hover:text-gray-300 transition-colors text-lg font-medium"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="section-divider my-6"></div>
                
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🔗</div>
                  <div className="flex-1">
                    <div className="text-gray-400 text-sm mb-3">Közösségi média</div>
                    <div className="flex flex-col gap-3">
                      <a
                        href={contactInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group"
                      >
                        <img
                          src="github-white.svg"
                          alt="GitHub logó (fehér)"
                          width={24}
                          height={24}
                          loading="lazy"
                          className="w-6 h-6 group-hover:scale-110 transition-transform"
                          style={{ filter: 'brightness(1000%)' }}
                        />
                        <span className="font-medium">GitHub</span>
                      </a>
                      <a
                        href={contactInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group"
                      >
                        <img
                          src="linkedin.svg"
                          alt="LinkedIn logo"
                          width={24}
                          height={24}
                          loading="lazy"
                          className="w-6 h-6 group-hover:scale-110 transition-transform"
                        />
                        <span className="font-medium">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="animate-slide-in-right">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="glow-border rounded-2xl p-10 space-y-6"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Küldj üzenetet</h2>
              <p className="text-gray-400 mb-4">Az alábbi űrlap kitöltésével közvetlenül üzenhetsz nekem. Minden mező kitöltése kötelező.</p>
              
              <div>
                <label htmlFor="name" className="block text-gray-400 text-sm mb-2 font-medium">Név <span className="text-red-400">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Teljes neved"
                  required
                  className="w-full bg-white/5 text-white border border-white/10 rounded-lg px-4 py-3 focus:border-white/30 focus:ring-2 focus:ring-white/10 outline-none transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-400 text-sm mb-2 font-medium">Email <span className="text-red-400">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@example.com"
                  required
                  className="w-full bg-white/5 text-white border border-white/10 rounded-lg px-4 py-3 focus:border-white/30 focus:ring-2 focus:ring-white/10 outline-none transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-400 text-sm mb-2 font-medium">Üzenet <span className="text-red-400">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Miben segíthetek?"
                  rows={5}
                  required
                  className="w-full bg-white/5 text-white border border-white/10 rounded-lg px-4 py-3 focus:border-white/30 focus:ring-2 focus:ring-white/10 outline-none transition-all duration-300 resize-none"
                />
              </div>
              
              <div className="flex justify-center z-20">
                <ReCAPTCHA
                  sitekey={process.env.REACT_APP_RECAPTCHA_SITE}
                  onChange={handleCaptchaChange}
                  theme="dark"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-black font-bold rounded-lg px-6 py-4 hover:bg-gray-200 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] shadow-lg hover:shadow-white/20"
                aria-label="Üzenet elküldése gombra kattintva küldheted el az űrlapot"
              >
                Üzenet elküldése →
              </button>
            </form>

            {formStatus === "SUCCESS" && (
              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center font-semibold animate-slide-in-up">
                ✓ Az üzeneted sikeresen elküldve! Hamarosan felveszem veled a kapcsolatot.
              </div>
            )}
            {formStatus === "FAILED" && (
              <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center font-semibold animate-slide-in-up">
                ✗ Hiba történt az üzenet küldésekor. Kérlek, próbáld meg újra később vagy írj közvetlenül emailben.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
