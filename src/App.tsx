import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import BasicTable from './components/BasicTable';


import './App.css'
import Calculator from './components/Calculator';
import Plan from './components/Plan';
import Result from './components/Result';
import Indicator from './components/Indicator';
import Summary from './components/Summary';
import WeatherChart from './components/WeatherChart';
import ControlPanel from './components/ControlPanel';

function App() {

	/*return (
		<Grid container spacing={5}>
				<Grid xs={12} sm={12} md={12} lg={12} >
					<Calculator/>
				</Grid>
				<Grid xs={12} sm={6} md={6} lg={6}>
					<Plan title="Plan" subtitle="100 Gb" description="Todos los servicios incluídos" />
				</Grid>
				<Grid xs={12} sm={6} md={6} lg={6}>
					<Result title="$120" subtitle="6 meses" description="Plan 100 Gb"/>
				</Grid>
			</Grid>
	  )*/

	return (
		<Grid container spacing={5} alignItems="center">
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


	//	<Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} />

	/*
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
			*/
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
