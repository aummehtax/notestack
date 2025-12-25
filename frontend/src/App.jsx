import { Route, Routes } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Login from "./components/core/Login"
import SignUp from "./components/core/SignUp"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>  )
}

export default App