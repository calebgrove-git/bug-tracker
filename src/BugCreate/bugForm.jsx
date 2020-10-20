import React, {useState} from 'react'
import './bugForm.css'
import Bug from '../Model/bug'

export default function CreateBug(props){
const [bugOptions, setBugOptions] = useState(new Bug(props.bug))
function inputChanged(e){
    setBugOptions({
        ...bugOptions, 
        [e.target.name]:e.target.value
    })
}
    return(
        <div className='create-bug'>
        {props.title === "Edit Bug" &&<button className='close' onClick={props.close}>Close</button>}
            <h1>
            {props.title}
            </h1>
            <form>
                <label htmlFor="name">Name:</label>
                <input style={{color:'black'}} type="text" name="name" id="name" placeholder='bug name' required onChange={inputChanged} value={bugOptions.name}/>
                <label htmlFor="details">Details:</label>
                <textarea style={{color:'black'}} name="details" id="details" cols="30" rows="10" placeholder='Detailed description of bug' required  onChange={inputChanged} value={bugOptions.details}></textarea>
                <label htmlFor="steps">Steps:</label>
                <textarea style={{color:'black'}} name="steps" id="steps" cols="30" rows="10" placeholder='Steps to recreate the bug' required onChange={inputChanged} value={bugOptions.steps}></textarea>
                <label htmlFor="priority">Priority:</label>
                <select style={{color:'black'}} name="priority" id="priority" required onChange={inputChanged} value={bugOptions.priority}>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                </select>
                <label htmlFor="assigned">Assigned:</label>
                <select style={{color:'black'}} name="assigned" id="assigned" required onChange={inputChanged} value={bugOptions.assigned}>
                    <option>Caleb</option>
                </select>
                <label htmlFor="version">Version:</label>
                <input style={{color:'black'}} type="text" name="version" id="version" placeholder='Version' required onChange={inputChanged} value={bugOptions.details}/>
                <button type="submit">{props.title}</button>
            </form>
        </div>
    )
}
CreateBug.defaultProps={
    bugOptions:{
        name:''
    }
}