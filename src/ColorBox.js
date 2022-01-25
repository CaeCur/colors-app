import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import "./ColorBox.css";

export default class ColorBox extends Component {
	constructor (props) {
		super(props);
		this.state = { isCopying: false };
		this.changeCopyState = this.changeCopyState.bind(this);
	}

	changeCopyState () {
		this.setState({ isCopying: true }, () => {
			setTimeout(() => {
				this.setState({ isCopying: false });
			}, 1500);
		});
	}

	render () {
		const { background, name } = this.props;
		return (
			<CopyToClipboard text={this.props.background} onCopy={this.changeCopyState}>
				<div style={{ background }} className="ColorBox">
					{/* copy overlay */}
					<div style={{ background }} className={`copy-overlay ${this.state.isCopying && "show"}`} />
					<div className={`copy-msg ${this.state.isCopying && "show"}`}>
						<h1>copied</h1>
						<p>{this.props.background}</p>
					</div>
					{/* copy overlay end */}

					<div className="copy-container">
						<div className="box-content">
							<span>{name}</span>
						</div>

						<button className="copy-btn">Copy</button>
					</div>
					<Link to={"/"} onClick={(e) => e.stopPropagation()}>
						<span className="more-btn">More</span>
					</Link>
				</div>
			</CopyToClipboard>
		);
	}
}
