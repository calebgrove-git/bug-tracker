import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Login from './Login/login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './Sidebar/sidebar.jsx';
import ViewBugs from './Pages/viewbugs';
import CreateBug from './BugCreate/bugForm';
import Dashboard from './Pages/dashboard';
import CreateUser from './Pages/createUser';
import ViewCompleted from './Pages/viewCompleted';
import About from './Pages/about';

function App() {
  const { auth } = useSelector((state) => state);
  const [about, setAbout] = useState(false);
  return (
    <BrowserRouter>
      {!auth.loggedIn ? (
        <>{!about ? <Login about={setAbout} /> : <About about={setAbout} />}</>
      ) : (
        <>
          <Sidebar />
          <Switch>
            <Route path='/bugs/' exact>
              <ViewBugs />
            </Route>
            <Route path='/bugs/completed' exact>
              <ViewCompleted />
            </Route>
            <Route path='/create' exact>
              <div className='page-container'>
                <CreateBug title='Create Bug' />
              </div>
            </Route>
            <Route path='/' exact>
              <div className='page-container'>
                <Dashboard />
              </div>
            </Route>
            <Route path='/bugs/:priority' exact>
              <ViewBugs />
            </Route>
            <Route path='/createUser' exact>
              <div className='page-container'>
                <CreateUser />
              </div>
            </Route>
          </Switch>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
