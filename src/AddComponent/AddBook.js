import React, { useState } from 'react';
import './AddBook.css';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); 
  const [bookData, setBookData] = useState({
    name: '',
    author: '',
    id: '',
    numberOfPages: '',
    genre: '',
    publication: '',
    price: ''
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Book Data:', bookData);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add New Book</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={bookData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Author:</label>
                <input
                  type="text"
                  name="author"
                  value={bookData.author}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>ID:</label>
                <input
                  type="text"
                  name="id"
                  value={bookData.id}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Number of Pages:</label>
                <input
                  type="number"
                  name="numberOfPages"
                  value={bookData.numberOfPages}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Genre:</label>
                <input
                  type="text"
                  name="genre"
                  value={bookData.genre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Publication:</label>
                <input
                  type="text"
                  name="publication"
                  value={bookData.publication}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Price:</label>
                <input
                  type="number"
                  name="price"
                  value={bookData.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="modal-buttons">
                <button type="button" onClick={handleCancel} className="cancel-button">
                  Cancel
                </button>
                <button type="submit" className="add-button">
                  Add/Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddBook;
