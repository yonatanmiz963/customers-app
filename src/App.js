import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: '/', element: <HomePage></HomePage>,
    loader: async () => {

      const customersNotAuthenticatedResponse = await axios('http://localhost:5140/api/CustomerItems')
      console.log('customersNotAuthenticatedResponse:', customersNotAuthenticatedResponse)

      // const loginResponse = await axios({
      //   method: 'post',
      //   url: 'http://localhost:5140/api/Users/login',
      //   headers: {
      //     Accept: '*'
      //   },
      //   data: {

      //     "email": "yonatanmiz963@gmail.com",
      //     "password": "admin",
      //     "firstName": "Yonatan",
      //     "lastName": "Mizrahi"
      //   }
      // });
      // console.log('loginResponse:', loginResponse)

      // const customersResponse = await axios({
      //   method: 'get',
      //   url: 'http://localhost:5140/api/CustomerItems',
      //   headers: {
      //     Authorization: `Bearer ${loginResponse.data.token}`
      //   }
      // })
      // console.log('customersResponse:', customersResponse)

      return null

    }
  }
])



function App() {
  return <RouterProvider router={router} />
}

export default App;
