import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import BasicTable from './components/BasicTable';

import './App.css'
import Indicator from './components/Indicator';
import Summary from './components/Summary';
import WeatherChart from './components/WeatherChart';
import ControlPanel from './components/ControlPanel';
{/* 
COSAS DE ED: 
      Set<String> set1 = new HashSet();// no tiene un orden, es aleatorio
      //  Set<String> set1 = new TreeSet(); tiene orden natural
      //si se prueba clase como hashet treeset no tiene orden natural, sale una excepcion
     // Set<String> set1 = new LinkedHashSet(); muestra los elementos como fueron agregados


        String s = "cadena nueva con palabras casi que con repiticion";
        String[] split = s.split(" ");
            
        System.out.println( "Palabras con repeticion: " + split.length );
        for(int i = 0; i< split.length; i++){
            String word = split[i];
            boolean b = set1.add(word);
            System.out.println("Al insertar palabra "+word +" se obtuvo + "+b);

        }    
        Iterator<String> iterator = set1.iterator();
        while (iterator.hasNext()) {
            String e =  iterator.next();
            System.out.println(e);
            
        }; 


        /*
         * Clase book sin comparable
         * 
         */


        System.out.println("Palabras en el set únicas: "+set1.size());
            Set<Book> set2 = new LinkedHashSet();
            Set<Book> set3 = new TreeSet<>();
            Set<Book> set4 = new TreeSet<>((book1,book2)->{
             //   return book1.getYear()-book2.getYear();
                return book1.getYear()-book2.getYear();

            });
    }
*/}
function App() {
{/*changes */}
	return (
		<Grid container paddingX={15} spacing={2} alignItems="center">
			<Grid xs={6} md={4} lg={2}>
				<Indicator title='Lunes' subtitle='Probabilidad' value={0.13} />
			</Grid>
			<Grid xs={6} md={4} lg={2}>
				<Indicator title='Martes' subtitle='Probabilidad' value={0.13} />
			</Grid>
			<Grid xs={6} md={4} lg={2}>
				<Indicator title='Miércoles' subtitle='Probabilidad' value={0.13} />
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
