import React, { useState } from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faInfo, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {

    const { name, picture, salary,age } = props.player;
    const handleSalary = props.handleSalary;
    const handlePopup = props.handlePopup;
    const handlePopupVisible = props.handlePopupVisible;
    const [btnDisable, setBtnDisable] = useState(false);

    return (
        <div className="player-card">
            <div className="player-img-box">
                <img src={picture} alt={name} className="player-img" />
            </div>
            <div className="player-info-box">
                <h2 className="player-name">Name- {name}</h2>
                <h3 className="player-salary">Price- ${salary}</h3>
                <h4>Age:{age}</h4>
                <div className="player-btn-box">
                    <button className={btnDisable ? "player-btn disabled" : "player-btn"} onClick={() => {
                        handleSalary(props.player);
                        setBtnDisable(true);
                    }}><FontAwesomeIcon icon={faUserPlus} /> Add Player</button>
                    <button className="player-btn" onClick={() => {
                        handlePopup(props.player);
                        handlePopupVisible();
                    }}><FontAwesomeIcon icon={faInfo} /> More details</button>
                </div>
            </div>
        </div>

    );
};

export default Player;