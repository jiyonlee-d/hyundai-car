import Layout from "./components/Layout/Layout";
import { useCars } from "./hooks/useCars";
import "./home.css";
import CarCard from "./components/CarCard";

function Home() {
  const { isPending, error, data: cars } = useCars();

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log("data", cars);

  return (
    <Layout>
      <div className="grid">
        {cars.map((car) => {
          return <CarCard car={car} />;
        })}
      </div>
    </Layout>
  );
}

export default Home;
