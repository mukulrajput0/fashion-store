import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import FashionImg from "../assets/banner/Login_banner.jpg" // clothing store image


const LoginPage = () => {
  const [login, setLogin] = useState(true);
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const toggle = () => {
    setLogin((prev) => !prev);
    setFormdata({
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users") || "[]");

    if (login) {
      const user = users.find(
        (u) => u.email === formdata.email && u.password === formdata.password
      );
      if (user) {
        localStorage.setItem("loginuser", JSON.stringify(user));
        navigate("/");
      } else {
        alert("Invalid email or password!");
      }
    } else {
      if (
        !formdata.username ||
        !formdata.email ||
        !formdata.phone ||
        !formdata.password ||
        !formdata.confirmPassword
      ) {
        alert("Please fill in all fields");
        return;
      }
      if (formdata.password !== formdata.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      const userExists = users.some((u) => u.email === formdata.email);
      if (userExists) {
        alert("User already exists!");
        return;
      }
      users.push(formdata);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful!");
      setLogin(true);
    }
  };

  return (
    <div className="flex min-h-screen ">
      <div className="flex  w-full max-w-lg items-center justify-center bg-gray-50">
      {/* Left side image */}

      {/* <div className="hidden md:flex   object-cover"> */}
      
        <img
          src={FashionImg}
          alt="Fashion Banner"
          className="  h-230"
        />
      
      {/* Right side form */}
        <form
          onSubmit={handleSubmit}
          className=" shadow-xl rounded-2xl w-full max-w-md p-8 justify-center"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            {login ? "Welcome Back 👋" : "Join Our Store ✨"}
          </h2>

          {!login && (
            <div className="flex items-center border rounded-lg mb-4 px-3 py-2">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formdata.username}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>
          )}

          <div className="flex items-center border rounded-lg mb-4 px-3 py-2">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formdata.email}
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>

          {!login && (
            <div className="flex items-center border rounded-lg mb-4 px-3 py-2">
              <FaPhone className="text-gray-500 mr-2" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formdata.phone}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>
          )}

          <div className="flex items-center border rounded-lg mb-4 px-3 py-2">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formdata.password}
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>

          {!login && (
            <div className="flex items-center border rounded-lg mb-4 px-3 py-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formdata.confirmPassword}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-black text-white w-full py-3 rounded-lg hover:bg-gray-800 transition"
          >
            {login ? "Login" : "Signup"}
          </button>

          <p className="text-center mt-4 text-gray-600">
            {login ? "Don't have an account?" : "Already have an account?"}
          </p>
          <button
            type="button"
            onClick={toggle}
            className="block mx-auto text-blue-600 hover:underline"
          >
            {login ? "Signup here" : "Login here"}
          </button>
        </form>
      </div>
      </div>
    // </div>
  );
};

export default LoginPage;
