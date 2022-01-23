import React, { Component } from "react";
import ColorBox from "./ColorBox";
import { generatePalette } from "./colorHelpers";
import seedColors from "./seedColors";
import "./Palette.css";

export default class Palette extends Component {
	render () {
		console.log(generatePalette(seedColors[4]));

		const colorBoxes = this.props.colors.map((color, i) => (
			<ColorBox key={color.name} background={color.color} name={color.name} />
		));

		return (
			<div className="Palette">
				<div className="Palette-colors">{colorBoxes}</div>
			</div>
		);
	}
}
