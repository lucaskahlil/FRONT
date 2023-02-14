import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../utils/api/api";
import { GameResponse } from "../../../utils/types/game"
import './game-details.css'

export function GameDetails() {
    const [gameDetail, setGameDetail] = useState<GameResponse>()
    const { id } = useParams()
    const navigate = useNavigate()

    async function GameDetail() {
        const gameId: string | undefined = id
        const game = await api.getGame(gameId)
        setGameDetail(game)
    }

    useEffect(() => {
        GameDetail();
    }, [])

    return (
        <div className="game-detail">
            <div>
                <button>JOGAR</button>
                <h2>{gameDetail?.Title}</h2>
                <h2>IMDB: {gameDetail?.ImdbScore}/5</h2>
                <button>Favoritar</button>
                <button onClick={() => navigate('/editGame/' + gameDetail?.id)}>Editar</button>
            </div>
            <div>
                <p>{gameDetail?.TrailerYouTubeUrl}</p>
                <p>{gameDetail?.GameplayYouTubeUrl}</p>
            </div>
            <p>{gameDetail?.Description}</p>
        </div>
    )
}
