import { useEffect, useState } from "react";
import axios from "axios";
import CustomersContainer from "../components/CustomerContainer/CustomersContainer";

function HomePage({ token }) {
  const [customers, setCustomers] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const customersResponse = await axios({
        method: 'get',
        url: 'https://localhost:7052/api/Users/',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log('customersResponse:', customersResponse)
      setCustomers(customersResponse.data)
    }
    getData();

  }, [token]);


  return <div>
    {customers === null && <p>Loading...</p>}
    {customers ?
      <CustomersContainer customers={customers} />
      : null
    }
  </div>;
}

export default HomePage;
