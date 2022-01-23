import Palette from "./Palette";
import { generatePalette } from "./colorHelpers";
import seedColors from "./seedColors";

function App () {
	return (
		<div>
			<Palette palette={generatePalette(seedColors[4])} />
		</div>
	);
}

export default App;
