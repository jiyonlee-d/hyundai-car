import { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

import CarCard from "./components/CarCard";
import Layout from "./components/Layout/Layout";
import CarChartModal from "./components/CarChartModal";
import { useSearchContext } from "./components/SearchContextProvider";
import { useCars } from "./hooks/useCars";
import { useDebounce } from "./hooks/useDebounce";
import { useCarTypes } from "./hooks/useCarTypes";
import "./home.css";

function Home() {
  const { isPending: isCarsPending, data: cars } = useCars();
  const { isPending: isCarTypesPending, data: carTypes } = useCarTypes();
  const { search } = useSearchContext();
  const debouncedSearch = useDebounce(search, 400);

  const [selectedCarId, setSelectedCarId] = useState<number>();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  if (isCarsPending || isCarTypesPending) return <LinearProgress />;

  return (
    <>
      <Layout>
        <div className="home-content">
          {carTypes.map((carType) => {
            const typeCars = cars.filter((car) => car.type === carType);
            const filteredTypeCars = typeCars.filter((typeCar) =>
              typeCar.name
                .replace(/\s/g, "")
                .toLowerCase()
                .includes(debouncedSearch.replace(/\s/g, "").toLowerCase())
            );
            const typeCarLength = filteredTypeCars.length;

            return (
              <div key={carType}>
                <div className="type">{`${carType} (${typeCarLength})`}</div>
                <div className="grid">
                  {filteredTypeCars.map((car) => (
                    <CarCard
                      key={car.id}
                      car={car}
                      onClick={() => {
                        setOpen(true);
                        setSelectedCarId(car.id);
                      }}
                    />
                  ))}
                </div>
              </div>
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
