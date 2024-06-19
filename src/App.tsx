import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import './App.css'
import Calculator from './components/Calculator';
import Plan from './components/Plan';
import Result from './components/Result';
function App() {
	
		return (
			<Grid container spacing={5}>
				<Grid xs={12} sm={12} md={12} lg={12}>
					<Calculator/>
				</Grid>
				<Grid xs={12} sm={6} md={6} lg={6}>
					<Plan />
				</Grid>
				<Grid xs={12} sm={6} md={6} lg={6}>
					<Result/>
				</Grid>
			</Grid>
		)
/*
		return (
			<Grid container spacing={5}>
				<Grid xs={4} lg={12}> 1 </Grid>
				<Grid xs={4} lg={6}> 2 </Grid>
				<Grid xs={4} lg={6}> 3 </Grid>
			</Grid>
		) */
}



export default App
