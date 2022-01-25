import React, { Component } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import { FormControl, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
	constructor (props) {
		super(props);
		this.state = { format: "hex", snackOpen: false };
		this.changeFormat = this.changeFormat.bind(this);
		this.closeSnackbar = this.closeSnackbar.bind(this);
	}

	changeFormat (evt) {
		this.setState({ format: evt.target.value, snackOpen: true }, () => {
			this.props.changeFormat(this.state.format);
		});
	}

	closeSnackbar () {
		this.setState({ snackOpen: false });
	}

	render () {
		const { level, changeLevel } = this.props;
		const { format } = this.state;

		return (
			<nav className="Navbar">
				<div className="logo">
					<Link to="/">PalettePal</Link>
				</div>

				<div className="slider-container">
					<span>Level: {level}</span>
					<Slider
						className="slider"
						defaultValue={level}
						min={100}
						max={900}
						step={100}
						onAfterChange={changeLevel}
					/>
				</div>

				<FormControl variant="standard" sx={{ ml: "auto", mr: "1rem", minWidth: 100 }}>
					<Select value={format} onChange={this.changeFormat}>
						<MenuItem value="hex">Hex</MenuItem>
						<MenuItem value="rgb">RGB</MenuItem>
						<MenuItem value="rgba">RGBA</MenuItem>
					</Select>
				</FormControl>

				<Snackbar
					anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
					open={this.state.snackOpen}
					autoHideDuration={3000}
					message={<span id="snack-message">Format changed to {format}</span>}
					ContentProps={{ "aria-describedby": "snack-message" }}
					onClose={this.closeSnackbar}
					action={[
						<IconButton
							onClick={this.closeSnackbar}
							color="inherit"
							key="close-snackbar"
							aria-label="close-snackbar"
						>
							<CloseIcon />
						</IconButton>
					]}
				/>
			</nav>
		);
	}
}
