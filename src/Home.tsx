import { useState } from "react";

import { useCars } from "./hooks/useCars";
import Layout from "./components/Layout/Layout";
import CarCard from "./components/CarCard";
import CarChartModal from "./components/CarChartModal";
import "./home.css";

function Home() {
  const { isPending, data: cars } = useCars();
  const [selectedCarId, setSelectedCarId] = useState<number>();

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  if (isPending) return "Loading...";

  return (
    <>
      <Layout>
        <div className="grid">
          {cars.map((car) => {
            return (
              <CarCard
                key={car.id}
                car={car}
                onClick={(id: number) => {
                  setOpen(true);
                  setSelectedCarId(id);
                }}
              />
            );
          })}
        </div>
      </Layout>

      <CarChartModal
        open={open}
        onClose={handleClose}
        car={cars.find((car) => car.id == selectedCarId)}
      />
    </>
  );
}

export default Home;
