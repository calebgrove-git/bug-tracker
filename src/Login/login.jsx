import React,{useState} from 'react'
import{useDispatch} from 'react-redux'
import {signIn} from '../Reducers/authentication'
import './login.css'

export default ()=>{
    const dispatch = useDispatch()

const [formInput, setFormInput] = useState({
        email:'',
        password:''
    })

function input(e){
    setFormInput({
        ...formInput,
        [e.target.name]:e.target.value
    })
}

function submit(e){
    dispatch(signIn(formInput))
    e.preventDefault();
    
}
    return(
        <div className='login-background'>
            <form className='login-form'>
                <h1>Bug Tracker</h1>
                <input name='email' type="text" placeholder='email' onChange={input} value={formInput.name}/>
                <input name='password' type="password" placeholder='password' onChange={input} value={formInput.password}/>
                <div style={{width:'100%'}}></div>
                <button type='submit' onClick={submit}>Login</button>
            </form>
        </div>
    )
}