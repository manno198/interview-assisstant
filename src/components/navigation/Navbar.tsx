
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const role = location.pathname.includes("student") ? "student" : "educator";

  const navLinks = [
    { name: "Dashboard", path: `/${role}/dashboard` },
    { name: "Profile", path: `/${role}/profile` },
    { name: "Reports", path: `/${role}/reports` },
    { name: "Schedule", path: `/${role}/schedule` },
  ];

  return (
    <nav className="glass-card sticky top-4 mx-4 z-50 px-6 py-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-foreground">
          Interview Insight
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${
                location.pathname === link.path ? "active" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/" className="btn-secondary">
            Logout
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden pt-4 pb-2 animate-fade-down">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${
                  location.pathname === link.path ? "active" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/"
              className="btn-secondary text-center"
              onClick={() => setIsOpen(false)}
            >
              Logout
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
