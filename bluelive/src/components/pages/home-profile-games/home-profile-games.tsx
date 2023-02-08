import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../../utils/api/api"
import { GameResponse } from "../../../utils/types/game"
import CardGame from "../../card-game/card-game"


export default function HomeGames() {
    const [gamesList, setGamesList] = useState<GameResponse[]>([])

    const navigate = useNavigate()

    async function Games() {
        const profileId: string | null = localStorage.getItem('profileId')
        const games = await api.getHomepageProfile(profileId);
        setGamesList(games)
    }

    useEffect(() => {
        Games();
    }, [])

    return (
        <div>
            <h1>BlueGames</h1>
            <h2>Favoritos</h2>
            {gamesList.map(game => (
                <CardGame games={game} />
            ))}
            <h2>Generos</h2>
            {}
        </div>
    )
}
