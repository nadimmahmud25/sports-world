import React from 'react';
import './Team.css';

const Team = (props) => {
    const { paid } = props;
    const paidEmployee = props.paid.length;
    const totalPaidAmount = paid.reduce((total, amount) => total + amount.salary, 0);

    return (
        <div className="team-card">
            <h2 className="team-summary">Summary</h2>
            <table className="team-table">
                <tbody>
                    <tr>
                        <td>Paid Employee:</td>
                        <td>{paidEmployee}</td>
                    </tr>
                    <tr>
                        <td>Total Paid:</td>
                        <td>${totalPaidAmount}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Team;