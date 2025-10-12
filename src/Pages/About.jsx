import React from "react";

const About = () => {
  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop",
    },
    {
      name: "Sophia Lee",
      role: "Head of Design",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    },
    {
      name: "Ryan Smith",
      role: "Marketing Lead",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold">TrendWear</span>, your
          trusted clothing store where fashion meets comfort. We bring you the
          latest trends with premium quality at affordable prices.
        </p>
      </div>

      {/* Our Story */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <img
          src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?w=800&h=600&fit=crop"
          alt="Our Story"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded in 2025, TrendWear started with a simple mission – to make
            trendy and high-quality clothing accessible to everyone. From a
            small store to an online platform, our journey has been all about
            passion, creativity, and customer trust.
          </p>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Our Mission & Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl shadow-sm bg-white text-center">
            <img
              src="https://images.unsplash.com/photo-1611055710009-0d44967d8c5d?w=200&h=200&fit=crop"
              alt="Quality"
              className="mx-auto mb-4 rounded-full w-20 h-20 object-cover"
            />
            <h3 className="font-bold text-xl mb-3">Quality</h3>
            <p className="text-gray-600">
              Every product is made with the best materials and craftsmanship.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm bg-white text-center">
            <img
              src="https://images.unsplash.com/photo-1580910051075-7dcf5d99379b?w=200&h=200&fit=crop"
              alt="Sustainability"
              className="mx-auto mb-4 rounded-full w-20 h-20 object-cover"
            />
            <h3 className="font-bold text-xl mb-3">Sustainability</h3>
            <p className="text-gray-600">
              We use eco-friendly practices to protect the environment.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm bg-white text-center">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=200&fit=crop"
              alt="Customer First"
              className="mx-auto mb-4 rounded-full w-20 h-20 object-cover"
            />
            <h3 className="font-bold text-xl mb-3">Customer First</h3>
            <p className="text-gray-600">
              Your satisfaction drives everything we do.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          {team.map((member, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gray-100 p-10 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-4">Be Part of Our Journey</h2>
        <p className="text-gray-600 mb-6">
          Explore our collections and join the TrendWear family today!
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default About;
