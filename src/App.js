import { useState } from "react";
import Banner from "./components/Banner"
import Form from "./components/Form";
import Genre from "./components/Genre";


function App() {

  const genres = [
    {
      name: 'Novel',
      firstColor: '#23255F',
      secondColor: '#9093CE'
    },
    {
      name: 'Biography',
      firstColor: '#1C763B',
      secondColor: '#66BB83'
    },
    {
      name: 'Terror',
      firstColor: '#761C2C',
      secondColor: '#AF6B77'
    },
    {
      name: 'Sci-fi',
      firstColor: '#1C6B76',
      secondColor: '#66BAC6'
    },
    {
      name: 'Mystery',
      firstColor: '#827826',
      secondColor: '#C6BD72'
    },
    {
      name: 'Historical fiction',
      firstColor: '#441C76',
      secondColor: '#8A63BD'
    },
    {
      name: 'Romance',
      firstColor: '#803B86',
      secondColor: '#B477B9'
    },

  ]

  const [books, setBooks] = useState([]);
  
  const newBook = (book) => {
    setBooks([...books, book])
    console.log(book)
  }

  console.log(books)

  return (
    <div className="App">
      <Banner />
      <Form
        genres={genres.map(genre => genre.name)} 
        addBook={book => newBook(book)}
      />
      {genres.map(genre => <Genre 
        key={genre.name} 
        name={genre.name} 
        firstColor={genre.firstColor} 
        secondColor={genre.secondColor}
        books={books.filter(book => book.genre === genre.name)}
        />)}
    </div>
  );
}

export default App;
