import { useNavigate } from "react-router-dom"
import { GameResponse } from "../../utils/types/game"

interface CardGamesProps {
    games: any
}

export function CardGame({ games }: CardGamesProps) {

    const navigate = useNavigate()

    return (
        <div>
            <h2>{games.game?.Title}</h2>
            <img src={games.game?.CoverImageUrl} alt=""></img>
        </div>
    )
}
