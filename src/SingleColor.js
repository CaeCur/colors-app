import React, { Component } from "react";
import ColorBox from "./ColorBox";

export default class SingleColor extends Component {
	constructor (props) {
		super(props);
		this._shades = this.gatherShades(this.props.palette, this.props.id);
	}

	gatherShades (palette, colorToFilter) {
		let shades = [];
		let allColors = palette.colors;

		for (let shadeNumber in allColors) {
			shades = shades.concat(allColors[shadeNumber].filter((color) => color.id === colorToFilter));
		}

		return shades.slice(1);
	}

	render () {
		console.log(this._shades);

		const colorBoxes = this._shades.map((color) => (
			<ColorBox
				key={color.name}
				paletteId={this.props.palette}
				id={color.id}
				background={color.hex}
				name={color.name}
				showMore={false}
			/>
		));

		return (
			<div className="Palette">
				{<h1>Single Color Palette for {this.props.palette.paletteName}</h1>}
				<div className="Palette-colors">{colorBoxes}</div>
			</div>
		);
	}
}
