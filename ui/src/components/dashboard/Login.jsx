import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import Loader from '../reusable-components/Loader';

const Login = () => {

    // Access signInUser from context
    const { signInUser, loading, errorMsg } = useContext(AuthContext);

    // Initialize the navigate function
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // Call signInUser with the provided email and password
        signInUser(email, password)
            .then((userCredential) => {
                // Extract the user from the userCredential object
                const user = userCredential.user;
                // console.log('Login successful:', user);
                alert('Login successful!');

                // Redirect to the dashboard or any other page
                navigate('/admin/dashboard');
            })
            .catch((error) => {
                // console.error('Error logging in:', error.message);
                console.error(error.message);
            });
    }

    return (
        <section className="flex flex-col items-center justify-center bg-gray-50 h-screen">
            <h2 className="font-bold text-black text-3xl mb-12">Login</h2>
            {loading ? (
                <Loader />
            ) :
                (
                    <div className="w-full bg-white rounded-lg shadow sm:max-w-md p-6 space-y-4">
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    required
                                />
                            </div>
                            {errorMsg && <div className="text-red-600 text-xs mb-4">{errorMsg}</div>}
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Login
                            </button>
                            <p className="text-sm font-light text-gray-500">
                                Don&apos;t have an account? <Link to={"/sign-up"} className="font-medium text-primary-600 hover:underline">Sign Up here</Link>
                            </p>
                        </form>
                    </div>
                )}
        </section>
    )
}

export default Login