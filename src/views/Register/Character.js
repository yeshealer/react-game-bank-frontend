import React from "react";
import Button from "../../components/Common/Button";

const Character = (props) => {
    const {onContinue} = props;
	return (
		<>
		<div className="page4_background">
			<div className = "page4_inside">
				<p className = "page4_inside_heading">Setup your character build with you first 20 points</p>
				<div className="character_container">
					<div className = "page4_inside_left">
						<p>Total character points: 20</p>
						<div className="character_point">
							<label>250 HP = 1 character point</label>
							<div className = "input_place">
								<input className="input_place_content"/>
								<i>HP</i>
							</div>				
						</div>
						<div className="character_point">
							<label>1 attack = 1 character point</label>
							<div className = "input_place">
								<input className="input_place_content"/>
								<i>Attack</i>
							</div>
						</div>
						<div className="character_point">
							<label>1 defense = 1 character point</label>
							<div className = "input_place">
								<input className="input_place_content"/>
								<i>Defense</i>
							</div>
						</div>
						<div className="character_point">
							<label>100 energy = 1 character point</label>
							<div className = "input_place">
								<input className="input_place_content"/>
								<i>Energy</i>
							</div>
						</div>
						<div className="character_point">
							<label>1 stamina = 5 character points</label>
							<div className = "input_place">
								<input className="input_place_content"/>
								<i>Stamina</i>
							</div>
						</div>
					</div>

					<div className = "page4_inside_right">
						<p>With every level uo you get character points to get stronger.</p>
						<p>Use them wisely, you can only change your build once every 24 hours and uses 1 techpoint.</p>
					</div>	
					
				</div>
				<Button className="register__btn charactoer_next_btn" type="warning" onClick={onContinue}>
                    Next
                </Button>
			</div>
			
		</div>
		</>
	);
};

export default Character;
