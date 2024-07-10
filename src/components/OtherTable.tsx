import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useState, useEffect } from "react";

interface Movie {
    genre: string;
    inflation_adjusted_gross: string;
    movie_title: string;
    mpaa_rating: string;
    release_date: string;
    total_gross: string;
}

export default function OtherTable() {
    let [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        (async () => {
            let APIKEY = "https://dawm-4d00f-default-rtdb.firebaseio.com/movies.json";
            let response = await fetch(APIKEY);
            let data = await response.json();

            const moviesArray: Movie[] = data.slice(0,20).map((item: any) => ({
                genre: item.genre,
                inflation_adjusted_gross: item.inflation_adjusted_gross,
                movie_title: item.movie_title,
                mpaa_rating: item.mpaa_rating,
                release_date: item.release_date,
                total_gross: item.total_gross,
            }));

            setMovies(moviesArray);
        }
        )();
    }, []);

    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={6} align="center">
                            Movies
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Genre</TableCell>
                        <TableCell align="center">Inflation Adjusted Gross</TableCell>
                        <TableCell align="center">Movie Title</TableCell>
                        <TableCell align="center">MPAA Rating</TableCell>
                        <TableCell align="center">Release Date</TableCell>
                        <TableCell align="center">Total Gross</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {movies.map((movie, index) => (
                        <TableRow key={index}>
                            <TableCell align="center">{movie.genre}</TableCell>
                            <TableCell align="center">{movie.inflation_adjusted_gross}</TableCell>
                            <TableCell align="center">{movie.movie_title}</TableCell>
                            <TableCell align="center">{movie.mpaa_rating}</TableCell>
                            <TableCell align="center">{movie.release_date}</TableCell>
                            <TableCell align="center">{movie.total_gross}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


{/*  
    const frutas = new Map([
        ["Roja", ["Manzana", "Sandía"] ],
        ["Amarilla", ["Banana"] ],
        ["Verde", ["Pera, Manazana Verde"] ]
    ]);

    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell colSpan={2} align = "center">
                        Frutas por color
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="center" >
                        Color
                    </TableCell>
                    <TableCell align="center" >
                        Fruta
                    </TableCell>
                </TableRow>
            </TableHead>
 
            <TableBody>
                {Array.from( frutas.entries() ).map(
                    ([color,frutasList]) => (
                        <TableRow key={color}>
                            <TableCell align = "center">{color}</TableCell>
                            <TableCell align = "center">{frutasList.join(", ")}</TableCell>
                        </TableRow>
                    )
                )}
            </TableBody>
            </Table>
        </TableContainer>
    );
*/}
