import React from "react";

import Button from "../../components/Common/Button";

import Ranking from "../../assets/images/rankings.png";

const Profile = (props) => {
    const {onContinue} = props
	return (
    <>
		<div className = "register__content1">
            <p className = "register__content1__title">Chooese your NFT profile picture</p>
            <img className = "register__content1__image" src = {Ranking} alt = "handsome"/>
            <div className = "register__content1__buttons">
                <button className = "register__content1__buttons__button"><i>SETUP</i></button>
                <button className = "register__content1__buttons__button"><i>Use placeholder</i></button>
            </div>
            <div className = "register__content1__next">
                <Button className="register__btn register__content1__next__button" type="warning" onClick={onContinue}>
					Next
				</Button>
            </div>
        </div>
    </>
	);
};

export default Profile;
