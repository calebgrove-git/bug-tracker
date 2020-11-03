import React from 'react';
import './about.css';
export default function (props) {
  return (
    <div className='about-background'>
      <h1>About</h1>

      <p>
        Squish is a bug tracking application that allows users to create,
        update, delete, and mark bugs completed. There are two different types
        of users. Admin users can create new users as well as new bugs. Normal
        users can only edit and mark bugs completed. To create an admin account
        click on create user and fill out the information and then log in.
        Admins can then log in and navigate to the create user page to add users
        to their account.
        <p></p> You can log into the trial admin account with Email: admin
        Password: admin <p></p>You can log into the trial user account with
        Email: user Password: user
      </p>
      <button
        onClick={() => props.about(false)}
        style={{ marginLeft: '5px', marginRight: '5px' }}
      >
        Back
      </button>
    </div>
  );
}
