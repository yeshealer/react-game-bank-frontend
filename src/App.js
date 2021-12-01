import React from "react";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import { ConnectedWeb3, GlobalProvider } from "./contexts";
import { ThemeProvider } from "@material-ui/styles";
import RoutesContainer from "./Routes";
import { createTheme } from "./theme";

import "./App.scss";

function getLibrary(provider) {
	const library = new Web3Provider(provider);
	library.pollingInterval = 12000;
	return library;
}

const theme = createTheme();

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Web3ReactProvider getLibrary={getLibrary}>
				<ConnectedWeb3>
					<GlobalProvider>
						<RoutesContainer />
					</GlobalProvider>
				</ConnectedWeb3>
			</Web3ReactProvider>
		</ThemeProvider>
	);
}

export default App;
