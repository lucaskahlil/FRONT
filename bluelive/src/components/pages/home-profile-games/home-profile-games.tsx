import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../../../utils/api/api"
import { GamePayload, GameResponse } from "../../../utils/types/game"
import { GenreResponse } from "../../../utils/types/genre"
import { CardGame } from "../../card-game/card-game"
import { CardGenres } from "../../card-genres/card-genres"


export default function HomeGames() {
    const [gamesList, setGamesList] = useState<GamePayload[]>([])
    const [genreList, setGenreList] = useState<GenreResponse[]>([])
    const {id} = useParams()
    const navigate = useNavigate()

    async function Games() {
        const profileId: string | undefined = id;
        const games = await api.getHomepageProfile(profileId);
        setGamesList(games.allGames)
    }

    async function Genres() {
        const genres = await api.getGenre()
        setGenreList(genres)
    }

    useEffect(() => {
        Games();
        Genres()
    }, [])

    return (
        <>
            <div className="home-container">
                <h1>BlueGames</h1>
                <h2>Favoritos</h2>
                {gamesList.map((game, index) => (
                    <CardGame key={index} games={game} />
                ))}
                <h2>Generos</h2>
                {genreList.map((genre, index) => (
                    <CardGenres key= {index} genres={genre} />
                ))}
                <button onClick={() => navigate('/createGame')}>Novo Jogo</button>
            </div>
        </>
    )
}
