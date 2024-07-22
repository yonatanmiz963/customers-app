import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CustomerEditPage from "./pages/CustomerEditPage";
import { checkAuthLoader } from "./utills/authUtill";

const router = createBrowserRouter([
  {
    path: '/', element: <LoginPage></LoginPage>,
  },
  {
    path: '/HomePage', element: <HomePage></HomePage>, loader: checkAuthLoader,
  },
  {
    path: '/CustomerEditPage/:id', element: <CustomerEditPage></CustomerEditPage>, loader: checkAuthLoader,
  }
])



function App() {
  return <RouterProvider router={router} />
}

export default App;
