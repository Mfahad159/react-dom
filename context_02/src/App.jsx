
import UserContextProvider from './UserContextProvider'
import Login from './Login'
import MyProfile from './MyProfile'
function App() {
  return (
    <UserContextProvider>
      <Login/>
      <MyProfile/>
    </UserContextProvider>
  )
}

export default App
