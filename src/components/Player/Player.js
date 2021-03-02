import React, { useState } from 'react';
import Cricket from '../Cricket/Cricket';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faInfo, faUserPlus } from '@fortawesome/free-solid-svg-icons'


const Player = (props) => {
    let {name, picture, salary } = props.players;
    const handleSalary = props.handleSalary;
    const handlePopup = props.handlePopup;
    const handlePopupVisible = props.handlePopupVisible;
    const [btnDisable, setBtnDisable] = useState(false);

    return (
        <div className="player-card">
            <div className="player-img-box">
                <img src={picture.large} alt={name} className="player-img" />
            </div>
            <div className="player-info-box">
                <h2 className="player-name">{name}</h2>
                <h3 className="player-salary">${salary}</h3>
                <div className="player-btn-box">
                    <button className={btnDisable ? "player-btn disabled" : "player-btn"} onClick={() => {
                        handleSalary(props.players);
                        setBtnDisable(true);
                    }}><FontAwesomeIcon icon={faUserPlus} />Add Player</button>
                    <button className="player-btn" onClick={() => {
                        handlePopup(props.players);
                        handlePopupVisible();
                    }}><FontAwesomeIcon icon={faInfo} />More Info</button>
                </div>
            </div>
        </div>
    );
};

export default Player;