import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Update_User from "./Update_User"
import CreateUser from './CreateUser'
import Home  from './Home'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<CreateUser/>}></Route>
      <Route path='/update/:id' element={<Update_User/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
