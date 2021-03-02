import React from 'react';
import './Popup.css';
const Popup = (props) => {
    const { popupPerson, popupVisible, handlePopupVisible } = props;
    if (!popupVisible) {
        return '';
    }
    const { name, age, picture, salary,city,country } = popupPerson;

    return (
        <div className="player-popup">
            <div className="popup">
                <div className="popup-card">
                    <div className="popup-img-box">
                        <img src={picture} alt={name} className="popup-img" />
                    </div>
                    <div className="popup-info-box">
                        <h2 className="popup-name">{name}</h2>
                        <table className="popup-table">
                            <tbody>
                                <tr>
                                    <td>Age</td>
                                    <td>{age}</td>
                                </tr>
                                <tr>
                                    <td>Salary</td>
                                    <td>${salary}</td>
                                </tr>
                                <tr>
                                    <td>City</td>
                                    <td>{city}</td>
                                </tr>
                                <tr>
                                    <td>Country</td>
                                    <td>{country}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="popup-btn-box">
                            <button className="popup-btn" onClick={handlePopupVisible}>Go back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;