import type PeliculaResponse from './PeliculaResponse';

interface PeliculasPaginaResponse {
    page: number,
    total_results: number,
    total_pages: number,
    results: PeliculaResponse[]
}

export default PeliculasPaginaResponse;
