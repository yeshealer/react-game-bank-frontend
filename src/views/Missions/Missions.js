import React from "react";

import PageTitle from "../../components/Common/PageTitle";
import ChapterBar from "../../components/Missions/ChapterBar";
import ChapterProgress from "../../components/Missions/ChapterProgress";
import ChapterOverview from "../../components/Missions/ChapterOverview";
import MissionBlock from "../../components/Missions/MissionBlock";

const Missions = () => {
	return (
		<div className="missions">
			<PageTitle title="Missions" />
			<ChapterBar />
			<ChapterProgress />
			<ChapterOverview />
			<MissionBlock title="Mission 1: Ratcatchers" />
			<MissionBlock title="Mission 2: Scrap for Parts" />
			<MissionBlock title="Mission 3: Gavel and Anvil" />
			<MissionBlock title="Mission 4: Extractron" />
			<MissionBlock title="Mission 5: Playback" />
		</div>
	);
};

export default Missions;
