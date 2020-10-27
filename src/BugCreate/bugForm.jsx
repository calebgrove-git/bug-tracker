import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { postBug, patchBug} from '../Reducers/bug'
import {useHistory} from 'react-router-dom'
import './bugForm.css'
import Bug from '../Model/bug'
export default function CreateBug(props){
const history = useHistory()
const [bugOptions, setBugOptions] = useState(new Bug(props.bug||Bug))
const dispatch = useDispatch()
const user = useSelector(state=>state.user)
const createBug=event=>{
    event.preventDefault();
    if(props.title === "Create Bug"){
        dispatch(postBug(bugOptions));
        history.push('/')}
    else{
        dispatch(patchBug(bugOptions))
        history.push('/')
    }
}
useEffect(() => {
    if(props.title==="Edit Bug"){setBugOptions({
        ...bugOptions, 
        id: props.bug.id,
        company: user.company
    })}
    else{setBugOptions({
        ...bugOptions, 
        name: "",
        company: user.company,
        creator: user.email
        })}
}, [])

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
            <form onSubmit={createBug} >
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
                <label htmlFor="version">Version:</label>
                <input style={{color:'black'}} type="text" name="version" id="version" placeholder='Version' required onChange={inputChanged} value={bugOptions.version}/>
                <button type="submit">{props.title}</button>
            </form>
        </div>
    )
}
