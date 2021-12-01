import React from "react";

import lockIcon from "../../assets/images/lock.svg";
import currentChapter from "../../assets/images/current-chapter.svg";

const ChapterBar = () => {
	return (
		<div className="chapterbar">
			<div className="row">
				<div className="chapterbar__item chapterbar__item--active col">
					<img src={currentChapter} alt="lockIcon" />
					<p>chapter 01</p>
				</div>
				<div className="chapterbar__item col">
					<img src={lockIcon} alt="lockIcon" />
					<p>chapter 01</p>
				</div>
				<div className="chapterbar__item col">
					<img src={lockIcon} alt="lockIcon" />
					<p>chapter 01</p>
				</div>
				<div className="chapterbar__item col">
					<img src={lockIcon} alt="lockIcon" />
					<p>chapter 01</p>
				</div>
				<div className="chapterbar__item col">
					<img src={lockIcon} alt="lockIcon" />
					<p>chapter 01</p>
				</div>
			</div>
		</div>
	);
};

export default ChapterBar;
