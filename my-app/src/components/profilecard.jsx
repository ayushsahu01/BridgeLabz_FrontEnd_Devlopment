import React from 'react';
import './profilecard.css';
import picture from '../Picture.jpg';
function ProfileCard() {
    return (
        <div className="profile-card">
            <img
                src={picture} alt="picture"
                className="profile-avatar"
            />
            <h1 className="profile-name">Ayush Sahu</h1>
            <p className="profile-course">Btech - CSE</p>
            <p className="profile-description">Hello, I'm a Pre final year student at GLA University, Mathura.</p>
        </div>
    );
}

export default ProfileCard;
