import React, { useState } from 'react'

import {
  Button,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";

const UploadBook = () => {

  const bookCategories = [
    "Fiction",
    "Non-fiction",
    "Science-fiction",
    "Mistery",
    "Programming",
    "Fantacy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children books",
    "Travel",
    "Religion",
    "Cookbooks",
    "Diaries",
    "Educational",
    "Teaching",
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (e) => {
    setSelectedBookCategory(e.target.value)
  }

  // handle book submission
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const formData = event.target;

    // create FormData object
    const bookTitle = formData.bookTitle.value;
    const authorName = formData.authorName.value;
    const imageURL = formData.imageURL.value;
    const category = formData.category.value;
    const bookDescription = formData.bookDescription.value;
    const bookPDFURL = formData.bookPDFURL.value;
    const price = formData.price.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
      price
    }


    // const data = new FormData(formData);

    // send data to server
    fetch('http://localhost:8000/upload-book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookObj)
    })
      .then(response => response.json())
      .then(data => {
        alert('Successfully Data Uploaded', data);

        // clear form inputs
        formData.reset();
      })
      .catch((error) => {
        alert('Error:', error);
      });
  }

  return (
    <div className='px-4 my-8'>
      {/* heading */}
      <h2 className='font-bold text-center mb-10 text-3xl'>Upload a Book</h2>
      {/* uploading book form */}
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title:" />
            </div>
            <TextInput id="bookTitle" type="text" placeholder="Book Title" required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name:" />
            </div>
            <TextInput id="authorName" type="text" placeholder='Author Name' required />
          </div>
        </div>
        {/* second row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Image URL:" />
            </div>
            <TextInput id="imageURL" type="text" placeholder="Image URL" required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="category" value="Book Category:" />
            </div>
            <Select
              id="category"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
              className='w-full rounded'
            >
              {bookCategories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </Select>
          </div>
        </div>
        {/* 3rd row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookPDFURL" value="Book PDF URL:" />
            </div>
            <TextInput id="bookPDFURL" type="text" placeholder='Book PDF URL' required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price:" />
            </div>
            <TextInput id="price" type="text" placeholder="Price" required />
          </div>
        </div>
        {/* Book description */}
        <div className='flex gap-8'>
          <div className='lg:w-full'>
            <div className="mb-2 block">
              <Label htmlFor="bookDescription" value="Book Description:" />
            </div>
            <Textarea id="bookDescription" placeholder="Write a Book Description Here..." required rows={4} />
          </div>
        </div>
        {/* submit button */}
        <Button type="submit" className='w-full mt-8 bg-blue-700'>Submit</Button>
      </form>
    </div>
  )
}

export default UploadBook