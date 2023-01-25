import { ProfileResponse } from "../../utils/types/profile";
import './card-profile.css'

interface CardProfileProps {
  profile: ProfileResponse;
}

export function CardProfile({ profile }: CardProfileProps) {
  return (
    <div className="card-profile">
      <h2>{profile.Title}</h2>
      <img src={profile.ImageURL} alt="" />
      <button>Editar</button>
    </div>
  );
}
