import './Team.css';
import Worker from '../Worker';

const Team = (props) => {
    return (
        (props.workers.length > 0) ? <section className='team' style={{ backgroundColor: props.secondColor }}>
            <h3 style={{ borderColor: props.firstColor }}>{props.name}</h3>
            <div className='workers'>
                {props.workers.map(worker => <Worker     
                    key={worker.name}
                    workerColor={props.firstColor}
                    name={worker.name} 
                    position={worker.position}
                    image={worker.image}
                />)}
            </div>
        </section>
        : ''
    )
}

export default Team;