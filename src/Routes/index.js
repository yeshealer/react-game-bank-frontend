import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import LevelBar from "../components/LevelBar";
import ScoreContainer from "../components/ScoreContainer";
import AppRoutes from "./AppRoutes";
import RegisterRoutes from "./RegisterRoutes";
import { useGlobal } from "../contexts";

import "../scss/routesContainer.scss";

const loading = () => (
	<div className="animated fadeIn pt-3 text-center">
		<div className="sk-spinner sk-spinner-pulse"></div>
	</div>
);

const RoutesContainer = () => {
	const { isRegistered } = useGlobal();
	const className = isRegistered ? "app" : "app-register";
	const routes = isRegistered ? AppRoutes : RegisterRoutes;
	const redirectTo = isRegistered ? "/bank" : "/register";

	console.log("----<", routes);

	return (
		<div className={className}>
			{isRegistered && (
				<>
					<Header />
					{/* <LevelBar />
							<ScoreContainer /> */}
				</>
			)}
			<React.Suspense fallback={loading()}>
				<Switch>
					{routes.map((route, idx) => {
						return (
							route.component && (
								<Route
									key={idx}
									path={route.path}
									exact={route.exact}
									name={route.name}
									render={(props) => (
										<>
											<route.component {...props} />
										</>
									)}
								/>
							)
						);
					})}
					<Redirect from="/" to={redirectTo} />
				</Switch>
			</React.Suspense>
		</div>
	);
};

export default RoutesContainer;
