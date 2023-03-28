import './Form.css';
import DropList from '../DropList';
import TextField from '../TextField';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {

    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [image, setImage] = useState('');
    const [genre, setGenre] = useState('');

    const saving = (event) => {
        event.preventDefault();
        props.addBook({
            name,
            author,
            publisher,
            image,
            genre
        })
        setName('')
        setAuthor('')
        setPublisher('')
        setImage('')
        setGenre('')
    }

    return (
        <section className="form">
            <form onSubmit={saving}>
                <h2>Bookstore System - Fill the data to add your book to the system</h2>
                <TextField
                    mandatory={true} 
                    label="Name" 
                    placeholder="Type the book's name"
                    typed={name}
                    changed={typed => setName(typed)}
                />
                <TextField 
                    mandatory={true} 
                    label="Author" 
                    placeholder="Type the author"
                    typed={author}
                    changed={typed => setAuthor(typed)}
                />
                <TextField 
                    mandatory={true} 
                    label="Publisher" 
                    placeholder="Type the publisher"
                    typed={publisher}
                    changed={typed => setPublisher(typed)}
                />
                <TextField 
                    label="Image" 
                    placeholder="Type the image address"
                    typed={image}
                    changed={typed => setImage(typed)} 
                    />
                <DropList  
                    mandatory={true} 
                    label="Genre"
                    itens={props.genres} 
                    typed={genre}
                    changed={typed => setGenre(typed)}   
                />
                <Button>Create Card</Button>
            </form>
        </section>
    )
}

export default Form;