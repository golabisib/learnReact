

import UsersPage from "./components/UsersPage"
import UserProvider from "./context/UserProvider"





function App() {

  return (
    <UserProvider>
        <UsersPage />
    </UserProvider>
  )
}

export default App
