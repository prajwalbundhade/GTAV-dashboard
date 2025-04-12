import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import Swal from 'sweetalert2';

const EditPost = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    state: '',
    imagePath: [], // Changed from string to array
    description: '',
    buyNow: '',
    ytLink: '',
    price: '',
    bookNow: '',
    newbuynow: ''
  });

  const [newImage, setNewImage] = useState(""); // Input field for new image URL
  // Fetch the post details on component mount
  useEffect(() => {
    const fetchPostData = async () => {
      console.log("Fetching post with ID:", id);
      try {
        const response = await axios.get(
          `https://gtavdashboard.craftifyproductions.com/api/posts/${id}`
        );

        // Ensure imagePath is an array
        const postData = response.data;
        postData.imagePath = Array.isArray(postData.imagePath) ? postData.imagePath : [];

        setFormData(postData);
      } catch (error) {
        console.error("Error fetching post data:", error);
        Swal.fire("Error", "Failed to fetch post data", "error");
      }
    };
    fetchPostData();
  }, [id]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // Handle image addition
  const addImage = () => {
    if (newImage.trim() !== "") {
      setFormData({ ...formData, imagePath: [...formData.imagePath, newImage] });
      setNewImage(""); // Clear input field
    }
  };

  // Handle image removal
  const removeImage = (index) => {
    const updatedImages = formData.imagePath.filter((_, i) => i !== index);
    setFormData({ ...formData, imagePath: updatedImages });
  };

  // Handle post update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`https://gtavdashboard.craftifyproductions.com/api/posts/${id}`, formData);
      Swal.fire('Success', 'Post updated successfully', 'success');
      navigate('/Admin/Posts'); // Redirect to the list of posts after successful update
    } catch (error) {
      console.error("Error updating post:", error);
      Swal.fire('Error', 'Failed to update post', 'error');
    }
  };

  return (
    <div
      style={{ width: '900px' }}
      className="shadow-md flex-row px-1 mt-5 items-center pt-2 pb-2 mb-2 justify-center rounded-lg ml-10 bg-white"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center hover:text-green-500">Edit Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-full p-1">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-lg">Title</label>
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
          <label htmlFor="category" className="text-lg">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="border rounded-lg p-2"
          >
            <option value="">Select a category</option>
            {["Cars", "Props"].map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="state" className="text-lg">State (Not required)</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="border rounded-lg p-2"
          >
            <option value="">Select a state</option>
            {["Cars", "Map", "Mod"].map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* Image Upload Section */}
        <div className="flex flex-col">
          <label className="text-lg">Picture URLs (Click on Add button if you want to add multiple images)</label>

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

          {/* Input field for new image URLs */}
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
              onClick={addImage}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Add
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg">Description</label>
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
          <label htmlFor="buyNow" className="text-lg">Buy Now Link</label>
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
          <label htmlFor="ytLink" className="text-lg">YouTube Video Link</label>
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
          <label htmlFor="price" className="text-lg">Mod Price ($)</label>
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
          <label htmlFor="bookNow" className="text-lg">Book Now (Write 'ok' to enable button)</label>
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
          <label htmlFor="newbuynow" className="text-lg">New Buy Now (Write 'ok' to enable button)</label>
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
            Update Post
          </button>
          <button
            type="button"
            onClick={() => setFormData({
              title: '',
              category: '',
              state: '',
              imagePath: [],
              description: '',
              buyNow: '',
              ytLink: '',
              price: '',
              bookNow: '',
              newbuynow: ''
            })}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};


export default EditPost;
