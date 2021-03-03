import React from 'react';
import './Team.css';

const Team = (props) => {
    const { paid } = props;
    const selectPlayer = props.paid.length;
    const totalPrice = paid.reduce((total, amount) => total + amount.salary, 0);

    return (
        <div className="team-card">
            <h2 className="team-summary">Dream Team</h2>
            <table className="team-table">
                <tbody>
                    <tr>
                        <td>Total Player:</td>
                        <td>{selectPlayer}</td>
                    </tr>                    
                    <tr>
                        <td>Total Price:</td>
                        <td>${totalPrice}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Team;