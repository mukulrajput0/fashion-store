import React, { useState } from "react";

const Setting = () => {
  const [formData, setFormData] = useState({
    name: "Mukul Rajput",
    email: "mukulrajput@927.com",
    password: "",
    notifications: true,
    darkMode: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings saved successfully ✅");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8 text-center">Account Settings</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 space-y-8"
      >
        {/* Profile Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Profile Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-600">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-600">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Preferences
          </h2>
          <div className="flex items-center justify-between mb-4">
            <label className="text-gray-700">Enable Notifications</label>
            <input
              type="checkbox"
              name="notifications"
              checked={formData.notifications}
              onChange={handleChange}
              className="h-5 w-5 accent-blue-600"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-gray-700">Dark Mode</label>
            <input
              type="checkbox"
              name="darkMode"
              checked={formData.darkMode}
              onChange={handleChange}
              className="h-5 w-5 accent-blue-600"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default Setting;
