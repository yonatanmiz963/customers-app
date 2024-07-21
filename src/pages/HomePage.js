import { useEffect } from "react";
import { getToken } from "../utills/authUtill";
import axios from "axios";

function HomePage() {
  useEffect(() => {
    const getData = async () => {
      const user = getToken();
      console.log('user:', user)

      const customersResponse = await axios({
        method: 'get',
        url: 'https://localhost:7052/api/Users',
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
      console.log('customersResponse:', customersResponse)
    }
    getData();

  }, []);


  return <div>HomePage</div>;
}

export default HomePage;
