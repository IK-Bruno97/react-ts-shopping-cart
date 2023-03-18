import { Navbar } from "../components/Navbar"
import { useNavigate } from "react-router-dom"

export function About() {
  const navigate = useNavigate()
  if(!localStorage.getItem("username")){ navigate('/') }

  return(
    <>
      <Navbar />
      <h1>About</h1>
    </>
  )
}
