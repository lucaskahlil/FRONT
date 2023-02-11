import { useNavigate, useParams } from "react-router-dom"
import { GamePayload, GameResponse } from "../../utils/types/game"

interface CardGamesProps {
    games: GamePayload
}

export function CardGame({ games }: CardGamesProps) {

    const navigate = useNavigate()

    console.log(games)

    return (
        <div>
            <h2>{games.game?.Title}</h2>
            <img src={games.game?.CoverImageUrl} alt="" onClick={() => navigate("/game/" + games.game.id)}></img>
        </div>
    )
}
