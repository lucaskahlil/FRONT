import { GameResponse } from "../../../utils/types/game"


interface CardGamesProps {
    games: GameResponse;
}

export function GameDetails({ games }: CardGamesProps) {

    return (
        <div>
            <div>
                <button>Jogar</button>
                <h2>Título jogo</h2>
                <h2>IMDB Score</h2>
                <h2>Favoritar</h2>
            </div>
            <div>
                <p>Trailer</p>
                <p>Gameplay</p>
            </div>
            <p>Descrição</p>
        </div>
    )
}
