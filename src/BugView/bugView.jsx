import React, { useState } from 'react';
import './bugView.css';
import BugViewCard from './bugViewCard';
import { useDispatch } from 'react-redux';
import { completeBug, deleteBug } from '../Reducers/bug';
import { useHistory } from 'react-router-dom';
import Priority from '../Reducers/priority';
import Edit from '../EditBug/edit';
import EditBug from '../BugCreate/bugForm';
import Bug from '../Model/bug';
export default (props) => {
  const history = useHistory();
  const bug = new Bug(props.bug);
  const dispatch = useDispatch();
  const { level } = Priority(props.bug.priority);
  const [editBug, setEditBug] = useState(false);
  function edit() {
    setEditBug(!editBug);
  }
  function deletes() {
    dispatch(deleteBug(props.bug));
    history.push('/');
  }
  const markComplete = () => {
    dispatch(completeBug(props.bug));
    history.push('/');
  };
  return (
    <>
      <div className='bug-view'>
        <Edit className='edit' edit={edit} delete={deletes}></Edit>
        <button className='close' onClick={props.clicked}>
          Close
        </button>
        <h1>{props.bug.name}</h1>
        <BugViewCard title='Details' info={props.bug.details} />
        <BugViewCard title='Steps' info={props.bug.steps} />
        <BugViewCard title='Priority' info={level} />
        <BugViewCard title='Creator' info={props.bug.creator} />
        <BugViewCard title='Version' info={props.bug.version} />
        <BugViewCard title='Time' info={props.bug.time} />
        <button onClick={markComplete}>Mark Complete</button>
      </div>
      {editBug && <EditBug title='Edit Bug' bug={bug} close={edit} />}
    </>
  );
};
