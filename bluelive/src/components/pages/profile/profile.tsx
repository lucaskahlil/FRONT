import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../utils/api/api";
import { ProfileResponse } from "../../../utils/types/profile";
import { CardProfile } from "../../card-profile/card-profile";
import './profile.css'

export function Profiles() {
  const [profileList, setProfileList] = useState<ProfileResponse[]>([])

  const navigate = useNavigate()

  async function Profiles() {
    const userId: string | null = localStorage.getItem('userId')
    const profiles = await api.getProfile(userId);
    setProfileList(profiles)
  }

  useEffect(() => {
    Profiles();
  }, [])

  return (
    <div className="">
      <h1>PERFIS</h1>
      <div className="card-container">
      <button onClick={() => { navigate('/createProfile/') }}>Novo Perfil</button>
        {profileList.map(profile => (
          <CardProfile profile={profile} />
        ))};
      </div>
    </div>
  )
}
