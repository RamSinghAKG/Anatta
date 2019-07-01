import React from 'react';
import PropTypes from 'prop-types';
import './error.css';
const Error = ({error=''}) => {
    return (
        <div aria-label="error message" className="error-message"> {error} </div>
    );
};

Error.propTypes = {
    error: PropTypes.string
};

export default Error;