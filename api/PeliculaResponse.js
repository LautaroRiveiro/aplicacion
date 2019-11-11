interface PeliculaResponse {
    id: number,
    overview: string,
    popularity: number,
    genres: {id: number, name: string}[],
    title: string,
    original_title: string,
    poster_path: string,
    release_date: Date,
    vote_average: number
}

export default PeliculaResponse;
