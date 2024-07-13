import { Chart } from "react-google-charts";
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';

export default function WeatherChart() {
  const [chartData, setChartData] = useState<(string | number)[][]>([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      let API_KEY = "00dc3df108d7a72b939238e8683195e4";
      let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=${API_KEY}`);
      let savedTextXML = await response.text();

      const parser = new DOMParser();
      const xml = parser.parseFromString(savedTextXML, "application/xml");

      const forecastTimes = Array.from(xml.getElementsByTagName("time"));

      const data: (string | number)[][] = [["Hora", "Precipitación", "Humedad", "Nubosidad"]];

      setChartData(data)

      forecastTimes.forEach((timeElement) => {
        const from = timeElement.getAttribute("from");
        const hour = from ? new Date(from).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';

        const precipitationAttr = timeElement.getElementsByTagName("precipitation")[0]?.getAttribute("probability");
        const humidityAttr = timeElement.getElementsByTagName("humidity")[0]?.getAttribute("value");
        const cloudsAttr = timeElement.getElementsByTagName("clouds")[0]?.getAttribute("all");

        const precipitation = precipitationAttr ? parseFloat(precipitationAttr) : 0;
        const humidity = humidityAttr ? parseInt(humidityAttr, 10) : 0;
        const clouds = cloudsAttr ? parseInt(cloudsAttr, 10) : 0;

        if (hour) {
          data.push([
            hour,
            precipitation,
            humidity,
            clouds
          ]);
        }
      });

      setChartData(data);
    };

    fetchWeatherData();
  }, []);

  const options = {
    title: "Precipitación, Humedad y Nubosidad vs Hora",
    titlePosition: "out",
    curveType: "function",
    legend: {position: 'bottom', textStyle: {color: 'black', fontSize: 12}},
    titleTextStyle: { color: "black",
        fontSize: 18,
        bold: true
    }
  };

  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Chart
        chartType="LineChart"
        data={chartData}
        width="100%"
        height="500px"
        options={options}
        legendToggle
      />
    </Paper>
  );
}
