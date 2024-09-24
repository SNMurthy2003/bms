import React,{useState} from 'react'
import './Home.css'
import delete_icon from '../Assets/delete.png'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../AddComponent/AddBook.css'
const Home = () => {
    const [Books,setBooks]=useState([    
        {
          "id": 158496,
          "name": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "number_of_pages": 324,
          "genre": "Fiction",
          "publications": "J.B. Lippincott & Co.",
          "price": 18.99
        },
        {
          "id": 525616,
          "name": "1984",
          "author": "George Orwell",
          "number_of_pages": 328,
          "genre": "Dystopian, Political Fiction",
          "publications": "Secker & Warburg",
          "price": 14.99
        },
        {
          "id": 548953,
          "name": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "number_of_pages": 180,
          "genre": "Tragedy",
          "publications": "Charles Scribner's Sons",
          "price": 10.99
        },
        {
          "id": 948644,
          "name": "Moby Dick",
          "author": "Herman Melville",
          "number_of_pages": 585,
          "genre": "Adventure, Epic",
          "publications": "Richard Bentley",
          "price": 12.99
        },
        {
          "id": 486845,
          "name": "Pride and Prejudice",
          "author": "Jane Austen",
          "number_of_pages": 279,
          "genre": "Romantic Fiction",
          "publications": "T. Egerton, Whitehall",
          "price": 15.49
        },
        {
          "id": 984156,
          "name": "The Catcher in the Rye",
          "author": "J.D. Salinger",
          "number_of_pages": 214,
          "genre": "Fiction",
          "publications": "Little, Brown and Company",
          "price": 13.99
        },
        {
          "id": 998417,
          "name": "The Lord of the Rings",
          "author": "J.R.R. Tolkien",
          "number_of_pages": 1178,
          "genre": "Fantasy",
          "publications": "Allen & Unwin",
          "price": 25.99
        },
        {
          "id": 654658,
          "name": "Harry Potter and the Philosopher's Stone",
          "author": "J.K. Rowling",
          "number_of_pages": 223,
          "genre": "Fantasy",
          "publications": "Bloomsbury",
          "price": 16.99
        },
        {
          "id": 668359,
          "name": "The Hobbit",
          "author": "J.R.R. Tolkien",
          "number_of_pages": 310,
          "genre": "Fantasy",
          "publications": "George Allen & Unwin",
          "price": 14.99
        },
        {
          "id": 105455,
          "name": "War and Peace",
          "author": "Leo Tolstoy",
          "number_of_pages": 1225,
          "genre": "Historical Fiction",
          "publications": "The Russian Messenger",
          "price": 20.99
        },
        {
          "id": 118564  ,
          "name": "The Alchemist",
          "author": "Paulo Coelho",
          "number_of_pages": 208,
          "genre": "Adventure, Fantasy",
          "publications": "HarperTorch",
          "price": 11.99
        }
      ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBooks, setSelectedBooks] = useState(new Set());
    const [editBookData, setEditBookData] = useState({});
    const [bookData, setBookData] = useState({
        name: '',
        author: '',
        id: '',
        numberOfPages: '',
        genre: '',
        publication: '',
        price: ''
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData({
          ...bookData,
          [name]: value
        });
      };
      const handleSelectBook = (id) => {
        const updatedSelection = new Set(selectedBooks);
        if (updatedSelection.has(id)) {
            updatedSelection.delete(id); // Deselect
        } else {
            updatedSelection.add(id); // Select
        }
        setSelectedBooks(updatedSelection); // Update selected books
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Book Data:', bookData);
        setBookData({
          name: '',
          author: '',
          id: '',
          numberOfPages: '',
          genre: '',
          publication: '',
          price: ''
        });
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };
      const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this book?");
        if (confirmDelete) {
            setBooks(Books.filter(book => book.id !== id));
            alert("Book deleted successfully!");
        }
      };
      const handleDeleteSelected = () => {
        if (selectedBooks.size === 0) {
            alert("No books selected for deletion.");
            return;
        }
    const confirmDelete = window.confirm("Are you sure you want to delete the selected books?");
      if (confirmDelete) {
          setBooks(Books.filter(book => !selectedBooks.has(book.id)));
          alert("Selected books deleted successfully!");
          setSelectedBooks(new Set());
      } else {
          alert("Deletion canceled.");
      }
  };
  const handleEditClick = (book) => {
    setEditBookData(book);
    setIsModalOpen(true);
  };
  const handleSave = () => {
    console.log('Updated Book Data:', editBookData);
    setIsModalOpen(false);
  };

  return (
    <>
     <div className='home-first'>
        <h1>Books In My Store</h1>
        <div className='home-buttons'>
        <button onClick={() => setIsModalOpen(true)}>Add Books</button>
        <button onClick={handleDeleteSelected}>Delete Books</button>
        </div>
     </div>
     <div className='home-second'>
        <table>
            <thead>
                <tr>
                <th><input type="checkbox" /></th>
                <th>ID</th>
                <th>Name</th>
                <th>Author</th>
                <th>Number of Pages</th>
                <th>Genre</th>
                <th>Publication</th>
                <th>Price ($)</th>
                <th>Del</th>
                </tr>
            </thead>
            <tbody>
                {Books.map(book => (
                <tr key={book.id}>
                    <td><input type="checkbox" checked={selectedBooks.has(book.id)} onChange={() => handleSelectBook(book.id)}/></td>
                    <td>{book.id}</td>
                    <td>{book.name}</td>
                    <td>{book.author}</td>
                    <td>{book.number_of_pages}</td>
                    <td>{book.genre}</td>
                    <td>{book.publications}</td>
                    <td>{book.price}</td>
                    <td>
                        <img 
                            src={delete_icon} 
                            alt="Delete" 
                            style={{ cursor: 'pointer', width: '20px', height: '20px' }} 
                            onClick={() => handleDelete(book.id)} 
                        />
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
     </div>
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
  )
}

export default Home
