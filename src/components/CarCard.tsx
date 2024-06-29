import { Card, CardContent, Typography } from "@mui/material";
import { Car } from "../types/car";
import "./carCard.css";
import { ComponentPropsWithoutRef, forwardRef } from "react";

interface CarCardProps
  extends Omit<ComponentPropsWithoutRef<"div">, "onClick"> {
  car: Car;
  onClick: (id: number) => void;
}

const CarCard = forwardRef<HTMLDivElement, CarCardProps>(
  ({ car, onClick, ...props }, ref) => {
    return (
      <Card
        {...props}
        ref={ref}
        className="card-container"
        onClick={() => {
          onClick(car.id);
        }}
      >
        <CardContent>
          <img src={`/${car.imageName}.png`} />
          <Typography className="card-name" gutterBottom>
            {car.name}
          </Typography>
        </CardContent>
      </Card>
    );
  }
);

export default CarCard;
