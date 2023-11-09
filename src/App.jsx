import { useContext } from "react";
import { AuthProvider, AuthContext } from "./context/AuthProvider";
import Login from "./pages/Login";
import HomeFeed from "./pages/HomeFeed";


function TwitterApp() {
  const { isLoggedIn } = useContext(AuthContext);

  return <>isLoggedIn ? <HomeFeed /> :<Login /> </>
}


function App() {
  return (
    <AuthProvider>
      <TwitterApp />
    </AuthProvider>
  );
}

export default App;
