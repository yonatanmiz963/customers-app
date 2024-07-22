import { useLoaderData } from "react-router-dom";

function CustomerEditPage() {
  const token = useLoaderData();
  console.log('token:', token)


  return <div>CustomerEditPage</div>;
}

export default CustomerEditPage;
