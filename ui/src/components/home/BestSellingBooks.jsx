import React, { useEffect, useState } from 'react'
import BookCards from './book-card/BookCards';

const BestSellingBooks = () => {
    const [favBooks, setFavBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8000/all-books")
            .then(response => {
                if (!response.ok) throw new Error("Failed to fetch");
                return response.json();
            })
            .then(data => {
                setFavBooks(data.slice(0,8));
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching books:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <BookCards books={favBooks} headline="Best Selling Books" />
    )
}

export default BestSellingBooks;