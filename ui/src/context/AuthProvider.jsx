import React, { useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import AuthContext from './AuthContext';
import Loader from '../components/reusable-components/Loader';


// Initialize Firebase Authentication
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(""); // State to hold the error message


    const handleAuthError = (error) => {
        console.log(error, 11);
        switch (error.code) {
            case 'auth/user-not-found':
                return 'No user found with this email. Please sign up.';
            case 'auth/invalid-credential':
                return 'Invalid email or password. Please try again.';
            case 'auth/invalid-email':
                return 'Invalid email format.';
            default:
                return 'An unexpected error occurred. Please try again.';
        }
    };

    const createUser = (email, password) => {
        // Set loading to true during the async operation
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Set the user in state
                setUser(userCredential.user);

                // Done loading
                setLoading(false);
                return userCredential.user;
            })
            .catch((error) => {
                setErrorMsg(handleAuthError(error)); // Handle error using centralized function

                // Done loading
                setLoading(false);

                // Rethrow for the caller to handle
                throw error;
            });
    };


    const signInUser = (email, password) => {
        // Set loading to true during the sign-in operation
        setLoading(true);

        // Firebase function to sign in the user
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Set the user in state
                setUser(userCredential.user);

                // Set loading to false after successful sign-in
                setLoading(false);

                // Return the user object for further use
                return userCredential;
            })
            .catch((error) => {
                setErrorMsg(handleAuthError(error)); // Handle error using centralized function

                // Done loading after the operation fails
                setLoading(false);
                // Rethrow error for caller to handle
                throw error;
            });
    };

    //implement signout
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => {
                setUser(null);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error logging out:', error.message);
                setLoading(false);
                throw error;
            });
    }

    // Set up a listener to track the current auth state
    useEffect(() => {
        // Firebase function to track auth state changes
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            // Update the user state with current
            if (currentUser) {
                const email = currentUser.email;
                const username = email.split('@')[0]; // Extract username
                setUser({
                    uid: currentUser.uid,
                    email: email,
                    username: username, // Store username in context
                });
            } else {
                setUser(null);
            }
            // Finish loading
            setLoading(false);
        });

        // Cleanup the listener on component unmount
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user, // Current user
        loading, // Loading state
        createUser, // Create user function
        signInUser,     // Function to sign in an existing user
        signOutUser,  // Function to sign-out
        isAuthenticated: !!user, // Indicates if the user is logged in
        errorMsg, // Provide the errorMsg in context so components can use it
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {/* Only render children once loading is complete */}
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider