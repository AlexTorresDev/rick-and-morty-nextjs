import { Location } from "../domain/entities/Location";

interface LocationCardProps {
  location: Location;
}

export const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="mt-4">
        <h2 className="text-xl font-bold">{location.name}</h2>
        <p className="text-gray-500">{location.dimension}</p>
        <p className="text-gray-500">{location.type}</p>
      </div>
    </div>
  );
};