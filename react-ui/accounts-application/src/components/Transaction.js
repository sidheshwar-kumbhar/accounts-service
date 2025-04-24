import React from 'react'

function Transaction({ srno, description, amount }) {
    return (
        <div className="row">
            <div className="col-2  border border-dark">{srno}</div>
            <div className="col-6  border border-dark">{description}</div>
            <div className="col-4  border border-dark">{amount}</div>
        </div>
    );
};
export default Transaction;