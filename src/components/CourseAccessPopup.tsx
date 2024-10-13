import React, { useState } from 'react';

interface CourseAccessPopupProps {
  onClose: () => void;
}

const CourseAccessPopup: React.FC<CourseAccessPopupProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    try {
      console.log('Sending request to /api/save-user');
      const response = await fetch('/api/save-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response received:', response);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to save user data');
      }

      console.log('User data saved successfully');

      // Redirect to the Flutterwave payment link
      console.log('Redirecting to payment link');
      window.location.href = 'https://sandbox.flutterwave.com/pay/awjswnyibkpj';
    } catch (error) {
      console.error('Error submitting form:', error);
      // TODO: Show error message to user
      alert('An error occurred while submitting the form. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-navy-blue p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6">
          The Complete Native Ads Arbitrage Course
        </h2>
        <ul className="text-white mb-6">
          <li>• Get Free Access To Premium Plugins For Course Materials</li>
          <li>• How to setup Manage Account AdX</li>
          <li>• Full Lifetime Access</li>
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 rounded"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded font-semibold text-lg hover:bg-red-700 transition duration-300"
          >
            GET ACCESS TO COURSE HERE
          </button>
        </form>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default CourseAccessPopup;
