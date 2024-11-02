import React from 'react';
import { useForm } from "react-hook-form";

function Reset() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        alert(`Welcome, ${data.Recovery}!`);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">

                <h2 className="text-2xl font-bold text-center mb-4">RESET</h2>

                <p className='text-center'>Enter new password </p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2"
                            placeholder="Enter username"
                            autoComplete='off'
                            {...register("username", {
                                required: "username is required",

                            })}
                        />

                        <input
                            type="text"
                            id="password"
                            name="Password"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2"
                            placeholder="Enter password "
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
                        RESET
                    </button>
                </form>

            </div>
        </div>
    );
}

export default Reset;
