"use client";
import React, { useState } from 'react';

const AddBlogPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  
    // Construct the post data
    const postData = {
      title: title,  // Assuming 'title' is the state variable for the post title
      content: content,  // Assuming 'content' is the state variable for the post content
      // Add any other fields you need to send
    };
  
    try {
      // Send a POST request to your backend endpoint
      const response = await fetch('/api/posts', { // Replace '/api/posts' with your endpoint URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Handle the response data
      const data = await response.json();
      console.log('Post created:', data);
      // You may want to redirect to the post page or clear the form
  
    } catch (error) {
      console.error('Failed to create the post:', error);
      // Handle errors, such as by displaying a message to the user
    }
  };
  

  return (
    <div className="w-full h-full justify-center items-center py-24 px-24">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded h-40"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddBlogPost;
