import React,{useState, useEffect} from 'react'
import './login.css'
import{useDispatch,useSelector} from 'react-redux'
import {login} from '../Reducers/authentication'
import { fetchUsers, createUser } from '../Reducers/user';


export default ()=>{
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
const [formInput, setFormInput] = useState({
        email:'',
        password:''
    })
const [newUser, setNewUser] = useState({
    email:null,
    password:null,
    company:null,
    admin:true
})
const [create, setCreate] = useState(false)
useEffect(() => {
    dispatch(login(user))
}, [user, dispatch])
function input(e){
    setFormInput({
        ...formInput,
        [e.target.name]:e.target.value
    })
}

function submit(e){
    e.preventDefault();
    dispatch(fetchUsers(formInput.email, formInput.password));
}
function createNewUser(e){
    setCreate(!create);
    e.preventDefault();
    dispatch(createUser(newUser))
}
function inputCreate(e){
    setNewUser({
        ...newUser,
        [e.target.name]:e.target.value
    })
}
    return(
        <>
        {!create ? <div className='login-background'>
            <form className='login-form' onSubmit={submit}>
                <h1>Bug Tracker</h1>
                <input name='email' type="text" placeholder='email' onChange={input} value={formInput.email} required/>
                <input name='password' type="password" placeholder='password' onChange={input} value={formInput.password} required/>
                <div style={{width:'100%'}}></div>
                <button type='submit' >Login</button>
                <div style={{width:'100%'}}></div>
                <button type='reset' onClick={()=>setCreate(!create)}>Create User</button>
            </form>
        </div>
        :
        <div className='login-background'>
            <form className='login-form' onSubmit={createNewUser}>
                <h1>Bug Tracker</h1>
                <input name='email' type="text" placeholder='email' onChange={inputCreate} value={newUser.name} required/>
                <input name='password' type="password" placeholder='password' onChange={inputCreate} value={newUser.password} required/>
                <input name='company' type="company" placeholder='company' onChange={inputCreate} value={newUser.company} required/>
                <div style={{width:'100%'}}></div>
                <button type ='submit'>Create</button>
                <button type='reset' onClick={()=>setCreate(!create)}>Back</button>
            </form>
        </div>
        }
        </>
    )
}