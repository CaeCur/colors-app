import React from "react";
import Box from "@mui/material/Box";

const styles = {
	root   : {
		backgroundColor : "white",
		border          : "1px solid black",
		borderRadius    : "5px",
		padding         : "0.5rem",
		position        : "relative",
		overflow        : "hidden",
		"&:hover"       : {
			cursor : "pointer"
		}
	},
	colors : {
		backgroundColor : "grey"
	},
	title  : {
		display        : "flex",
		justifyContent : "space-between",
		alignItems     : "centre",
		margin         : "0",
		color          : "black",
		paddingTop     : "0.5rem",
		fontSize       : "1rem",
		position       : "relative"
	},
	emoji  : {
		marginLeft : "0.5rem",
		fontSize   : "1.5rem"
	}
};

function PaletteTile (props) {
	const { paletteName, emoji } = props;

	return (
		<Box component="div" sx={styles.root}>
			<Box component="div" sx={styles.colors}>
				Colors
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

export default PaletteTile;
