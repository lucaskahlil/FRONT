import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../../utils/api/api';

export default function CreateGame() {
    const navigate = useNavigate()
    const userId: string | null = localStorage.getItem('userId')

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const createPayload = {
            Title: e.currentTarget.Title.value,
            CoverImageUrl: e.currentTarget.CoverImageUrl.value,
            Description: e.currentTarget.Description.value,
            Year: e.currentTarget.Year.value,
            ImdbScore: e.currentTarget.ImdbScore.value,
            TrailerYouTubeUrl: e.currentTarget.TrailerYouTubeUrl.value,
            GameplayYouTubeUrl: e.currentTarget.GameplayYouTubeUrl.value,
            genres: e.currentTarget.genres.value
        };

        const userData = await api.postGame(createPayload)

        navigate('/homepage/' + userId)
    }

    return (
        <div className='create-game-container'>
            <form className='form-game' onSubmit={handleSubmit}>
                <h2>Adicionar Game</h2>
                <input placeholder='Nome do Jogo' name='Title' />
                <input placeholder='Imagem do Jogo' name='CoverImageUrl' />
                <input placeholder='Descrição' name='Description' type='textarea' />
                <input placeholder='Ano de Lançamento' name='Year' type='number' />
                <input placeholder='IMDB Score' name='ImdbScore' type='number' />
                <input placeholder='Trailer YouTube' name='TrailerYouTubeUrl' />
                <input placeholder='GamePlay Youtube' name='GameplayYouTubeUrl' />
                <input placeholder='Gênero' name='genres' />
                <button type='submit'>Adicionar Jogo</button>
            </form>
        </div>
    )
}
