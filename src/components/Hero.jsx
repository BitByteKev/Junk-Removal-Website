function Hero() {
  return (
    <div>
      <section id="home" className="bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl mb-4">
              San Diego Junk Removal Services
            </h1>
            <p className="text-xl mb-8">
              Fast, reliable, and eco-friendly junk removal for residential and
              commercial properties.
            </p>
            <a href="tel:6198414193">
              <button className="bg-purple-600 hover:bg-lime-700 text-white px-10 py-5 rounded">
                Schedule a pickup
              </button>
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src="/assets/image1.jpeg"
              alt="Junk removal truck"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
