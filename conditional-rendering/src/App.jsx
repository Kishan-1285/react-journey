import UserGreeting from './UserGreeting.jsx'

function App() {
     return(
      <>
     <UserGreeting isLogged={false} UserName="Guys" />
     <UserGreeting />
     </>
     );
}

export default App
