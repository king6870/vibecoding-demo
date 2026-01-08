import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to Our Business
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Your trusted partner for excellence and innovation
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                href="/people"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Meet Our Team
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Highlight Card 1 */}
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Years Experience</h3>
              <p className="text-gray-600">
                Delivering exceptional results since our founding
              </p>
            </div>

            {/* Highlight Card 2 */}
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Happy Clients</h3>
              <p className="text-gray-600">
                Trusted by businesses worldwide
              </p>
            </div>

            {/* Highlight Card 3 */}
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support Available</h3>
              <p className="text-gray-600">
                Always here when you need us
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Our Business
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              We are dedicated to providing top-tier services and solutions that help our clients succeed. 
              Our team of experts brings years of experience and a passion for excellence to every project.
            </p>
            <p className="text-lg text-gray-700">
              Whether you're looking for innovative solutions or reliable partnership, 
              we're here to support your goals and drive your success forward.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
