import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const ProtectRouting=({children})=>{
const isAuthenticated=localStorage.getItem("loginuser")
const navigate=useNavigate()
useEffect(()=>{
    if(!isAuthenticated) navigate("/login")
},[isAuthenticated,navigate])



    return isAuthenticated ? children:null
}
export default ProtectRouting