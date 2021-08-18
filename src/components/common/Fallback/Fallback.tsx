import React from 'react';

const Fallback = () => {
    return (
        <div className="mt-5 text-center">
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Fallback;