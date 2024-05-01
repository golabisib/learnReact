import { createContext, useState } from "react"

export const UserContext = createContext();

function UserProvider({ children }) {

    const [users, setUsers] = useState([
        { id: 1, name: "Roozbeh "},
        { id: 2, name: "Golabi" },
        { id: 3, name: "Sib" }
    ]);

  return (
    <UserContext.Provider value={{users, setUsers}} >
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider
