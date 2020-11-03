import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BugCard from '../BugCard/Bugcard.jsx';
import './viewbugs.css';
import BugView from '../BugView/bugView';
import Bug from '../Model/bug';
import { useParams } from 'react-router-dom';
export default () => {
  let params = useParams();

  const { bugs } = useSelector((state) => state);

  const [displayBug, setDisplayBug] = useState({
    name: '',
    isDisplayed: false,
  });

  let filteredBugs = bugs;
  if (params.priority !== undefined) {
    filteredBugs = filteredBugs.filter(
      (bug) => parseInt(params.priority) === parseInt(bug.priority)
    );
  }
  let sortedBugs = filteredBugs;
  if (filteredBugs !== undefined) {
    sortedBugs = sortedBugs.filter((bug) => true === bug.completed);
  }
  function bugClicked(name) {
    setDisplayBug({
      isDisplayed: !displayBug.isDisplayed,
      name: name,
    });
  }
  if (sortedBugs === undefined) {
    sortedBugs = [];
  }
  return (
    <div className='page-container'>
      {sortedBugs.map((bug, key) => (
        <BugCard key={key} bug={bug} clicked={bugClicked} />
      ))}
      {displayBug.isDisplayed && (
        <BugView
          clicked={bugClicked}
          bug={bugs.filter((bug) => bug.name === displayBug.name)[0]}
        />
      )}
    </div>
  );
};
