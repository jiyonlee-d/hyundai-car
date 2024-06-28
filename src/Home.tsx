import Layout from "./components/Layout/Layout";
import { useCars } from "./hooks/useCars";

function Home() {
  const { isPending, error, data } = useCars();

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log("data", data);

  return (
    <Layout>
      <div>
        home Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
        dignissimos sequi aliquam eos incidunt eligendi. Quo veniam minima iste
        lorem*100
      </div>
    </Layout>
  );
}

export default Home;
