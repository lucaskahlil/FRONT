import { FormEvent } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../utils/api/api";


export function EditProfileForm() {
    const { id } = useParams();

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const editPayload = {
            id: id ?? "",
            Title: e.currentTarget.Title.value,
            ImageURL: e.currentTarget.ImageURL.value
        };

        const userData = await api.patchProfile(editPayload)
    }

    return (
        <div className="edit-profile-container">
            <form onSubmit={handleSubmit}>
                <h2>Editar Perfil</h2>
                <input defaultValue={''} name="Title" />
                <input defaultValue={''} name="ImageURL" />
                <button >Editar</button>
                <button>Deletar</button>
            </form>
        </div>
    )
}
