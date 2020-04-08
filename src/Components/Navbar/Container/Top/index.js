import React from "react";
import { TopContainer, Logo } from "./styles.js";
import Hamburger from "./Hamburger";
import NbaLogo from "../../../../nba-logo.png";

const Top = () => (
	<TopContainer>
		<Logo src={NbaLogo} />
		<Hamburger />
	</TopContainer>
);

export default Top;
