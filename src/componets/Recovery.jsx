import React from 'react';
import { useForm } from "react-hook-form";

function Recovery() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    alert(`Welcome, ${data.Recovery}!`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <div className="flex justify-center mb-4">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="rounded-full w-24 h-24 border-2 border-gray-300"
          />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Hello again</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <p>Enter your 4 digits OTP  here...</p>
            <input
              type="text"
              id="username"
              name="Password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="OTP"
              autoComplete='off'
              {...register("Password", {
                required: "password is required",
                minLength: { value: 4, message: "Password must be at least 5 characters" },
                maxLengthLength: { value: 4, message: "Password must be at least 5 characters" },
                validate: value => /[0-9]/.test(value) || "Password must contain at least one number"

              })}
            />
            {errors.Recovery && (
              <span className="text-red-500 text-sm">{errors.Recovery.message}</span>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            UPDATE
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default Recovery;
