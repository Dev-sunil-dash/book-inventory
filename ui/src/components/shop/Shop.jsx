import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

const Shop = () => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [cart, setCart] = useState([]);
    const [sortOption, setSortOption] = useState("title");
    const [filterOption, setFilterOption] = useState("");

    // Fetch books from API
    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch("http://localhost:8000/all-books");
            const data = await response.json();
            setBooks(data);
            setFilteredBooks(data);
        };
        fetchBooks();
    }, []);

    // Handle Sorting
    const handleSort = (e) => {
        const option = e.target.value;
        setSortOption(option);

        const sortedBooks = [...filteredBooks].sort((a, b) => {
            if (option === "priceLowToHigh") return a.price - b.price;
            if (option === "priceHighToLow") return b.price - a.price;
            if (option === "title") return a.title.localeCompare(b.title);
            return 0;
        });
        setFilteredBooks(sortedBooks);
    };

    // Handle Filtering
    const handleFilter = (e) => {
        const option = e.target.value;
        setFilterOption(option);

        const filtered = books.filter((book) =>
            option === "" ? true : book.genre === option
        );
        setFilteredBooks(filtered);
    };

    // Add to Cart
    const addToCart = (book) => {
        setCart((prevCart) => [...prevCart, book]);
        alert(`${book.title} added to cart!`);
    };

    return (
        <div className="flex">
            {/* Left Sidebar for Sorting and Filtering */}
            <div className="w-1/6 p-4 min-h-screen bg-gray-100">
                <h3 className="font-bold text-lg mt-16 mb-4">Sort By</h3>
                <select
                    className="w-full p-2 border border-gray-300 rounded mb-6"
                    value={sortOption}
                    onChange={handleSort}
                >
                    <option value="title">Title</option>
                    <option value="priceLowToHigh">Price: Low to High</option>
                    <option value="priceHighToLow">Price: High to Low</option>
                </select>

                <h3 className="font-bold text-lg mb-4">Filter By Genre</h3>
                <select
                    className="w-full p-2 border border-gray-300 rounded"
                    value={filterOption}
                    onChange={handleFilter}
                >
                    <option value="">All</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Fantasy">Fantasy</option>
                </select>
            </div>

            {/* Right Section for Products */}
            <div className="w-5/6 p-4 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {filteredBooks.map((book) => (
                    <Link key={book.id} to={`/books/${book._id}`}>
                        <div
                            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
                        >
                            <img
                                src={book.imageURL}
                                alt={book.title}
                                className="w-screen h-48 object-cover mb-4"
                            />
                            <h3 className="font-bold text-lg">{book.bookTitle}</h3>
                            <p className="text-gray-600">{book.authorName}</p>
                            <p className="text-gray-800 font-semibold">&#8377;{book.price}</p>
                            <div className="flex justify-around">
                                <button
                                    className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition"
                                    onClick={() => addToCart(book)}
                                >
                                    Add to Cart
                                </button>
                                <button
                                    className=' bg-red-600 text-white px-4 py-2 rounded mt-4 hover:bg-red-700 transition'
                                    onClick={() => Navigate('/your-path')}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Shop;
