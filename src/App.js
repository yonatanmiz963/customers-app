import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CustomerEditPage from "./pages/CustomerEditPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: '/', element: <LoginPage></LoginPage>,
  },
  {
    path: '/HomePage', element: <ProtectedRoute component={HomePage} />,
  },
  // {
  //   path: '/HomePage', element: <HomePage></HomePage>, loader: checkAuthLoader,
  // },
  {
    path: '/CustomerEditPage/:id', element: <ProtectedRoute component={CustomerEditPage}/>,
  }
])



function App() {
  return <RouterProvider router={router} />
}

export default App;
