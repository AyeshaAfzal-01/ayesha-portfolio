import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: e.target.name.value,
          email: e.target.email.value,
          title: e.target.subject.value,
          message: e.target.message.value,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setEmailSubmitted(true);
      e.target.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send email.");
    }

    setLoading(false);
  };

  const inputClasses =
    "bg-offwhite dark:bg-dark-gray border border-gray-300 dark:border-[#33353F] text-dark dark:text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-1 focus:ring-primary";

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 pt-24 gap-8 relative font-body"
    >
      <div className="absolute top-3/4 -left-4 w-80 h-80 rounded-full bg-[radial-gradient(circle,_#5c2cb0,_transparent)] blur-2xl transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

      <div className="z-10">
        <h5 className="text-5xl font-bold text-dark font-display dark:text-white my-2">
          Let's <span className="text-primary">C</span>onnect
        </h5>

        <p className="text-gray-light mb-6 max-w-md">
          I'm always open to discussing new projects, ideas, or opportunities
          to collaborate. Feel free to reach out through this form or connect
          with me directly.
        </p>

        <div className="flex gap-5">
          <a
            href="https://github.com/AyeshaAfzal-01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-light hover:text-primary-border-light transition-colors duration-300"
          >
            <FaGithub size={32} />
          </a>

          <a
            href="https://www.linkedin.com/in/ayesha-afzal01/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-light hover:text-primary-border-light transition-colors duration-300"
          >
            <FaLinkedin size={32} />
          </a>

          <a
            href="mailto:ayesha.taisee1@gmail.com"
            className="text-gray-light hover:text-primary-border-light transition-colors duration-300"
          >
            <MdEmail size={34} />
          </a>
        </div>
      </div>

      <div>
        <form
          className="flex flex-col"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-dark dark:text-white block mb-1 text-sm font-medium"
            >
              Your Name
            </label>

            <input
              name="name"
              type="text"
              id="name"
              required
              autoComplete="off"
              className={inputClasses}
              placeholder="John Doe"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-dark dark:text-white block mb-1 text-sm font-medium"
            >
              Your Email
            </label>

            <input
              name="email"
              type="email"
              id="email"
              required
              autoComplete="off"
              className={inputClasses}
              placeholder="johndoe@gmail.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-dark dark:text-white block mb-1 text-sm font-medium"
            >
              Subject
            </label>

            <input
              name="subject"
              type="text"
              id="subject"
              required
              autoComplete="off"
              className={inputClasses}
              placeholder="Internship Opportunity"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-dark dark:text-white block mb-1 text-sm font-medium"
            >
              Message
            </label>

            <textarea
              name="message"
              id="message"
              rows={6}
              required
              className={inputClasses}
              placeholder="Let's talk about..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-primary hover:bg-primary-dark disabled:bg-primary-border-light text-white font-medium py-2.5 px-5 rounded-lg w-full transition-colors duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-3">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;