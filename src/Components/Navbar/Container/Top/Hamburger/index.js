import React from "react";
import { NavButton, HamburgerSlice } from "./styles.js";

const Hamburger = () => (
	<NavButton>
		<HamburgerSlice />
		<HamburgerSlice />
		<HamburgerSlice />
	</NavButton>
);

export default Hamburger;
