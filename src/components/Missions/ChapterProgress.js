import React from "react";

import ProgressBar from "../Common/ProgressBar";

const ChapterProgress = () => {
	return (
		<div className="chapterprogress">
			<h4>current chapter</h4>
			<h1>75%</h1>
			<ProgressBar variant="primary" now={58} />
		</div>
	);
};

export default ChapterProgress;
