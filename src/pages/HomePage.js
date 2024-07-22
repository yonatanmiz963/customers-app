import { useEffect } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

function HomePage() {
const token = useLoaderData()
console.log('token:', token)

  useEffect(() => {
    const getData = async () => {
      const customersResponse = await axios({
        method: 'get',
        url: 'http://localhost:5140/api/Users/',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log('customersResponse:', customersResponse)
    }
    getData();

  }, []);


  return <div>HomePage</div>;
}

export default HomePage;
