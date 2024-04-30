import { createContext } from "react"

import UsersPage from "./components/UsersPage"

const users = [
    { id: 1, name: "Roozbeh "},
    { id: 2, name: "Golabi" },
    { id: 3, name: "Sib" }
];

export const UserContext = createContext();

function App() {
  return (
      <UserContext.Provider value={{users, author: "golabisib"}}>
        <UsersPage />
      </UserContext.Provider>
  )
}

export default App
