import React, { useEffect } from 'react';
import { useState } from 'react';
import Player from '../Player/Player';
import Popup from '../Popup/Popup';
import Team from '../Team/Team';
import './Cricket.css';


 const Cricket = () => {

    const [players, setPlayers] = useState([]);
    const [price, setPrice] = useState([]);
    const [popupPerson, setPopupPerson] = useState({});
    const [popupVisible, setPopupVisible] = useState(false);
    const [team,setTeam]=useState([]);

    useEffect(() => {
        fetch('https://api.mocki.io/v1/9adeffc1')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    
    const handleAddPlayer = player => setTeam([...team,player]);   
    const handleSalary = salary => setPrice([...price, salary]);
    const handlePopup = person => setPopupPerson(person);
    const handlePopupVisible = () => setPopupVisible(!popupVisible);

    return (
        <main>
            <section className="player-salary">
                <div className="container">
                    <div className="player-salary-inner">
                        <div className="player">

                            {
                                players.map(player => <Player  player={player} handleAddPlayer={handleAddPlayer} handleSalary={handleSalary} handlePopup={handlePopup} handlePopupVisible={handlePopupVisible} key={player.id} />)
                            }
                        </div>
                        <div className="salary">
                            <Team paid={price} />
                           
                            
                        </div>
                        <Popup popupPerson={popupPerson} popupVisible={popupVisible} handlePopupVisible={handlePopupVisible} />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Cricket;