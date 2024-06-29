import { ComponentPropsWithoutRef, forwardRef } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import { Car } from "../types/car";
import "./carCard.css";

interface CarCardProps
  extends Omit<ComponentPropsWithoutRef<"div">, "onClick"> {
  car: Car;
  onClick: (id: number) => void;
}

const CarCard = forwardRef<HTMLDivElement, CarCardProps>(
  ({ car, onClick, ...props }, ref) => {
    return (
      <Badge badgeContent={car.isNew ? "New" : 0} color="primary">
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
            <div className="card-description">{car.description}</div>
          </CardContent>
        </Card>
      </Badge>
    );
  }
);

export default CarCard;
