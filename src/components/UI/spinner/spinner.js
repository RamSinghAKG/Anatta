import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './spinner.css';
const Spinner = () => {
  const spin = <FontAwesomeIcon icon={faSpinner } size="6x" spin></FontAwesomeIcon>;
  console.log('render spinner...');
  return (
      <div className="spiner-container">
          <div area-label="loading data" className="spinner"> {spin} </div>
      </div>
  );
};
export default Spinner;