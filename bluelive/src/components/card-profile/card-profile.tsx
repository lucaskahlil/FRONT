import { ProfileResponse } from "../../utils/types/profile";

interface CardProfileProps {
  profile: ProfileResponse;
}

export function CardProfile({ profile }: CardProfileProps) {
  return (
    <div>
      <h2>{profile.Title}</h2>
      <img src={profile.ImageURL} alt="" />
      <button>Entrar</button>
      <button>Editar</button>
    </div>
  );
}
