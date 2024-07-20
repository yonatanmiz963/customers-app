import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import axios from "axios";
import HomePage from "./pages/HomePage";
import CustomerEditPage from "./pages/CustomerEditPage";

const router = createBrowserRouter([
  {
    path: '/', element: <LoginPage></LoginPage>,
    // loader: async () => {

    //   // const customersNotAuthenticatedResponse = await axios('http://localhost:5140/api/CustomerItems')
    //   // console.log('customersNotAuthenticatedResponse:', customersNotAuthenticatedResponse)

    //   const loginResponse = await axios({
    //     method: 'post',
    //     url: 'http://localhost:5140/api/Users/login',
    //     headers: {
    //       Accept: '*'
    //     },
    //     data: {

    //       "email": "yonatanmiz963@gmail.com",
    //       "password": "admin",
    //       "firstName": "Yonatan",
    //       "lastName": "Mizrahi"
    //     }
    //   });
    //   console.log('loginResponse:', loginResponse)

    //   const customersResponse = await axios({
    //     method: 'get',
    //     url: 'http://localhost:5140/api/CustomerItems',
    //     headers: {
    //       Authorization: `Bearer ${loginResponse.data.token}`
    //     }
    //   })
    //   console.log('customersResponse:', customersResponse)

    //   return null

    // }
  },
  {
    path: '/HomePage', element: <HomePage></HomePage>,
  },
  {
    path: '/CustomerEditPage', element: <CustomerEditPage></CustomerEditPage>,
  }
])



function App() {
  return <RouterProvider router={router} />
}

export default App;
