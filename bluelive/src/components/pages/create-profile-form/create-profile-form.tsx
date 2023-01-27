import { FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../../utils/api/api";
import './create-profile-form.css'


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
        <div className="create-profile-container">
            <form className="form-create" onSubmit={handleSubmit}>
                <h2>Criar Perfil</h2>
                <input placeholder="Nome" name="Title" />
                <input placeholder="Imagem" name="ImageURL" />
                <button className="button-create" type="submit">Criar</button>
            </form>
        </div>
    )
}
