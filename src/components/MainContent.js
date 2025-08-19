import { Link } from "react-router-dom";

function MainContent() {
  return (
  <div>
  <section className="flex flex-col items-center gap-4 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Hi, I’m Daming.</h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Software engineer focused on embedded systems, Rust, and clean, reliable products.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 rounded-md bg-gray-900 text-white px-3 py-1.5 shadow hover:bg-gray-800 transition"
          >
            Learn more
            <span aria-hidden>→</span>
          </Link>
          <a
            href="https://github.com/dwang917"
            className="inline-flex items-center gap-1.5 rounded-md border border-gray-300 px-3 py-1.5 hover:bg-gray-50 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/daming-wang-0a9a8b1bb/"
            className="inline-flex items-center gap-1.5 rounded-md border border-gray-300 px-3 py-1.5 hover:bg-gray-50 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}

export default MainContent;
