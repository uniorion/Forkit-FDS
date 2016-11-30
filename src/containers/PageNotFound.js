import React from 'react';
import {Link} from 'react-router';

const PageNotFound = (props) => (
  <div>
    <h2>404 Error</h2>
    <Link to="/">Return Home</Link>
  </div>
);

export default PageNotFound;