import './Worker.css';

const Worker = ({ name, image, position, workerColor }) => {
    return (
        <div className='worker'>
            <div className='header' style={ {backgroundColor: workerColor} }>
                <img src={image} alt={name}/>
            </div>
            <div className='footer'> 
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Worker;