import './Genre.css';
import Book from '../Book';

const Genre = (props) => {
    return (
        (props.books.length > 0) ? <section className='genre' style={{ backgroundColor: props.secondColor }}>
            <h3 style={{ borderColor: props.firstColor }}>{props.name}</h3>
            <div className='books'>
                {props.books.map(book => <Book     
                    key={book.name}
                    bookColor={props.firstColor}
                    name={book.name}
                    author={book.author}  
                    publisher={book.publisher}
                    image={book.image}
                />)}
            </div>
        </section>
        : ''
    )
}

export default Genre;