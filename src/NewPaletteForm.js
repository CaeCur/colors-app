import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ChromePicker } from "react-color";
import { Button } from "@mui/material";
import DraggableColorBox from "./DraggableColorBox";
import { ValidatorForm } from "react-material-ui-form-validator";
import TextValidator from "react-material-ui-form-validator/lib/TextValidator";

const drawerWidth = 300;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
	flexGrow   : 1,
	height     : "calc(100vh - 64px)",
	padding    : "0",
	transition : theme.transitions.create("margin", {
		easing   : theme.transitions.easing.sharp,
		duration : theme.transitions.duration.leavingScreen
	}),
	marginLeft : `-${drawerWidth}px`,
	...(open && {
		transition : theme.transitions.create("margin", {
			easing   : theme.transitions.easing.easeOut,
			duration : theme.transitions.duration.enteringScreen
		}),
		marginLeft : 0
	})
}));

const AppBar = styled(MuiAppBar, {
	shouldForwardProp : (prop) => prop !== "open"
})(({ theme, open }) => ({
	transition : theme.transitions.create([ "margin", "width" ], {
		easing   : theme.transitions.easing.sharp,
		duration : theme.transitions.duration.leavingScreen
	}),
	...(open && {
		width      : `calc(100% - ${drawerWidth}px)`,
		marginLeft : `${drawerWidth}px`,
		transition : theme.transitions.create([ "margin", "width" ], {
			easing   : theme.transitions.easing.easeOut,
			duration : theme.transitions.duration.enteringScreen
		})
	})
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display        : "flex",
	alignItems     : "center",
	padding        : theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent : "flex-end"
}));

export default function NewPaletteForm () {
	const theme = useTheme();
	const [ open, setOpen ] = React.useState(true);
	const [ currentColor, setCurrentColor ] = React.useState("pink");
	const [ colors, setColors ] = React.useState([ { color: "blue", name: "blue" } ]);
	const [ newName, setNewName ] = React.useState("");

	React.useEffect(() => {
		ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
			const nameCheck = colors.every(({ name }) => value.toLowerCase() !== name.toLowerCase());
			if (nameCheck) {
				return true;
			}
			else {
				return false;
			}
		});

		ValidatorForm.addValidationRule("isColorUnique", (value) => {
			const colorCheck = colors.every(({ color }) => color !== currentColor);
			if (colorCheck) {
				return true;
			}
			else {
				return false;
			}
		});
	});

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleCurrentColorChange = (newColor) => {
		setCurrentColor(newColor.hex);
	};

	const addNewColor = () => {
		const newColor = { color: currentColor, name: newName };
		setColors([ ...colors, newColor ]);
		setNewName("");
	};

	const handleNameChange = (evt) => {
		setNewName(evt.target.value);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar position="fixed" open={open}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{ mr: 2, ...(open && { display: "none" }) }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Create a palette
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width                : drawerWidth,
					flexShrink           : 0,
					"& .MuiDrawer-paper" : {
						width     : drawerWidth,
						boxSizing : "border-box"
					}
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<Typography variant="h4">Choose your colors</Typography>
				<div>
					<Button variant="contained" color="error">
						Clear Palette
					</Button>
					<Button variant="contained" color="primary">
						Random Color
					</Button>
				</div>
				<ChromePicker color={currentColor} onChange={(newColor) => handleCurrentColorChange(newColor)} />
				<ValidatorForm onSubmit={() => addNewColor(currentColor)}>
					<TextValidator
						value={newName}
						onChange={(evt) => handleNameChange(evt)}
						validators={[ "isColorNameUnique", "isColorUnique", "required" ]}
						errorMessages={[
							"The color name must be unique",
							"This color has already been used",
							"This color needs a name"
						]}
					/>
					<Button
						variant="contained"
						color="success"
						style={{ backgroundColor: currentColor }}
						// onClick={() => addNewColor(currentColor)}
						type="submit"
					>
						Add Color
					</Button>
				</ValidatorForm>
			</Drawer>
			<Main open={open}>
				<DrawerHeader />
				{colors.map((color) => <DraggableColorBox key={color.name} color={color.color} name={color.name} />)}
			</Main>
		</Box>
	);
}
