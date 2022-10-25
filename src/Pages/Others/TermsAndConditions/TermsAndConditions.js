import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h1>Terms and conditions</h1>
            <p>Go back to registration : <Link to='/register'>Registration</Link></p>
        </div>
    );
};

export default TermsAndConditions;