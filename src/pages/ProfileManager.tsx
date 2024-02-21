
import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import ProfileLeft from "../components/Profile/ProfileLeft"
import Profiles from "../components/Profile/Profiles"
import { useSelector } from "react-redux"




const ProfileManager = () => {


  const profile = useSelector((state:any) => state.formSlice.profile);
  return (
      <div className="bg-gray-900">
           <Navbar/>
           {profile && (<Profiles/>)}
           <div className="p-con flex justify-center">
           <div className="prof-container flex justify-between">
           <ProfileLeft/>
           <div className="text-white">
           <Outlet />
           </div>
           <div></div>
           </div>
           </div>
      </div>
  )
}
export default ProfileManager