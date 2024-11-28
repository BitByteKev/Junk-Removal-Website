import { CheckCircle } from "lucide-react";

function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-black mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Residential Junk Removal",
              description:
                "We clear out homes, garages, and yards, leaving your space clutter-free.",
            },
            {
              title: "Commercial Junk Removal",
              description:
                "Office cleanouts, construction debris removal, and more for businesses.",
            },
            {
              title: "Eco-Friendly Disposal",
              description:
                "We prioritize recycling and donate usable items to minimize landfill impact.",
            },
          ].map((service, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
