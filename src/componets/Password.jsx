import React from 'react';
import { useForm } from "react-hook-form";

function Password() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    alert(`Welcome, ${data.username}!`);
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
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="text"
              id="username"
              name="Password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="Enter your password"
              autoComplete='off'
              {...register("Password", {
                required: "password is required",
                minLength: { value: 4, message: "Password must be at least 5 characters" },
                maxLengthLength: { value: 4, message: "Password must be at least 5 characters" },
                validate: value => /[0-9]/.test(value) || "Password must contain at least one number"

              })}
            />
            {errors.Password && (
              <span className="text-red-500 text-sm">{errors.Password.message}</span>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Sign in
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Forget password ?{' '}
          <a href="/recovery" className="text-red-600 hover:underline">
            Recover now
          </a>
        </p>
      </div>
    </div>
  );
}

export default Password;
