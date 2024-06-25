import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import BasicTable from './components/BasicTable';

import './App.css'
import Indicator from './components/Indicator';
import Summary from './components/Summary';
import WeatherChart from './components/WeatherChart';
import ControlPanel from './components/ControlPanel';

function App() {
{/*changes */}
	return (
		<Grid container paddingX={15} spacing={2} alignItems="center">
			<Grid xs={6} md={4} lg={2}>
				<Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} />
			</Grid>
			<Grid xs={6} md={4} lg={2}>
				<Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} />
			</Grid>
			<Grid xs={6} md={4} lg={2}>
				<Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} />
			</Grid>
			<Grid xs={6} md={4} lg={2}>
				<Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} />
			</Grid>
			<Grid xs={6} md={4} lg={2}>
				<Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} />
			</Grid>
			<Grid xs={6} md={4} lg={2}>
				<Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} />
			</Grid>

			<Grid xs={12} lg={2}>

				<Grid xs={6} lg={6} sx={({ paddingBottom: "5%" })}>
					<Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} />
				</Grid>

				<Grid xs={6} lg={6} sx={({ paddingBottom: "5%" })}>
					<Summary></Summary>
				</Grid>

			</Grid>
			<Grid xs={12} md={6} lg={10} >
				<BasicTable />
			</Grid>

			<Grid xs={12} lg={2}>
				<ControlPanel />
			</Grid>

			<Grid xs={12} lg={10}>
				<WeatherChart></WeatherChart>
			</Grid>





		</Grid>
	)

}



export default App
