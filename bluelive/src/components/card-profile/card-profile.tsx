import { useNavigate } from "react-router-dom";
import { ProfileResponse } from "../../utils/types/profile";
import './card-profile.css'

interface CardProfileProps {
  profile: ProfileResponse;
}

export function CardProfile({ profile }: CardProfileProps) {  
  
  const navigate = useNavigate()
  
  

  return (
    <div className="card-profile">
      <h2>{profile.Title}</h2>
      <img src={profile.ImageURL} alt="" onClick={() => navigate("/homepage/" + profile.id)} />
      <button onClick={() => {navigate('/editProfile/' + profile.id)}}>Editar</button>
    </div>
  );
}

