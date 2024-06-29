import { Modal, Typography } from "@mui/material";
import AwesomeSlider from "react-awesome-slider";
import { Car } from "../types/car";
import "./carChartModal.css";
import Chart from "./Chart";
import { useCarChart } from "../hooks/useCarChart";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import CircularProgress from "@mui/material/CircularProgress";

const CarChartModal = ({
  open,
  onClose,
  car,
}: {
  open: boolean;
  onClose: VoidFunction;
  car?: Car;
}) => {
  const { isPending, data } = useCarChart(car?.id);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="modal-content">
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          px={4}
          py={2}
        >
          {car?.name}
        </Typography>
        <AwesomeSlider animation="fallAnimation">
          {charts.map(({ type, unit, backgroundColor, color }) => (
            <div key={type} style={{ backgroundColor }}>
              <div className="chart-subtitle">{`${capitalizeFirstLetter(
                type
              )}에 따른 연비 변화`}</div>
              {isPending ? (
                <CircularProgress />
              ) : (
                <Chart data={data?.[type]} areaColor={color} unit={unit} />
              )}
            </div>
          ))}
        </AwesomeSlider>
      </div>
    </Modal>
  );
};

export default CarChartModal;

const charts = [
  {
    type: "mileage",
    backgroundColor: "#fdfdff",
    color: "#6495ED",
    unit: "km",
  },
  {
    type: "averageSpeed",
    backgroundColor: "#FFFAFA",
    color: "#FF6347",
    unit: "km/h",
  },
  {
    type: "totalTime",
    backgroundColor: "rgb(255, 252, 255)",
    color: "#8B008B",
    unit: "h",
  },
] as const;
