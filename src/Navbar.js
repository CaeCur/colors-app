import React, { Component } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

export default class Navbar extends Component {
	constructor (props) {
		super(props);
		this.state = { format: "hex" };
		this.changeFormat = this.changeFormat.bind(this);
	}

	changeFormat (evt) {
		this.setState({ format: evt.target.value }, () => {
			this.props.changeFormat(this.state.format);
		});
	}

	render () {
		const { level, changeLevel } = this.props;
		const { format } = this.state;

		return (
			<nav className="Navbar">
				<div className="logo">
					<a href="/">Palette Pal</a>
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

				<div className="select-container">
					<Select value={format} onChange={this.changeFormat}>
						<MenuItem value="hex">Hex</MenuItem>
						<MenuItem value="rgb">RGB</MenuItem>
						<MenuItem value="rgba">RGBA</MenuItem>
					</Select>
				</div>
			</nav>
		);
	}
}
