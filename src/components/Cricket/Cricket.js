import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import Popup from '../Popup/Popup';
import Team from '../Team/Team';
import './Cricket.css';

const Cricket = () => {
    let [players, setPlayers] = useState([]);
    const [paid, setPaid] = useState([]);
    const [popupPerson, setPopupPerson] = useState({});
    const [popupVisible, setPopupVisible] = useState(false);

    useEffect(() => {
        fetch('https://api.mocki.io/v1/9adeffc1')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    const handleAddPlayer = player => setPlayers([...players, player]);
    const handleSalary = salary => setPaid([...paid, salary]);
    const handlePopup = person => setPopupPerson(person);
    const handlePopupVisible = () => setPopupVisible(!popupVisible);

    return (
        <main>
            <section className="player-salary">
                <div className="container">
                    <div className="player-salary-inner">
                        <div className="player">
                            {
                                players.map(player => <Player player={players} handleAddPlayer={handleAddPlayer}  handleSalary={handleSalary} handlePopup={handlePopup} handlePopupVisible={handlePopupVisible} key={players.id} />)
                            }
                        </div>
                        <div className="salary">
                            <Team paid={paid} />
                        </div>
                        
                        <Popup popupPerson={popupPerson} popupVisible={popupVisible} handlePopupVisible={handlePopupVisible} />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Cricket;