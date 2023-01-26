import { FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../../utils/api/api";


export default function CreateProfileForm() {
    const navigate = useNavigate()

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const createPayload = {
            Title: e.currentTarget.Title.value,
            ImageURL: e.currentTarget.ImageURL.value
        };

        const userData = await api.postProfile(createPayload)

        navigate('/profiles')
    }

    return (
        <div className="edit-profile-container">
            <form onSubmit={handleSubmit}>
                <h2>Criar Perfil</h2>
                <input placeholder="Nome" name="Title" />
                <input placeholder="Imagem" name="ImageURL" />
                <button type="submit">Criar</button>
            </form>
        </div>
    )
}
