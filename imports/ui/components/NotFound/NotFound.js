import React from 'react';


const NotFound = () => (
  <div className="NotFound">
    <h2>Meteor Boilerplate</h2>
    <p><strong>Error [404]</strong>: {window.location.pathname} does not exist.</p>
  </div>
);

export default NotFound;
