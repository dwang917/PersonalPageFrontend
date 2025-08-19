import React from "react";

function Contact() {
  return (
    <div className="py-10">
      <section className="mt-8">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <p className="text-lg mb-2">
          Email: <a href="mailto:your-email@example.com" className="text-blue-500">damingwang917@gmail.com</a>
        </p>
        <p className="text-lg">
          Phone: <a href="tel:+1234567890" className="text-blue-500">+1(720)-220-8416</a>
        </p>
      </section>
    </div>
  );
}

export default Contact;
