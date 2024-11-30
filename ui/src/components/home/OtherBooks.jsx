import React, { useEffect, useState } from 'react'
import BookCards from './book-card/BookCards';

const OtherBooks = () => {
    const [favBooks, setFavBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8000/all-books")
            .then(response => {
                if (!response.ok) throw new Error("Failed to fetch");
                return response.json();
            })
            .then(data => {
                setFavBooks(data.slice(5,10));
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
        <BookCards books={favBooks} headline="Other Books" />
    )
}

export default OtherBooks;