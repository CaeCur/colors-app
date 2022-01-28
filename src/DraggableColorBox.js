import React from "react";
import { Box } from "@mui/material";

const styles = {
	root : {
		width        : "20%",
		height       : "25%",
		margin       : "0 auto",
		display      : "inline-block",
		position     : "relative",
		cursor       : "grab",
		marginBottom : "-4px"
	}
};

export default function DraggableColorBox (props) {
	return (
		<Box component="div" sx={styles.root} style={{ backgroundColor: props.color }}>
			{props.name}
		</Box>
	);
}
