import React from "react";
const Main = React.lazy(() => import("../views/Main"));
const Profile = React.lazy(() => import("../views/Profile"));
const RaidRoom = React.lazy(() => import("../views/RaidRoom"));
const Battle = React.lazy(() => import("../views/Battle"));
const TechLab = React.lazy(() => import("../views/TechLab"));
const TournamentRaids = React.lazy(() => import("../views/TournamentRaids"));
const Rankings = React.lazy(() => import("../views/Rankings"));
const Bank = React.lazy(() => import("../views/Bank"));
const AlliesEnemies = React.lazy(() => import("../views/AlliesEnemies"));
const Tournament = React.lazy(() => import("../views/Tournament"));
const Armory = React.lazy(() => import("../views/Armory"));
const RealEstate = React.lazy(() => import("../views/RealEstate"));
const Missions = React.lazy(() => import("../views/Missions"));
const Clans = React.lazy(() => import("../views/Clans"));
const ClanRank = React.lazy(() => import("../views/ClanRank"));
const WarRoom = React.lazy(() => import("../views/WarRoom"));

const AppRoutes = [
	// {
	// 	path: "/home",
	// 	name: "Main",
	// 	component: Main,
	// 	private: false,
	// 	exact: true,
	// },
	// {
	// 	path: "/battle",
	// 	name: "Battle",
	// 	component: Battle,
	// 	private: false,
	// 	exact: true,
	// },
	// {
	// 	path: "/profile",
	// 	name: "Profile",
	// 	component: Profile,
	// 	private: false,
	// 	exact: true,
	// },
	// {
	// 	path: "/raidroom",
	// 	name: "RaidRoom",
	// 	component: RaidRoom,
	// 	private: false,
	// 	exact: true,
	// },
	// {
	// 	path: "/techlab",
	// 	name: "TechLab",
	// 	component: TechLab,
	// 	private: false,
	// 	exact: true,
	// },
	// {
	// 	path: "/tournamentraids",
	// 	name: "TournamentRaids",
	// 	component: TournamentRaids,
	// 	private: false,
	// 	exact: true,
	// },
	// {
	// 	path: "/rankings",
	// 	name: "Rankings",
	// 	component: Rankings,
	// 	private: false,
	// 	exact: true,
	// },
	{
		path: "/bank",
		name: "Bank",
		component: Bank,
		private: false,
		exact: true,
	},
	// {
	// 	path: "/alliesenemies",
	// 	name: "AlliesEnemies",
	// 	component: AlliesEnemies,
	// 	private: false,
	// 	exact: true,
	// },
	// {
	// 	path: "/tournament",
	// 	name: "Tournament",
	// 	component: Tournament,
	// 	private: false,
	// 	exact: true,
	// },
	// {
	// 	path: "/armory",
	// 	name: "Armory",
	// 	component: Armory,
	// 	private: false,
	// 	exact: true,
	// },
	// {
	// 	path: "/realestate",
	// 	name: "RealEstate",
	// 	component: RealEstate,
	// 	private: false,
	// 	exact: true,
	// },
	// {
	// 	path: "/missions",
	// 	name: "Missions",
	// 	component: Missions,
	// 	private: false,
	// 	exact: true,
	// },
	// {
	// 	path: "/clans",
	// 	name: "Clans",
	// 	component: Clans,
	// 	private: false,
	// 	exact: true,
	// },
	// {
	// 	path: "/clanrank",
	// 	name: "ClanRank",
	// 	component: ClanRank,
	// 	private: false,
	// 	exact: true,
	// },
	// {
	// 	path: "/warroom",
	// 	name: "WarRoom",
	// 	component: WarRoom,
	// 	private: false,
	// 	exact: true,
	// },
	{ redirect: true, path: "/", to: "/bank", name: "Bank" },
];

export default AppRoutes;
