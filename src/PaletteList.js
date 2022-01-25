import React, { Component } from "react";
import PaletteTile from "./PaletteTile";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const styles = {
	root      : {
		background     : "lightBlue",
		height         : "100vh",
		display        : "flex",
		alignItems     : "flex-start",
		justifyContent : "center"
	},
	container : {
		width         : "50%",
		display       : "flex",
		alignItems    : "flex-start",
		flexDirection : "column",
		flexWrap      : "wrap"
	},
	nav       : {
		display        : "flex",
		width          : "100%",
		justifyContent : "space-between",
		color          : "white"
	},
	palettes  : {
		boxSizing           : "border-box",
		width               : "100%",
		display             : "grid",
		gridTemplateColumns : "repeat(3,30%)",
		gridGap             : "5%"
	}
};

export default class PaletteList extends Component {
	constructor (props) {
		super(props);
		this.goToPalette = this.goToPalette.bind(this);
	}

	goToPalette (id) {
		this.props.history.push(`/palette/${id}`);
	}

	render () {
		const { palettes } = this.props;

		const paletteTiles = palettes.map((palette) => (
			<PaletteTile key={palette.id} {...palette} goToPalette={this.goToPalette} />
		));

		return (
			<Box component="div" sx={styles.root}>
				<Box component="div" sx={styles.container}>
					<Box component="nav" sx={styles.nav}>
						<h1>PalettePal</h1>
					</Box>
					<Box component="div" sx={styles.palettes}>
						{paletteTiles}
					</Box>
				</Box>
			</Box>
		);
	}
}
