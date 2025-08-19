function Footer() {
  return (
  <footer className="mt-10">
      <div className="max-w-5xl mx-auto px-8 py-10 flex items-center justify-between">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Daming Wang</p>
        <a
          href="/assets/resume.pdf"
          className="inline-flex items-center gap-1.5 rounded-full bg-gray-900 text-white px-3 py-1.5 shadow hover:bg-gray-800 transition"
          download="Daming Wang resume.pdf"
          aria-label="Download resume"
          title="Download resume"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path d="M12 3a1 1 0 011 1v8.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4A1 1 0 117.707 10.293L10 12.586V4a1 1 0 011-1z" />
            <path d="M5 20a1 1 0 100 2h14a1 1 0 100-2H5z" />
          </svg>
          <span className="hidden sm:inline">Resume</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
