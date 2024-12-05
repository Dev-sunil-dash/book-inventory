import React, { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Loader from '../reusable-components/Loader';

const SignUp = () => {
    const [isAccepted, setIsAccepted] = useState(false);

    //use the AuthContxt
    const { createUser, loading, errorMsg } = useContext(AuthContext);

    // Initialize the navigate function
    const navigate = useNavigate();

    // Handle checkbox change to toggle acceptance state
    const handleCheckboxChange = (event) => {
        setIsAccepted(event.target.checked);
    };

    // Handle form submission
    const handleSignup = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value.trim();
        const password = form.password.value.trim();
        const confirmPassword = form['confirm-password'].value.trim();

        // Validate terms and conditions checkbox
        if (!isAccepted) {
            alert('Please accept the terms and conditions!');
            return;
        }

        // Validate password match
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            // Call createUser from AuthContext
            await createUser(email, password);
            alert('Account created successfully!');

            // Redirect to the login page
            navigate('/login');
        } catch (error) {
            console.error('Error creating user:', error.message);
            alert('Failed to create an account: ' + error.message);
        }
    };

    return (
        <section className="flex flex-col items-center justify-center bg-gray-50 h-screen">
            <h2 className="font-bold text-black text-3xl mb-12">Sign Up</h2>
            {loading ? (
                <div className="text-center">
                    <Loader />
                </div>
            ) : (
                <div className="w-full bg-white rounded-lg shadow sm:max-w-md p-6 space-y-4">
                    <form onSubmit={handleSignup} className="space-y-4">
                        {/* Email Input */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="name@company.com"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                            />
                        </div>

                        {/* Confirm Password Input */}
                        <div>
                            <label
                                htmlFor="confirm-password"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Confirm password
                            </label>
                            <input
                                type="password"
                                name="confirm-password"
                                id="confirm-password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                            />
                        </div>

                        {/* Terms and Conditions Checkbox */}
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="terms"
                                    aria-describedby="terms"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-500"
                                    checked={isAccepted}
                                    onChange={handleCheckboxChange}
                                />
                            </div>
                            {errorMsg && <div className="text-red-600 text-xs mb-4">{errorMsg}</div>}
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="text-gray-500">
                                    I accept the{' '}
                                    <a
                                        href="#"
                                        className="text-blue-700 font-medium hover:underline"
                                    >
                                        Terms and Conditions
                                    </a>
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Create an account
                        </button>

                        {/* Login Redirect */}
                        <p className="text-sm font-light text-gray-500">
                            Already have an account?{' '}
                            <a
                                href="#"
                                className="font-medium text-blue-700 hover:underline"
                            >
                                Login here
                            </a>
                        </p>
                    </form>
                </div>
            )}
        </section>
    );
};

export default SignUp;
