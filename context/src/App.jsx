import { createContext, useState } from "react"

import UsersPage from "./components/UsersPage"



export const UserContext = createContext();

function App() {
    const [users, setUsers] = useState([
        { id: 1, name: "Roozbeh "},
        { id: 2, name: "Golabi" },
        { id: 3, name: "Sib" }
    ]);
  return (
      <UserContext.Provider value={{users, setUsers}}>
        <UsersPage />
      </UserContext.Provider>
  )
}

export default App
