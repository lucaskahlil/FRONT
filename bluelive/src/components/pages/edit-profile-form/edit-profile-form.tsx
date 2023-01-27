import { FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../utils/api/api";


export function EditProfileForm() {
    const { id } = useParams();

    const navigate = useNavigate()

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const editPayload = {
            id: id ?? "",
            Title: e.currentTarget.Title.value,
            ImageURL: e.currentTarget.ImageURL.value
        };

        const userData = await api.patchProfile(editPayload)

        navigate('/profiles')
    }

    async function handleDelete() {

        const deletePayload = {
            id: id ?? "",
            Title: "",
            ImageURL: "",
        };

        const userData = await api.deleteProfile(deletePayload);

        navigate('/profiles')
    }

    return (
        <div className="edit-profile-container">
            <form onSubmit={handleSubmit}>
                <h2>Editar Perfil</h2>
                <input placeholder="Novo Nome" name="Title" />
                <input placeholder="Nova Imagem" name="ImageURL" />
                <button type="submit">Editar</button>
                <button type="button" onClick={handleDelete}>Deletar</button>
            </form>
        </div>
    )
}
