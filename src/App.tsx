{/*}
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

	useEffect(() => {

		(async () => {


			let API_KEY = "00dc3df108d7a72b939238e8683195e4"
			let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=${API_KEY}`)
			let savedTextXML = await response.text();


			let savedTextXML2 = localStorage.getItem("openWeatherMap")
			let expiringTime = localStorage.getItem("expiringTime")


			let nowTime = (new Date()).getTime();


			if (expiringTime === null || nowTime > parseInt(expiringTime)) {


				let API_KEY = "00dc3df108d7a72b939238e8683195e4"
				let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=${API_KEY}`)
				savedTextXML2 = await response.text();



				let hours = 1
				let delay = hours * 3600000



				localStorage.setItem("openWeatherMap", savedTextXML2)
				localStorage.setItem("expiringTime", (nowTime + delay).toString())
			}



			const parser = new DOMParser();
			const xml = parser.parseFromString(savedTextXML, "application/xml");


			let dataToIndicators = new Array()

			let location = xml.getElementsByTagName("location")[1]

			let geobaseid = location.getAttribute("geobaseid")
			dataToIndicators.push(["Location", "geobaseid", geobaseid])

			let latitude = location.getAttribute("latitude")
			dataToIndicators.push(["Location", "Latitude", latitude])

			let longitude = location.getAttribute("longitude")
			dataToIndicators.push(["Location", "Longitude", longitude])

			let indicatorsElements = Array.from(dataToIndicators).map(
				(element) => <Indicator title={element[0]} subtitle={element[1]} value={element[2]} />
			)

			setIndicators(indicatorsElements)

			let arrayObjects = Array.from(xml.getElementsByTagName("time")).map((timeElement) => {
				let rangeHours = timeElement.getAttribute("from").split("T")[1] + " - " + timeElement.getAttribute("to").split("T")[1]
				let windDirection = timeElement.getElementsByTagName("windDirection")[0].getAttribute("deg") + " " + timeElement.getElementsByTagName("windDirection")[0].getAttribute("code")
				return { "rangeHours": rangeHours, "windDirection": windDirection }

			})

			arrayObjects = arrayObjects.slice(0, 8)
			setRowsTable(arrayObjects)

		})()

	}, [])

	return (
		<Grid container paddingX={15} spacing={2} alignItems="center">
			<Grid xs={6} md={4} lg={2}>
				{indicators[0]}
			</Grid>
			<Grid xs={6} md={4} lg={2}>
				{indicators[1]}
			</Grid>
			<Grid xs={6} md={4} lg={2}>
				{indicators[2]}
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
*/}
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import BasicTable from './components/BasicTable';
import './App.css'
import Indicator from './components/Indicator';
import Summary from './components/Summary';
import WeatherChart from './components/WeatherChart';
import ControlPanel from './components/ControlPanel';
import { useState, useEffect } from 'react';

interface Row {
  rangeHours: string;
  windDirection: string;
}

function App() {
  let [rowsTable, setRowsTable] = useState<Row[]>([]);
  let [indicators, setIndicators] = useState<JSX.Element[]>([]);

  useEffect(() => {
    (async () => {
      let API_KEY = "00dc3df108d7a72b939238e8683195e4";
      let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=${API_KEY}`);
      let savedTextXML = await response.text();

      let savedTextXML2 = localStorage.getItem("openWeatherMap");
      let expiringTime = localStorage.getItem("expiringTime");

      let nowTime = (new Date()).getTime();

      if (expiringTime === null || nowTime > parseInt(expiringTime)) {
        response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=${API_KEY}`);
        savedTextXML2 = await response.text();

        let hours = 1;
        let delay = hours * 3600000;

        localStorage.setItem("openWeatherMap", savedTextXML2);
        localStorage.setItem("expiringTime", (nowTime + delay).toString());
      }

      const parser = new DOMParser();
      const xml = parser.parseFromString(savedTextXML, "application/xml");

      let dataToIndicators = new Array();
      let location = xml.getElementsByTagName("location")[1];

      let geobaseid = location.getAttribute("geobaseid");
      dataToIndicators.push(["Location", "geobaseid", geobaseid]);

      let latitude = location.getAttribute("latitude");
      dataToIndicators.push(["Location", "Latitude", latitude]);

      let longitude = location.getAttribute("longitude");
      dataToIndicators.push(["Location", "Longitude", longitude]);

      let indicatorsElements = Array.from(dataToIndicators).map(
        (element) => <Indicator title={element[0]} subtitle={element[1]} value={element[2]} />
      );

      setIndicators(indicatorsElements);

      let arrayObjects = Array.from(xml.getElementsByTagName("time")).map((timeElement) => {
        let fromAttr = timeElement.getAttribute("from");
        let toAttr = timeElement.getAttribute("to");
        if (fromAttr && toAttr) {
          let rangeHours = fromAttr.split("T")[1] + " - " + toAttr.split("T")[1];
          let windDirection = timeElement.getElementsByTagName("windDirection")[0].getAttribute("deg") + " " + timeElement.getElementsByTagName("windDirection")[0].getAttribute("code");
          return { rangeHours, windDirection };
        } else {
          return null;
        }
      }).filter(item => item !== null) as Row[];

      arrayObjects = arrayObjects.slice(0, 8);
      setRowsTable(arrayObjects);
    })();
  }, []);

  return (
    <Grid container paddingX={15} spacing={2} alignItems="center">
      <Grid xs={6} md={4} lg={2}>
        {indicators[0]}
      </Grid>
      <Grid xs={6} md={4} lg={2}>
        {indicators[1]}
      </Grid>
      <Grid xs={6} md={4} lg={2}>
        {indicators[2]}
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
        <Grid xs={6} lg={6} sx={{ paddingBottom: "5%" }}>
          <Indicator title='Domingo' subtitle='Probabilidad' value={0.13} />
        </Grid>
        <Grid xs={6} lg={6} sx={{ paddingBottom: "5%" }}>
          <Summary></Summary>
        </Grid>
      </Grid>
      <Grid xs={12} md={6} lg={10}>
        <BasicTable rows={rowsTable}></BasicTable>
      </Grid>

      <Grid xs={12} lg={2}>
        <ControlPanel />
      </Grid>
      <Grid xs={12} lg={10}>
        <WeatherChart></WeatherChart>
      </Grid>
    </Grid>
  );
}

export default App;
