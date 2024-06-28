import { Card, CardContent, Typography } from "@mui/material";
import { Car } from "../types/car";
import "./carCard.css";
import { ComponentPropsWithoutRef, forwardRef } from "react";

type CarCardProps = {
  car: Car;
} & ComponentPropsWithoutRef<"div">;

const CarCard = forwardRef<HTMLDivElement, CarCardProps>(
  ({ car, ...props }, ref) => {
    return (
      <Card {...props} ref={ref} className="card-container">
        <CardContent>
          <img src={`/${car.imageName}.png`} />
          <Typography
            sx={{
              fontSize: 14,
              px: 3,
              pt: 2,
              textShadow: "0 0 0.1em #c6c6c6",
            }}
            gutterBottom
          >
            {car.name}
          </Typography>
        </CardContent>
      </Card>
    );
  }
);

export default CarCard;
