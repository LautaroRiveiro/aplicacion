import type PeliculaResponse from './PeliculaResponse';
import type PeliculasPaginaResponse from './PeliculasPaginaResponse';

const API_KEY = '3b4a278d61b1cf1d1cf38e59c74e49ab';
const BASE_URL = 'https://api.themoviedb.org/3/';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

async function execute(path: string, init?: RequestInit): Promise<Response> {
    let url = `${BASE_URL}${path}?api_key=${API_KEY}&language=es`;
    let response = await fetch(url);
    return response;
}

export async function getEnCartelera(): Promise<PeliculaResponse[]> {
    let response = await execute('movie/now_playing');
    let peliculas: PeliculasPaginaResponse = await response.json();
    return peliculas.results;
}

export async function getProximosEstrenos(): Promise<PeliculaResponse[]> {
    let response = await execute('movie/upcoming');
    let peliculas: PeliculasPaginaResponse = await response.json();
    return peliculas.results;
}

export async function getPopulares(): Promise<PeliculaResponse[]> {
    let response = await execute('movie/popular');
    let peliculas: PeliculasPaginaResponse = await response.json();
    return peliculas.results;
}

export async function getPelicula(id: number): Promise<PeliculaResponse> {
    let response = await execute(`movie/${id}`);
    return await response.json();
}

export async function getSimilares(id: number): Promise<PeliculaResponse[]> {
    let response = await fetch(`movie/${id}/similar`);
    let peliculas: PeliculasPaginaResponse = await response.json();
    return peliculas.results;
}
