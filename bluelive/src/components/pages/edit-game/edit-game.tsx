import { FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../utils/api/api";


export function EditGame() {
    const { id } = useParams();
    const navigate = useNavigate()
    const userId: string | null = localStorage.getItem('userId')
    
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const editPayload = {
            id: id ?? "",
            Title: e.currentTarget.Title.value,
            CoverImageUrl: e.currentTarget.CoverImageUrl.value,
            Description: e.currentTarget.Description.value,
            Year: parseInt(e.currentTarget.Year.value),
            ImdbScore: parseFloat(e.currentTarget.ImdbScore.value),
            TrailerYouTubeUrl: e.currentTarget.TrailerYouTubeUrl.value,
            GameplayYouTubeUrl: e.currentTarget.GameplayYouTubeUrl.value,
        };

        console.log(editPayload)
        
        const editgame = await api.patchGame(editPayload)

        console.log(editgame)

        navigate('/homepage/' + userId)
    }

    async function handleDelete() {

        const deletePayload = {
            id: id ?? "",
            Title: "",
            CoverImageUrl: "",
            Description: "",
            Year: "",
            ImdbScore: "",
            TrailerYouTubeUrl: "",
            GameplayYouTubeUrl: "",
        };

        const userData = await api.deleteGame(deletePayload);

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
                <button type='submit'>Editar Jogo</button>
                <button type="button" onClick={handleDelete}>Deletar</button>
            </form>
        </div>
    )
}
