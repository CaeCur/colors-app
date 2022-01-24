import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

export default class Navbar extends Component {
	render () {
		const { level, changeLevel } = this.props;

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
			</nav>
		);
	}
}
