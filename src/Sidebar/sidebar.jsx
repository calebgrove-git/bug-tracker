import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {signOut} from '../Reducers/authentication'
import './sidebar.css'

export default ()=>{
    const dispatch = useDispatch()
    const {auth} = useSelector(state=>state)
    function signout(){
       dispatch(signOut());
   }
    return(
        <div className='sidebar'>

                <h1 className='title'>
                Bug Tracker
                </h1>
                    <ul>
<Link to='/' className='nav-link'>
                            <li>Dashboard</li>
                            </Link>

                            <Link to='/bugs' className='nav-link'>
                            <li>View Bugs</li>
                            </Link>

                            {auth.admin &&<Link to='/create' className='nav-link' ><li>Create Bugs</li>
                            </Link>
                        }
                    </ul>
                    <button className=' logout' onClick={signout}>Logout</button>
        </div>
    )
}