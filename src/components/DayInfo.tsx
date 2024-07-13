import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
//import {useState} from "react";

interface Config {
    title?: String;
    subtitle?: String;
    value: Number;
    src: string;
}

export default function DayInfo(config: Config) {

   {/* let [imagen, setImagen] = useState([])*/}

    return (
<Card sx={{ maxWidth: 345 }}>
    <CardActionArea>

        <CardContent>
            <Typography gutterBottom component="h2" variant="h6" color="primary">
                {config.title}
            </Typography>
            <Typography component="p" variant="h6">
            {config.subtitle}
            
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
            {config.value.toString()}
                        </Typography>
        </CardContent>
        <CardMedia
            component="img"
            height="70"
            image={config.src}
            alt="Amanecer"
        />
    </CardActionArea>
</Card>


       
    )

}