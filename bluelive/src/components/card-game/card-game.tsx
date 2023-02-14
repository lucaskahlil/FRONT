import { useNavigate } from "react-router-dom"
import { GamePayload } from "../../utils/types/game"

interface CardGamesProps {
    games: GamePayload
}

export function CardGame({ games }: CardGamesProps) {

    const navigate = useNavigate()

    return (
        <div>
            <h2>{games.game?.Title}</h2>
            <img src={games.game?.CoverImageUrl} alt="" onClick={() => navigate("/game/" + games.game.id)}></img>
        </div>
    )
}
