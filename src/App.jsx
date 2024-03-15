import { Avatar } from "./componentes/Avatar"
import { Titulo } from "./componentes/Titulo"
import { Home } from "./vistas/Home"
import avatar1 from "/avatar.svg"
import avatar2 from "/avatar2.svg"

function App() {
  

  return (
    <div id="app" className="p-5">
      <Titulo />
      <Avatar imagen={avatar1}></Avatar>
      <Avatar imagen={avatar2}></Avatar>
      <Home />
      
    </div>
    )
}

export default App
