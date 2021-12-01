import React from "react";
import line from "../../assets/images/line.svg";
const ChapterOverview = () => {
	return (
		<div className="chpateroverview">
			<div className="chpateroverview--line">
				<img src={line} alt="line" />
			</div>
			<p>overview</p>
			<h4>
				Cybertech. It’s always tricky, could be priceless and powerful; could be
				obsolete, unusable junk. This one has been causing quite a stir though.
				An “Identity Disc” or “Light Disc”: cuts through flesh and other matter
				as easy as it cuts through the air. Its true value though is in
				information. If you can get this thing hooked up to the right bit of
				kit, you’ll have access to an unimaginable amount of data. Most of it is
				useless but some of it might be enough to give us an edge. Find it.
				Bring it in.
			</h4>
			<div className="chpateroverview--line">
				<img src={line} alt="line" />
			</div>
		</div>
	);
};

export default ChapterOverview;
