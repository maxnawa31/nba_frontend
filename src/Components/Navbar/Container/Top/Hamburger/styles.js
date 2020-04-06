import styled from "styled-components";

export const HamburgerSlice = styled.div`
	height: 2px;
	background-color: white;
	width: 100%;
	position: absolute;
`;

export const NavButton = styled.button`
	height: 18px;
	width: 30px;
	padding:0;
	background: 0 0;
	border: none;
	// border: 1px solid black;
	position: relative;
	${HamburgerSlice}:first-child {
		top: 0;
	}

	${HamburgerSlice}:nth-child (2) {
		top: 8px;
	}

	${HamburgerSlice}:last-child {
		bottom: 0;
	}
`;