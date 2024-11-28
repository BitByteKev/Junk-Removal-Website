import { Truck, MapPin, CheckCircle } from "lucide-react";

function About() {
  return (
    <section id="about" className="py-16 bg-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-smooth">
        <h2 className="text-3xl font-extrabold text-center text-purple-900 mb-8">
          San Diego Haulers
        </h2>
        <p className="text-lg text-center text-purple-800 max-w-3xl mx-auto">
          San Diego Haulers is your trusted partner for all junk removal needs.
          With years of experience, a commitment to sustainability, and a
          customer-first approach, we ensure a seamless and satisfying junk
          removal experience every time.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: Truck,
              title: "Fast Service",
              description: "Same-day and next-day appointments available",
            },
            {
              icon: CheckCircle,
              title: "Licensed & Insured",
              description: "Your property is in safe hands",
            },
            {
              icon: MapPin,
              title: "Local Experts",
              description: "Serving our community with pride",
            },
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <feature.icon className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-purple-900">
                {feature.title}
              </h3>
              <p className="text-purple-800">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
