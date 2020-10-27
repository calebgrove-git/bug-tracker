import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {createUser} from '../Reducers/user'
import './createuser.css'

export default ()=>{
const dispatch = useDispatch()
const history = useHistory()
const user = useSelector(state=>state.user)
const [newUser, setNewUser] = useState({
    email: null,
    password: null,
    company: user.company,
    admin:false 
})
function inputChanged(e){
    setNewUser({
        ...newUser,
        [e.target.name]:e.target.value
    })
}
function createNewUser(e){
    e.preventDefault();
    dispatch(createUser(newUser))
    history.push('/')
}
    return (<div className='create-user'>
            <h1>
            Create User
            </h1>
            <form onSubmit={createNewUser} >
                <label htmlFor="name">Email:</label>
                <input style={{color:'black'}} type="text" name="email" id="email" placeholder='email' required onChange={inputChanged} value={newUser.email}/>
                <label htmlFor="name">Password:</label>
                <input style={{color:'black'}} type="text" name="password" id="password" placeholder='password' required onChange={inputChanged} value={newUser.password}/>
                <button type="submit">Submit</button>
            </form>
        </div>)
}