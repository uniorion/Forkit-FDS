import React from 'react';

const Spinner = ({ isFetching }) => (
  isFetching ? 
  <div className="app-spinner">
    <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
  </div>
  : null
);

export default Spinner;