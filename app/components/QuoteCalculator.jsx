"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const serviceOptions = [
  { value: "", label: "Which service are you interested in?" },
  { value: "web_design", label: "Web Design" },
  { value: "custom_software", label: "Custom Software Development" },
  { value: "digital_marketing", label: "Digital Marketing" },
];

const subServiceOptions = {
  web_design: [
    { value: "", label: "Which subservice are you interested in?" },
    {
      value: "business_website",
      label: "Business Website",
      options: ["Fixed Rate", "Monthly"],
      requiresInput: true,
      inputLabel: "Approx. number of pages",
    },
    {
      value: "ecommerce",
      label: "E-commerce",
      options: ["Fixed Rate", "Monthly"],
      requiresInput: true,
      inputLabel: "Approx. number of products",
    },
    { value: "web_apps", label: "Web Apps" },
  ],
  custom_software: [
    { value: "", label: "Which subservice are you interested in?" },

    { value: "custom_software", label: "Custom Software" },
    { value: "mobile_apps", label: "Mobile Apps" },
    { value: "saas_solutions", label: "SaaS Solutions" },
  ],
  digital_marketing: [
    { value: "", label: "Which subservice are you interested in?" },

    { value: "seo", label: "SEO" },
    { value: "content_marketing", label: "Content Marketing" },
    { value: "social_media", label: "Social Media Management" },
  ],
};

const QuoteCalculator = ({ onClose }) => {
  const [price, setPrice] = useState(0);
  const [selectedService, setSelectedService] = useState("");
  const [selectedSubService, setSelectedSubService] = useState("");
  const [inputValue, setInputValue] = useState(0);
  const [rateType, setRateType] = useState("Fixed Rate");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (selectedSubService === "business_website") {
      if (inputValue <= 5) {
        const newPrice = inputValue * (rateType === "Monthly" ? 50 : 500);
        if (newPrice >= 0) {
          setPrice(newPrice);
        } else {
          setPrice(0);
        }
      } else if (inputValue !== "") {
        const newPrice =
          5 * (rateType === "Monthly" ? 50 : 500) +
          (inputValue - 5) * (rateType === "Monthly" ? 10 : 100);
        if (newPrice >= 0) {
          setPrice(newPrice);
        } else {
          setPrice(0);
        }
      }
    } else {
      setPrice(undefined);
    }
  }, [inputValue, selectedSubService, rateType]);

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
    setSelectedSubService("");
    setInputValue(0);
    setPrice(0);
    setRateType("Fixed Rate");
  };

  const handleSubServiceChange = (e) => {
    setSelectedSubService(e.target.value);
    setInputValue(0);
    setPrice(0);
    setRateType("Fixed Rate");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleRateTypeChange = (e) => {
    setRateType(e.target.value);
  };

  const shouldShowInput = subServiceOptions[selectedService]?.find(
    (option) => option.value === selectedSubService && option.requiresInput
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    budget: "",
    service: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
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
      console.log(response);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 font-plex-sans text-black flex justify-center items-center z-50"
      onClick={handleBackgroundClick}
    >
      <div className="bg-[#828476] rounded-lg shadow-lg w-3/4 max-w-lg overflow-y-auto">
        <div className="bg-off-white p-8">
          <div className="flex items-center">
            <Image
              src="/calculator.svg"
              width={30}
              height={30}
              className="-mt-4 -ml-1 mr-1"
              alt="calculator"
            />
            <h2 className="text-2xl text-gray-800 font-digital font-bold mb-4 tracking-tight">
              Quote Calculator
            </h2>
          </div>
          <p className="opacity-50 -mt-2 mb-6 text-sm">
            <span className="opacity-100 font-bold">Note: </span>Due to the
            highly customised services we offer, these quotes are only
            indicative. This calculator also won&#39;t be able to provide quotes for
            some of our services, such as custom software development, as we
            would need to know the specifics of your request. For an accurate
            quote please{" "}
            <a className="text-blue-800 opacity-100 font-bold" href="/contact">
              contact us.
            </a>
          </p>
          <div className="bg-[#90927D] mb-6 bg-opacity-50 w-full h-10 text-right items-center flex py-10 justify-end">
            <p className="mr-3 text-2xl text-black font-digital">
              {price === undefined ? "undefined" : `£${price.toFixed(2)}`}
            </p>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 mb-2" htmlFor="service">
              Service
            </label>
            <select
              id="service"
              value={selectedService}
              onChange={handleServiceChange}
              className="w-full p-2 border rounded"
            >
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {selectedService && (
            <div className="mt-4">
              <label className="block text-gray-700 mb-2" htmlFor="sub-service">
                Sub-Service
              </label>
              <select
                id="sub-service"
                value={selectedSubService}
                onChange={handleSubServiceChange}
                className="w-full p-2 border rounded"
              >
                {subServiceOptions[selectedService].map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          )}
          {shouldShowInput && (
            <div className="mt-4">
              <label className="block text-gray-700 mb-2" htmlFor="inputField">
                {
                  subServiceOptions[selectedService].find(
                    (option) => option.value === selectedSubService
                  )?.inputLabel
                }
              </label>
              <input
                type="number"
                id="inputField"
                value={inputValue}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                min={0}
              />
            </div>
          )}
          {shouldShowInput && (
            <div className="mt-4">
              <label className="block text-gray-700 mb-2" htmlFor="rateType">
                Rate Type
              </label>
              <select
                id="rateType"
                value={rateType}
                onChange={handleRateTypeChange}
                className="w-full p-2 border rounded"
              >
                {subServiceOptions[selectedService]
                  .find((option) => option.value === selectedSubService)
                  ?.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
              </select>
            </div>
          )}
        </div>
        <div className="flex p-8 flex-col items-center text-center">
          {sent ? (
            <h1>Thanks for your enquiry! We will get back to you soon.</h1>
          ) : (
            <>
              <div className="w-3/4">
                <label
                  className="block opacity-80 font-bold mb-2 text-lg"
                  htmlFor="contactDetails"
                >
                  Want an accurate quote? Contact us
                </label>
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="w-full p-2 border rounded"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email or Phone Number"
                    className="w-full p-2 border rounded"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-4">
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  onClick={handleSubmit}
                >
                  Send Enquiry
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteCalculator;
