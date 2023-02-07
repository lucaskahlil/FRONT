import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../../utils/api/api"
import { GameResponse } from "../../../utils/types/game"
import CardGame from "../../card-game/card-game"


export default function HomeGames() {
    const [gamesList, setGamesList] = useState<GameResponse[]>([])

    const navigate = useNavigate()

    async function Games() {
        const games = await api.getGame();
        // setGamesList(games)
    }

    useEffect(() => {
        Games();
    }, [])

    return (
        <div>
            {/* <h1>BlueGames</h1>
            {gamesList.map(game => (
                // <CardGame game={game} />
            ))} */}
        </div>
    )
}
