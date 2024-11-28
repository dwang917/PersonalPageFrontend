import { Link } from "react-router-dom";

function Header() {
    return (
      <header className="p-8 border-b border-gray-700 max-w-4xl mx-auto pt-16">
        <h1 className="text-4xl font-bold">Daming Wang</h1>
        <nav className="mt-4 flex gap-4">

          <Link to="/" className="text-blue-400 hover:underline">Home</Link>

          <a href="https://github.com/dwang917" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Github</a>
          
          <a href="https://www.linkedin.com/in/daming-wang-0a9a8b1bb/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          
          <Link to="/contact" className="text-blue-400 hover:underline">Contact</Link>

        </nav>
      </header>
    );
}
  
export default Header;
  