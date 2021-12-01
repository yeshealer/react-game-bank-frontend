import React from "react";

import Button from "../../components/Common/Button";

const Battle = () => {
	return (
    <>
        <div className="register">
            <div className = "register__finish">
                <p className = "register__finish__title"><b>Congratulations!</b></p>
                <p className = "register__finish__detail"><i>You are ready to enter Cryptoclism</i></p>
                <Button className="register__btn register__finish__battle" type="warning">
                    BATTLE!
                </Button>
            </div>
        </div>
    </>
	);
};

export default Battle;
