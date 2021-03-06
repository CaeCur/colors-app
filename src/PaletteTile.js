import React, { Component } from "react";
import Box from "@mui/material/Box";

const styles = {
	root       : {
		backgroundColor : "white",
		border          : "1px solid black",
		borderRadius    : "5px",
		padding         : "0.5rem",
		position        : "relative",
		overflow        : "visible",
		cursor          : "pointer",
		"&:hover svg"   : {
			opacity : 1
		}
	},
	colors     : {
		backgroundColor : "#dae1e4",
		height          : "150px",
		width           : "100%",
		borderRadius    : "5px",
		overflow        : "hidden"
	},
	title      : {
		display        : "flex",
		justifyContent : "space-between",
		alignItems     : "center",
		margin         : "0",
		color          : "black",
		paddingTop     : "0.5rem",
		fontSize       : "1rem",
		position       : "relative"
	},
	emoji      : {
		marginLeft : "0.5rem",
		fontSize   : "1.2rem"
	},
	miniTiles  : {
		height       : "25%",
		width        : "20%",
		display      : "inline-block",
		margin       : "0 auto",
		position     : "relative",
		marginBottom : "-3.5px"
	},
	deleteIcon : {
		color           : "white",
		backgroundColor : "#eb3d30",
		width           : "20px",
		height          : "20px",
		position        : "absolute",
		right           : "0px",
		top             : "0px",
		padding         : "10px",
		zIndex          : 10,
		opacity         : 0
	}
};

class PaletteTile extends Component {
	constructor (props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick () {
		this.props.goToPalette(this.props.id);
	}

	render () {
		const { colors, paletteName, emoji } = this.props;

		const miniTiles = colors.map((color) => (
			<Box key={color.name} component="div" sx={styles.miniTiles} style={{ backgroundColor: color.color }} />
		));

		return (
			<Box component="div" sx={styles.root} onClick={this.handleClick}>
				<Box component="div" sx={styles.colors}>
					{miniTiles}
				</Box>
				<Box component="h5" sx={styles.title}>
					{paletteName}
					<Box component="span" sx={styles.emoji}>
						{emoji}
					</Box>
				</Box>
			</Box>
		);
	}
}

export default PaletteTile;
