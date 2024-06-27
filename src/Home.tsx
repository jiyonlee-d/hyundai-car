import { useCars } from "./hooks/useCars";

function Home() {
  const { isPending, error, data } = useCars();

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log("data", data);

  return <div></div>;
}

export default Home;
