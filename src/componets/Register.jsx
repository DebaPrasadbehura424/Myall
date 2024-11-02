import React, { useState } from 'react';
import { useForm } from "react-hook-form";

function Register() {
  const [dp, setDp] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    alert(`Username: ${data.username}\nPassword: ${data.password}`);
  };

  const handleDpChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDp(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <div className="flex justify-center mb-4">
          <label htmlFor="dp" className="cursor-pointer">
            <div className="rounded-full w-24 h-24 border-2 border-gray-300 flex items-center justify-center">
              {dp ? (
                <img src={dp} alt="Profile" className="rounded-full w-full h-full object-cover" />
              ) : (
                <span className="text-gray-400">Add DP</span>
              )}
            </div>
            <input
              type="file"
              id="dp"
              accept="image/*"
              className="hidden"
              onChange={handleDpChange}
            />
          </label>
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="Enter your username"
              autoComplete='off'
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <span className="text-red-500 text-sm">{errors.username.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="Enter your password"
              autoComplete='off'
              {...register("password", {
                required: "Password is required",
                minLength: { value: 4, message: "Password must be at least 4 characters" },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="Confirm your password"
              autoComplete='off'
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === document.getElementById("password").value || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
