import Palette from "./Palette";
import PaletteList from "./PaletteList";
import { generatePalette } from "./colorHelpers";
import seedColors from "./seedColors";
import { Route, Switch } from "react-router-dom";
import SingleColor from "./SingleColor";

function App () {
	function findPalette (id) {
		return seedColors.find(function (palette) {
			return palette.id === id;
		});
	}

	return (
		<Switch>
			<Route exact path="/" render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />} />
			<Route
				exact
				path="/palette/:id"
				render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />}
			/>
			<Route
				exact
				path="/palette/:paletteId/:colorId"
				render={(routeProps) => (
					<SingleColor
						id={routeProps.match.params.colorId}
						palette={generatePalette(findPalette(routeProps.match.params.paletteId))}
					/>
				)}
			/>
		</Switch>
	);
}

export default App;
