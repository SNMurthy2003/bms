import React from 'react'
import { BrowserRouter,Route, Link, Routes} from 'react-router-dom';
import Home from './HomeComponent/Home';
import AddBook from './AddComponent/AddBook';
import BookDisplay from './BookDisplay/BookDisplay';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books/add' element={<AddBook/>}/>
        <Route path='/books/:id' element={<BookDisplay/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App
