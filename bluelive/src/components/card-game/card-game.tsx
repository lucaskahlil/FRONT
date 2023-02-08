import { useNavigate } from "react-router-dom"
import { GameResponse } from "../../utils/types/game"

interface CardGamesProps {
    games: GameResponse
}
export function CardGame({ games }: CardGamesProps) {
    
    const navigate = useNavigate()
    
    return (
        <div>
            <h2>{games.Title}</h2>
            <img src={games.CoverImageUrl} alt=""></img>
        </div>
    )
}
