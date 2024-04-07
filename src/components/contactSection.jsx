import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_08rte1k", "template_e6h1gdu", form.current, {
        publicKey: "S2iEJcSCVzkSuF1bR",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto pt-20 pb-20 sm:pt-24 md:pt-24 lg:pt-32 md:flex lg:flex md:flex-col lg:flex-col"
    >
      <div className="flex flex-col pb-8 pt-8 bg-sky-50 rounded-2xl px-4 dark:bg-slate-800/80">
        <div className="text-center">
          <h2 className="font-semibold text-sky-500">Get in Touch</h2>
          <p className="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight mt-4 dark:text-slate-50">
            Contact Me
          </p>
        </div>

        <div className="mt-8">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-8 sm:px-20 lg:px-48 text-xs md:text-sm lg:text-sm"
          >
            <input
              className="p-3 rounded-2xl bg-transparent font-medium focus:outline-none focus:ring-1 focus:ring-slate-400 text-slate-900 dark:text-white placeholder-slate-600 dark:placeholder-slate-400 border border-slate-400"
              type="text"
              id="fname"
              name="fname"
              placeholder="Full Name"
            />
            <input
              className="p-3 rounded-2xl bg-transparent font-medium focus:outline-none focus:ring-1 focus:ring-slate-400 text-slate-900 dark:text-white placeholder-slate-600 dark:placeholder-slate-400 border border-slate-400"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />
            <textarea
              name="message"
              rows="7"
              class="p-3 rounded-2xl bg-transparent font-medium focus:outline-none focus:ring-1 focus:ring-slate-400 text-slate-900 dark:text-white placeholder-slate-600 dark:placeholder-slate-400 border border-slate-400 resize-none "
              placeholder="message"
              spellcheck="false"
            ></textarea>
            <input
              className="w-40 h-12 bg-slate-900 hover:bg-slate-700 text-white font-normal md:font-medium lg:font-medium text-xs md:text-sm lg:text-sm rounded-lg dark:bg-sky-500 dark:hover:bg-sky-600"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
