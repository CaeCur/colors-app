import React from "react";

export default function Footer (props) {
	return (
		<footer className="Palette-footer">
			{props.paletteName}
			<span className="footer-emoji">{props.emoji}</span>
		</footer>
	);
}
