import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import BasicTable from './components/BasicTable';
import './App.css'
import Indicator from './components/Indicator';
import Summary from './components/Summary';
import WeatherChart from './components/WeatherChart';
import ControlPanel from './components/ControlPanel';
import { useState, useEffect } from 'react';
import DayInfo from './components/DayInfo';

import fewclouds from '../src/assets/few clouds.jpg'
import brokenclouds from '../src/assets/brokenclouds.jpg'
import clearsky from '../src/assets/clearsky.jpg'
import ligthrain from '../src/assets/ligthrain.jpg'
import overcastclouds from '../src/assets/overcastclouds.jpg'
import scatteredclouds from '../src/assets/scatteredclouds.jpg'

interface Row {
  rangeHours: string;
  windDirection: string;
}

function App() {
  let [rowsTable, setRowsTable] = useState<Row[]>([]);
  let [indicators, setIndicators] = useState<JSX.Element[]>([]);
  {/*let [dayInfo, setDayInfo] = useState<JSX.Element[]>([]);*/}


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

      <Grid xs={6} md={4} lg={4}>
        {indicators[0]}
      </Grid>
      <Grid xs={6} md={4} lg={4}>
        {indicators[1]}
      </Grid>
      <Grid xs={6} md={4} lg={4}>
        {indicators[2]}
      </Grid>
      <Grid xs={6} md={4} lg={2}>
        <DayInfo title='Lunes' subtitle='Few Clouds' value={0.17} src = {fewclouds} />
      </Grid>
      <Grid xs={6} md={4} lg={2}>
        <DayInfo title='Martes' subtitle='Few Clouds' value={0.63} src = {brokenclouds}/>
      </Grid>
      <Grid xs={6} md={4} lg={2}>
        <DayInfo title='Miércoles' subtitle='Few Clouds' value={0.54} src={clearsky}/>
      </Grid>
      <Grid xs={6} md={4} lg={2}>
        <DayInfo title='Jueves' subtitle='Few Clouds' value={0.83} src={ligthrain}/>
      </Grid>
      <Grid xs={6} md={4} lg={2}>
        <DayInfo title='Viernes' subtitle='Few Clouds' value={0.43} src={scatteredclouds} />
      </Grid>
      <Grid xs={6} md={4} lg={2}>
        <DayInfo title='Sábado' subtitle='Few Clouds' value={0.32} src = {overcastclouds} />
      </Grid>

      <Grid xs={12} lg={4}>
        <Grid xs={6} lg={6} sx={{ paddingBottom: "5%" }}>
          <DayInfo title='Domingo' subtitle='Few Clouds' value={0.13} src={fewclouds} />
        </Grid>
        <Grid xs={6} lg={6} sx={{ paddingBottom: "5%" }}>
          <Summary></Summary>
        </Grid>
      </Grid>
      <Grid xs={12} md={6} lg={8}>
        <BasicTable rows={rowsTable}></BasicTable>
      </Grid>

      <Grid xs={12} lg={9}>
        <WeatherChart></WeatherChart>
      </Grid>

      <Grid xs={12} lg={3}>
        <ControlPanel />
      </Grid>
    </Grid>
  );
}

export default App;
