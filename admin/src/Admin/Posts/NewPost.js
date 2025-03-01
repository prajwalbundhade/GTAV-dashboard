import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import Domain from '../../Api/Api';
import { AuthToken } from '../../Api/Api';
import Swal from 'sweetalert2';

function AddPost() {
  const [formData, setFormData] = useState({
    index: '1',
    title: '',
    category: '',
    state: '',
    imagePath: [],  // Change to an array
    description: '',
    buyNow: '',
    ytLink: '',
    price: '',
    bookNow: '',
    newbuynow: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [newImage, setNewImage] = useState("");

const handleImageChange = () => {
  if (newImage.trim() !== "") {
    setFormData({ ...formData, imagePath: [...formData.imagePath, newImage] });
    setNewImage(""); // Clear input after adding
  }
};
  
  const removeImage = (index) => {
    const updatedImages = formData.imagePath.filter((_, i) => i !== index);
    setFormData({ ...formData, imagePath: updatedImages });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    axios.post("https://gtavdashboard.craftifyproductions.com/api/posts/new", formData, {
        headers: {
          Authorization: 'Bearer ' + AuthToken(),
        },
      })
      .then((response) => {
        Swal.fire({
          icon: 'success',
          title: 'Post Created',
          html: `
            Title: ${formData.title}<br>
            Picture URL: ${formData.imagePath}<br>
            Description: ${formData.description}<br>
            Category: ${formData.category}<br>
            State: ${formData.state}
          `,
        });
        handleClear();
      })
      .catch((error) => {
        console.error('Error creating post:', error);
        Swal.fire({
          icon: 'error',
          title: 'Post Creation Failed',
          text: error.response ? error.response.data.message : 'An error occurred.',
        });
      });
  };

  const handleClear = () => {
    setFormData({
     title: '',
    category: '',
    state: '',
    imagePath: [],  // Change to an array
    description: '',
    buyNow: '',
    ytLink: '',
    price: '',
    bookNow: '',
    newbuynow: ''
    });
  };

  return (
    <div
      style={{ width: '900px' }}
      className="shadow-md flex-row px-1 mt-5 items-center pt-2 pb-2 mb-2 justify-center rounded-lg ml-10 bg-white"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center hover:text-green-500">Add New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-full p-1">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-lg">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="border rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col">
  <label htmlFor="category" className="text-lg">
    Category
  </label>
  <select
    id="category"
    name="category"
    value={formData.category}
    onChange={handleChange}
    required
    className="border rounded-lg p-2"
  >
    <option value="">Select a category</option>
    {["Minecraft But Mods & Plugins", "Premium Mods & Plugins", "Trending Packages", "New Models", "Discounted Mods"].map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ))}
  </select>
</div>


        <div className="flex flex-col">
          <label htmlFor="state" className="text-lg">
            State
          </label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="border rounded-lg p-2"
          >
            <option value="">Select a state</option>
            {["Mod", "Plugin", "Datapack", "Package"].map((state, index) => (
      <option key={index} value={state}>
        {state}
      </option>
    ))}
          </select>
        </div>

        <div className="flex flex-col">
  <label htmlFor="imagePath" className="text-lg">
    Picture URLs (Click on Add button if you want to add multiple images)
  </label>

  {/* Display existing images */}
  {formData.imagePath.length > 0 && (
    <div className="mt-2 space-y-2">
      {formData.imagePath.map((img, index) => (
        <div key={index} className="flex items-center space-x-2">
          <input type="text" value={img} readOnly className="border rounded-lg p-2 w-full" />
          <button
            type="button"
            onClick={() => removeImage(index)}
            className="bg-red-500 text-white px-3 py-1 rounded-lg"
          >
            X
          </button>
        </div>
      ))}
    </div>
  )}

  {/* Input field to add new image URLs */}
  <div className="flex items-center space-x-2 mt-2">
    <input
      type="text"
      placeholder="Enter image URL"
      value={newImage}
      onChange={(e) => setNewImage(e.target.value)}
      className="border rounded-lg p-2 w-full"
    />
    <button
      type="button"
      onClick={handleImageChange}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg"
    >
      Add
    </button>
  </div>
</div>


        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="border rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="buyNow" className="text-lg">
            Buy Now Link
          </label>
          <input
            type="text"
            id="buyNow"
            name="buyNow"
            value={formData.buyNow}
            onChange={handleChange}
            className="border rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="ytLink" className="text-lg">
            YouTube Video Link
          </label>
          <input
            type="text"
            id="ytLink"
            name="ytLink"
            value={formData.ytLink}
            onChange={handleChange}
            className="border rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="price" className="text-lg">
            Mod Price ($)
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="border rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="bookNow" className="text-lg">
            Book Now (Write 'ok' to enable button)
          </label>
          <input
            type="text"
            id="bookNow"
            name="bookNow"
            value={formData.bookNow}
            onChange={handleChange}
            className="border rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="newbuynow" className="text-lg">
            New Buy Now (Write 'ok' to enable button)
          </label>
          <input
            type="text"
            id="newbuynow"
            name="newbuynow"
            value={formData.newbuynow}
            onChange={handleChange}
            className="border rounded-lg p-2"
          />
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

function Add() {
  return <AdminLayout Content={<AddPost />} />;
}

export default Add;
