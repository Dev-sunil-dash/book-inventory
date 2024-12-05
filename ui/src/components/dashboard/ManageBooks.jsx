import React, { useEffect, useState } from 'react';
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const ManageBooks = () => {
    const [allBooks, setAllBooks] = useState([]);

    // Fetch all books from the API
    useEffect(() => {
        fetch('http://localhost:8000/all-books')
            .then(response => response.json())
            .then(data => setAllBooks(data));
    }, []);

    // Delete a book from the API
    const handleDeleteBook = (id) => {

        fetch(`http://localhost:8000/book/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete the book');
                }
                return response.json();
            })
            .then(() => {
                const updatedBooks = allBooks.filter(book => book._id !== id);
                setAllBooks(updatedBooks);
                alert("Book Deleted Successfully!")
            })
            .catch(error => {
                console.error('Error deleting the book:', error);
                alert("An error occurred while deleting the book.");
            });
    };

    return (
        <div className='px-4'>
            <h2 className='text-3xl font-bold text-center py-8'>Manage Books</h2>
            <Table className='lg:w-[1180px] text-center'>
                <Table.Head>
                    <Table.HeadCell>Sl No.</Table.HeadCell>
                    <Table.HeadCell>Book title</Table.HeadCell>
                    <Table.HeadCell>Author Name</Table.HeadCell>
                    <Table.HeadCell>Category</Table.HeadCell>
                    <Table.HeadCell>Price</Table.HeadCell>
                    <Table.HeadCell>Manage</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">{
                    allBooks.map((book, index) => (
                        <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>{index + 1}</Table.Cell>
                            <Table.Cell>{book.bookTitle}</Table.Cell>
                            <Table.Cell>{book.authorName}</Table.Cell>
                            <Table.Cell>{book.category}</Table.Cell>
                            <Table.Cell>{book.price}</Table.Cell>
                            <Table.Cell className='flex justify-around font-semibold text-xl hover:cursor-pointer'>
                                <Link to={`/admin/dashboard/edit-book/${book._id}`} >
                                    <CiEdit className='text-cyan-600' />
                                </Link>
                                <MdDelete onClick={() => handleDeleteBook(book._id)} className='text-red-500' />
                            </Table.Cell>
                        </Table.Row>
                    ))
                }
                </Table.Body>
            </Table>
        </div >
    )
}

export default ManageBooks