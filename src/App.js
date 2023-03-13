import { useState } from "react";
import Banner from "./components/Banner"
import Form from "./components/Form";
import Genre from "./components/Genre";


function App() {

  const genres = [
    {
      name: 'Novel',
      firstColor: '#57C278',
      secondColor: '#D9F7E9'
    },
    {
      name: 'Biography',
      firstColor: '#82CFFA',
      secondColor: '#E8F8FF'
    },
    {
      name: 'Terror',
      firstColor: '#A6D157',
      secondColor: '#F0F8E2'
    },
    {
      name: 'Sci-fi',
      firstColor: '#E06B69',
      secondColor: '#FDE7E8'
    },
    {
      name: 'Mystery',
      firstColor: '#DB6EBF',
      secondColor: '#FAE9F5'
    },
    {
      name: 'Historical fiction',
      firstColor: '#FFBA05',
      secondColor: '#FFF5D9'
    },
    {
      name: 'Romance',
      firstColor: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }

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
