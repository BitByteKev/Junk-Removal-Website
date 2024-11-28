import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import axios from "axios"; // Install axios with: npm install axios

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    setLoading(true); // Start loading

    try {
      // Send form data to backend
      await axios.post("http://localhost:1000/submit-form", {
        name,
        email,
        message,
      });

      setFormSubmitted(true); // Show success message
      setLoading(false); // Stop loading
    } catch (err) {
      console.error("Error submitting the form", err);
      setError("Failed to submit the form. Please try again."); // Show error message
      setLoading(false); // Stop loading
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-purple-900 mb-12">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-900">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-6">
              Have questions or ready to schedule a pickup? Reach out to us!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-purple-600 mr-2" />
                <span className="text-purple-900">(619) 841-4193</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-purple-600 mr-2" />
                <span className="text-purple-900">
                  contact@sandiegohaulers.com
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-purple-600 mr-2" />
                <span className="text-purple-900">San Diego County</span>
              </div>
            </div>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              {formSubmitted ? (
                <div className="text-green-600 text-center">
                  <p className="text-xl font-semibold">
                    Thank you for your message!
                  </p>
                  <p>We will get back to you soon.</p>
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-purple-900 font-semibold mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-purple-900 font-semibold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-purple-900 font-semibold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    ></textarea>
                  </div>
                  {loading ? (
                    <div className="text-center text-purple-600">
                      <span>Loading...</span>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="w-full bg-purple-700 hover:bg-purple-400 text-white py-2 px-4 rounded-md"
                    >
                      Send Message
                    </button>
                  )}
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
