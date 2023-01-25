import { useEffect, useState } from "react";
import { api } from "../../../utils/api/api";
import { ProfileResponse } from "../../../utils/types/profile";
import { CardProfile } from "../../card-profile/card-profile";


export function Profiles() {
  const [profileList, setProfileList] = useState<ProfileResponse[]>([])
  
  async function Profiles() {
    const userId:string | null = localStorage.getItem('userId')
    const profiles = await api.getProfile(userId);
    setProfileList(profiles)
  }

  useEffect(() => {
    Profiles();
  }, [])

  return (
    <div className="profile-container">
    <div>profiles</div>
    {profileList.map(profile => (
      <CardProfile profile = {profile}/>
    ))};
    </div>
  )
}
