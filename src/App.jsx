import { useState } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import WorkReports from "./components/reports/WorkReports";
function App() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2} direction='column'>
				<Grid item>
					<Navbar />
				</Grid>
				<Grid item>
					<WorkReports />
				</Grid>
			</Grid>
		</Box>
	);
}

export default App;
