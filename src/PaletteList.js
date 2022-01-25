import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PaletteList extends Component {
	render () {
		const { palettes } = this.props;

		const paletteTiles = palettes.map((palette) => (
			<p>
				<Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
			</p>
		));
		return (
			<div>
				<h1>Home Page</h1>
				<div>{paletteTiles}</div>
			</div>
		);
	}
}
