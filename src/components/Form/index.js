import './Form.css';
import DropList from '../DropList';
import TextField from '../TextField';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const saving = (event) => {
        event.preventDefault();
        props.addWorker({
            name,
            position,
            image,
            team
        })
        setName('')
        setPosition('')
        setImage('')
        setTeam('')
    }

    return (
        <section className="form">
            <form onSubmit={saving}>
                <h2>Fill the data to add the cards worker to add in the system</h2>
                <TextField
                    mandatory={true} 
                    label="Name" 
                    placeholder="Type your name"
                    typed={name}
                    changed={typed => setName(typed)}
                />
                <TextField 
                    mandatory={true} 
                    label="Position" 
                    placeholder="Type your position"
                    typed={position}
                    changed={typed => setPosition(typed)}
                />
                <TextField 
                    label="Image" 
                    placeholder="Type the image address"
                    typed={image}
                    changed={typed => setImage(typed)} 
                    />
                <DropList  
                    mandatory={true} 
                    label="Team"
                    itens={props.teams} 
                    typed={team}
                    changed={typed => setTeam(typed)}   
                />
                <Button>Create Card</Button>
            </form>
        </section>
    )
}

export default Form;