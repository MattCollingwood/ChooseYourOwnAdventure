import React, { useState } from 'react';
import './Intro.css';
import {useDispatch} from 'react-redux';

import { Link } from 'react-router-dom';
import { setPlayerName, setFriendName } from '../store/storySlice';


function Intro() {
    
    const [playerName, setPlayerNameLocal] = useState('');
    const [friendName, setFriendNameLocal] = useState('');
    const dispatch = useDispatch();

    const handleNameChange = (e) => {
        setPlayerNameLocal(e.target.value);
        dispatch(setPlayerName(e.target.value));
    };

    

    const handleFriendNameChange = (e) => {
        setFriendNameLocal(e.target.value);
        dispatch(setFriendName(e.target.value));
    };

    

    return (
        <div className="intro">
            <div className="cover-area">
                <div className="cover-page">
                    <h1 className="cover-title">Choose Your Own Adventure</h1>
                    <img src={require('./coverart.png')}  className="cover-image" alt="Cover Art"/>
                    <div className="input-position">
                        <div className="input-container">
                            <div className='input'>
                                <label>By:   </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={playerName}
                                    required
                                    onChange={handleNameChange}
                                />
                            </div>
                            <div className='input'>
                                <label>Featuring:   </label>
                                <input
                                    type="text"
                                    placeholder="Friend's Name"
                                    value={friendName}
                                    required
                                    onChange={handleFriendNameChange}
                                />
                            </div>
                        </div>
                    </div>                      
                    <div className='button-container'>
                        <Link to="/1">
                            <button onClick={() => {}}>Open Book</button>
                        </Link>
                    </div>                   
                </div>               
            </div>            
        </div>
    );
}

export default Intro;
