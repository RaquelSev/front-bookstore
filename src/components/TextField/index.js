import './TextField.css'

const TextField = (props) => {

    const placeholderModif = `${props.placeholder}...`;

    const typed = (event) => {
      props.changed(event.target.value);
    }
    
    return (
      <div className="text-field">
        <label>
            {props.label}
          </label>
        <input
          value={props.typed} 
          onChange={typed}
          required={props.mandatory} 
          placeholder={placeholderModif}/>
      </div>
    )
}

export default TextField;