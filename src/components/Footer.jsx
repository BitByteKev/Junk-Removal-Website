function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">San Diego Haulers</h3>
            <p className="text-sm">
              Professional junk removal services for residential and commercial
              properties.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">(619) 841-4193</p>
            <p className="text-sm">contact@sandiegohaulers.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-800 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} San Diego Haulers. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
