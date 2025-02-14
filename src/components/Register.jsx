

import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Register = () => {
  const location = useLocation();
  const panDetails = location.state?.panDetails.data || {}; // Extract PAN details if available

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone_number: "",
    password: "",
    confirmPassword: "",
    address1: "",
    address2: "",
    street: "",
    zip: "",
    city: "",
    state: "",
    country: "",
    pan_number: "",
    agreeToTerms: false,
  });

  useEffect(() => {
    if (panDetails) {
      setFormData((prev) => ({
        ...prev,
        firstName: panDetails.full_name_split?.[0] || "",
        lastName: panDetails.full_name_split?.[2] || "",
        email: panDetails.email || "",
        phone_number: panDetails.phone_number || "",
        pan_number: panDetails.pan_number || "",
        address1: panDetails.address?.line_1 || "",
        address2: panDetails.address?.line_2 || "",
        street: panDetails.address?.street_name || "",
        zip: panDetails.address?.zip || "",
        city: panDetails.address?.city || "",
        state: panDetails.address?.state || "",
        country: panDetails.address?.country || "India", // Defaulting to India
      }));
    }
  }, [panDetails]); // Re-run effect when `panDetails` changes

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/v1/user/register", {
        email: formData.email,
        username: formData.firstName + formData.lastName,
        password: formData.password,
        role: formData.role,
        full_name: formData.firstName + " " + formData.lastName,
        phone_number: formData.phone_number,
        address1: formData.address1,
        address2: formData.address2,
        street: formData.street,
        zip: formData.zip,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        pan_number: formData.pan_number,
      });

      console.log("Registration Successful:", response.data);
    } catch (error) {
      console.error("Error registering:", error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="rounded-lg shadow-sm border border-slate-200 my-[20px] py-[20px]">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row gap-5 justify-center">
          {/* Left Column */}
          <div className="w-[40%] px-[50px] flex flex-col gap-3">
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Last Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1">Mobile Number</label>
              <input
                type="text"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter Mobile Number"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1">PAN Number</label>
              <input
                type="text"
                name="pan_number"
                value={formData.pan_number}
                disabled
                className="w-full p-2 border border-neutral-200 bg-gray-100 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Create Password"
                required
              />
            </div>
          </div>
  
          {/* Right Column */}
          <div className="w-[40%] px-[50px] flex flex-col gap-3">
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1">Address Line 1</label>
              <input
                type="text"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
                className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Address Line 1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1">Address Line 2</label>
              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
                className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Address Line 2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1">Street Name</label>
              <input
                type="text"
                name="streetName"
                value={formData.streetName}
                onChange={handleChange}
                className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Street Name"
                required
              />
            </div>
            <div className="flex flex-row gap-3 w-full">
              <div className="w-[50%]">
                <label className="block text-sm font-medium text-neutral-600 mb-1">ZIP</label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="ZIP Code"
                  required
                />
              </div>
              <div className="w-[50%]">
                <label className="block text-sm font-medium text-neutral-600 mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="City"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="State"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Country"
                required
              />
            </div>
          </div>
        </div>
  
        <div className="w-full flex flex-row justify-center mt-7">
          <button type="submit" className="w-[30%] py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Register
          </button>
        </div>
      </form>
    </div>
  );
  
  
  
  
};

export default Register;
