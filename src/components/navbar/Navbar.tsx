function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
        <div className="text-2xl font-bold">Portfolio.</div>
        <div className="space-x-8">
          <a href="#home" className="text-teal-400">
            Home
          </a>
          <a href="#about" className="hover:text-teal-400">
            About
          </a>
          <a href="#services" className="hover:text-teal-400">
            Services
          </a>
          <a href="#portfolio" className="hover:text-teal-400">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-teal-400">
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
