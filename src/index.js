import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { history } from "./store/history";
import { ChainId, DAppProvider } from "@usedapp/core";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const config = {
	readOnlyChainId: ChainId.Harmony,
};

ReactDOM.render(
	<Router history={history}>
		<DAppProvider config={config}>
			<App />
		</DAppProvider>
	</Router>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
