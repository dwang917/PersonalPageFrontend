function Footer() {
    return (
      <footer className="p-8 max-w-4xl mx-auto border-t border-gray-700 bottom-0 mt-10">
        <a href="/assets/resume.pdf" 
           className="text-blue-400 hover:underline text-lg" 
           download="Daming Wang resume.pdf">
          Download my resume
        </a>
      </footer>
    );
  }
  
  export default Footer;
  