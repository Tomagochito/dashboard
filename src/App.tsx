import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import BasicTable from './components/BasicTable';

import './App.css'
import Indicator from './components/Indicator';
import Summary from './components/Summary';
import WeatherChart from './components/WeatherChart';
import ControlPanel from './components/ControlPanel';
import { useState, useEffect } from 'react';

function App() {

	let [rowsTable, setRowsTable] = useState([])
	let [indicators, setIndicators] = useState([])
 {/* Hook: useEffect */}
	useEffect(()=>{

		(async ()=>{

			{/* Request */}

			let API_KEY = "00dc3df108d7a72b939238e8683195e4"
			let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=${API_KEY}`)
			let savedTextXML = await response.text();

			{/* 2. Del LocalStorage, obtiene el valor de las claves openWeatherMap y expiringTime */}

			let savedTextXML2 = localStorage.getItem("openWeatherMap")
			let expiringTime = localStorage.getItem("expiringTime")

			{/* 3. Obtenga la estampa de tiempo actual */}

			let nowTime = (new Date()).getTime();

			{/* 4. Realiza la petición asicrónica cuando: 
				(1) La estampa de tiempo de expiración (expiringTime) es nula, o  
				(2) La estampa de tiempo actual es mayor al tiempo de expiración */}

			if(expiringTime === null || nowTime > parseInt(expiringTime)) {

				{/* 5. Request */}

				let API_KEY = "00dc3df108d7a72b939238e8683195e4"
				let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=${API_KEY}`)
				savedTextXML2 = await response.text();


				{/* 6. Diferencia de tiempo */}

				let hours = 1
				let delay = hours * 3600000


				{/* 7. En el LocalStorage, almacena texto en la clave openWeatherMap y la estampa de tiempo de expiración */}

				localStorage.setItem("openWeatherMap", savedTextXML2)
				localStorage.setItem("expiringTime", (nowTime + delay ).toString() )
			}



			const parser = new DOMParser();
			const xml = parser.parseFromString(savedTextXML, "application/xml");

			{/* Arreglo para agregar los resultados */}

			let dataToIndicators = new Array()

			{/* 
				Análisis, extracción y almacenamiento del contenido del XML 
				en el arreglo de resultados
			*/}

			let location = xml.getElementsByTagName("location")[1]

			let geobaseid = location.getAttribute("geobaseid")
			dataToIndicators.push(["Location","geobaseid", geobaseid])

			let latitude = location.getAttribute("latitude")
			dataToIndicators.push(["Location","Latitude", latitude])

			let longitude = location.getAttribute("longitude")
			dataToIndicators.push(["Location","Longitude", longitude])


			{/* Renderice el arreglo de resultados en un arreglo de elementos Indicator */}

			let indicatorsElements = Array.from(dataToIndicators).map(
			(element) => <Indicator title={element[0]} subtitle={element[1]} value={element[2]} />
			)
			
			{/* Modificación de la variable de estado mediante la función de actualización */}

			setIndicators(indicatorsElements)

			{/* 
			2. Procese los resultados de acuerdo con el diseño anterior.
			Revise la estructura del documento XML para extraer los datos necesarios. 
			*/}

			let arrayObjects = Array.from( xml.getElementsByTagName("time") ).map( (timeElement) =>  {
						
			let rangeHours = timeElement.getAttribute("from").split("T")[1] + " - " + timeElement.getAttribute("to").split("T")[1]

			let windDirection = timeElement.getElementsByTagName("windDirection")[0].getAttribute("deg") + " "+  timeElement.getElementsByTagName("windDirection")[0].getAttribute("code") 
					
			return { "rangeHours": rangeHours,"windDirection": windDirection }
				
			})

			arrayObjects = arrayObjects.slice(0,8)
			setRowsTable(arrayObjects)

		})()

	},[])


	return (
		<Grid container paddingX={15} spacing={2} alignItems="center">
			<Grid xs={6} md={4} lg={2}>
				{indicators[0]}
				{/* <Indicator title='Lunes' subtitle='Probabilidad' value={0.13} />*/}
			</Grid>
			<Grid xs={6} md={4} lg={2}>
				{indicators[1]}
				{/*<Indicator title='Martes' subtitle='Probabilidad' value={0.13} />*/}
			</Grid>
			<Grid xs={6} md={4} lg={2}>
				{indicators[2]}
				{/*<Indicator title='Miércoles' subtitle='Probabilidad' value={0.13} />*/}
			</Grid>
			<Grid xs={6} md={4} lg={2}>
				<Indicator title='Jueves' subtitle='Probabilidad' value={0.13} />
			</Grid>
			<Grid xs={6} md={4} lg={2}>
				<Indicator title='Viernes' subtitle='Probabilidad' value={0.13} />
			</Grid>
			<Grid xs={6} md={4} lg={2}>
				<Indicator title='Sábado' subtitle='Probabilidad' value={0.13} />
			</Grid>

			<Grid xs={12} lg={2}>

				<Grid xs={6} lg={6} sx={({ paddingBottom: "5%" })}>
					<Indicator title='Domingo' subtitle='Probabilidad' value={0.13} />
				</Grid>

				<Grid xs={6} lg={6} sx={({ paddingBottom: "5%" })}>
					<Summary></Summary>
				</Grid>

			</Grid>
			<Grid xs={12} md={6} lg={10} >
			<BasicTable rows={rowsTable}></BasicTable>
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
