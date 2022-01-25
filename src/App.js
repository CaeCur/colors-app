import Palette from "./Palette";
import PaletteList from "./PaletteList";
import { generatePalette } from "./colorHelpers";
import seedColors from "./seedColors";
import { Route, Switch } from "react-router-dom";

function App () {
	function findPalette (id) {
		return seedColors.find(function (palette) {
			return palette.id === id;
		});
	}

	return (
		<Switch>
			<Route exact path="/" render={() => <PaletteList palettes={seedColors} />} />
			<Route
				exact
				path="/palette/:id"
				render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />}
			/>
		</Switch>
	);
}

export default App;
