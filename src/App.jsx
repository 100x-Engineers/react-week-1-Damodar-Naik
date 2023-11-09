import { useContext } from "react";
// import { AuthProvider, AuthContext } from "./context/AuthProvider";
import { AuthProvider } from "./context/AuthProvider";
import { AuthContext } from "./context/AuthContext";
import Login from "./pages/Login";
import HomeFeed from "./pages/HomeFeed";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home-feed',
    element: <HomeFeed />
  },

])

// function TwitterApp() {
//   const { isLoggedIn } = useContext(AuthContext);

//   return <>isLoggedIn ? <HomeFeed /> :<Login /> </>
// }


function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
