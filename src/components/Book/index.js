import './Book.css';

const Book = ({ name, image, author, bookColor }) => {
    return (
        <div className='book'>
            <div className='header' style={ {backgroundColor: bookColor} }>
                <img src={image} alt={name}/>
            </div>
            <div className='footer'> 
                <h4>{name}</h4>
                <h5>{author}</h5>
            </div>
        </div>
    )
}

export default Book;