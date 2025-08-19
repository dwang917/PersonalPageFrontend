import { Link } from "react-router-dom";

function MainContent() {
  return (
  <div className="py-8">
  <section className="mt-6 flex flex-col items-center gap-4 text-center max-w-2xl mx-auto">
        <img
          src="/assets/photo.jpeg"
          alt="Daming Wang headshot"
          width="212"
          height="212"
          className="w-42 h-42 md:w-46 md:h-46 rounded-full object-cover shadow ring-1 ring-gray-200"
          loading="eager"
          decoding="async"
        />
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Daming Wang</h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Software Engineer, Builder, Lifelong Learner, Problem Solver
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
