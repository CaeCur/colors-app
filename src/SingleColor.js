import React, { Component } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default class SingleColor extends Component {
	constructor (props) {
		super(props);
		this.state = { format: "hex" };
		this._shades = this.gatherShades(this.props.palette, this.props.id);
		this.changeFormat = this.changeFormat.bind(this);
	}

	gatherShades (palette, colorToFilter) {
		let shades = [];
		let allColors = palette.colors;

		for (let shadeNumber in allColors) {
			shades = shades.concat(allColors[shadeNumber].filter((color) => color.id === colorToFilter));
		}

		return shades.slice(1);
	}

	changeFormat (format) {
		console.log(format);
		this.setState({ format });
	}

	capitalizeFirstLetter (string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	render () {
		const { format } = this.state;
		const { id, palette } = this.props;
		const { paletteName, emoji } = palette;

		const colorBoxes = this._shades.map((color) => (
			<ColorBox
				key={color.name}
				paletteId={palette}
				id={color.id}
				background={color[format]}
				name={color.name}
				showMore={false}
			/>
		));

		return (
			<div className="SingleColorPalette Palette">
				<Navbar showSlider={false} changeFormat={this.changeFormat} />

				<div className="Palette-colors">
					{colorBoxes}
					<div className="go-back ColorBox">
						<Link to={`/palette/${palette.id}`} className="back-btn">
							Go Back
						</Link>
					</div>
				</div>

				<Footer paletteName={`${paletteName} - ${this.capitalizeFirstLetter(id)}`} emoji={emoji} />
			</div>
		);
	}
}
