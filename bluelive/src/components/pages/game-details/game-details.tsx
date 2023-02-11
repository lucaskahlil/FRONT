import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../utils/api/api";
import { GameResponse } from "../../../utils/types/game"

export function GameDetails() {
    const [gameDetail, setGameDetail] = useState<GameResponse>()

    const { id } = useParams()

    async function GameDetail() {
        const gameId: string | undefined = id
        const game = await api.getGame(gameId)
        setGameDetail(game)
    }

    useEffect(() => {
        GameDetail();
    }, [])

    return (
        <div>
            <div>
                <button>JOGAR</button>
                <h2>{gameDetail?.Title}</h2>
                <h2>{gameDetail?.ImdbScore}</h2>
                <button>Favoritar</button>
            </div>
            <div>
                <p>{gameDetail?.TrailerYouTubeUrl}</p>
                <p>{gameDetail?.GameplayYouTubeUrl}</p>
            </div>
            <p>{gameDetail?.Description}</p>
        </div>
    )
}
