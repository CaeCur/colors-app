import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./Palette.css";

export default class Palette extends Component {
	constructor (props) {
		super(props);
		this.state = { level: 500, format: "hex" };
		this.changeLevel = this.changeLevel.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}

	changeLevel (level) {
		this.setState({ level });
	}

	changeFormat (format) {
		this.setState({ format });
	}

	render () {
		const { colors, paletteName, emoji, id } = this.props.palette;
		const { level, format } = this.state;

		const colorBoxes = colors[level].map((color) => (
			<ColorBox
				key={color.id}
				paletteId={id}
				id={color.id}
				background={color[format]}
				name={color.name}
				showMore={true}
			/>
		));

		return (
			<div className="Palette">
				<Navbar level={level} changeLevel={this.changeLevel} changeFormat={this.changeFormat} showSlider />
				<div className="Palette-colors">{colorBoxes}</div>
				<Footer paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}
