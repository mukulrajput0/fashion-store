import React from "react";

const ProductGrid = ({ title, products }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="text-gray-500">₹{item.Price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No products found.</p>
      )}
    </div>
  );
};

export default ProductGrid;
