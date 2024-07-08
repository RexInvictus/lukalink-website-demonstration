"use client";
import React, { useState } from "react";
import axios from "axios";
import { DROPDOWN_ITEMS } from "../constants";

const ContactPageSection = () => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    budget: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSent(true);
      console.log(formData);
      const response = await axios.post(
        "https://7b79oni0g1.execute-api.eu-west-2.amazonaws.com/default/email_from_website_contact",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch {}
  };

  return (
    <div className="bg-white min-h-[500px] rounded-lg shadow-lg mt-2 flex flex-wrap p-6">
      {sent ? (
        <h1 className="font-bold text-2xl">
          Your enquiry has been sent! We will get back to you soon.
        </h1>
      ) : (
        <form className="w-full p-3 relative" onSubmit={handleSubmit}>
          <p className="mb-3 opacity-40 text-sm absolute right-0 top-0">
            <span className="opacity-90 text-red-500">*</span> indicates a
            required value.
          </p>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name <span className="opacity-90 text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email <span className="opacity-90 text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone <span className="opacity-90 text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="website"
            >
              Current Website URL
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Budget <span className="opacity-90 text-red-500">*</span>
            </label>
            <div className="flex flex-wrap">
              <label className="mr-4">
                <input
                  type="radio"
                  name="budget"
                  value="under-500"
                  checked={formData.budget === "under-500"}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                Under £500
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  name="budget"
                  value="500-1000"
                  checked={formData.budget === "500-1000"}
                  onChange={handleChange}
                  className="mr-2"
                />
                £500 to £1,000
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  name="budget"
                  value="5000-10000"
                  checked={formData.budget === "5000-10000"}
                  onChange={handleChange}
                  className="mr-2"
                />
                £1,000 to £5,000
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  name="budget"
                  value="5000+"
                  checked={formData.budget === "5000+"}
                  onChange={handleChange}
                  className="mr-2"
                />
                £5,000+
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="service"
            >
              Which service do you need help with?{" "}
              <span className="opacity-90 text-red-500">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select a service</option>
              {DROPDOWN_ITEMS.map((item) => (
                <option value={item.name} key={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Additional Comments
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactPageSection;
