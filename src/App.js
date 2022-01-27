import Palette from "./Palette";
import PaletteList from "./PaletteList";
import { generatePalette } from "./colorHelpers";
import seedColors from "./seedColors";
import { Route, Switch } from "react-router-dom";
import SingleColor from "./SingleColor";
import NewPaletteForm from "./NewPaletteForm";

function App () {
	function findPalette (id) {
		return seedColors.find(function (palette) {
			return palette.id === id;
		});
	}

	return (
		<Switch>
			{/* home route */}
			<Route exact path="/" render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />} />

			{/* create palette route */}
			<Route exact path={"/palette/new"} render={() => <NewPaletteForm />} />

			{/* single color route */}
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

			{/* palette route */}
			<Route
				exact
				path="/palette/:id"
				render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />}
			/>
		</Switch>
	);
}

export default App;
