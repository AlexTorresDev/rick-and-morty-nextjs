import { Location } from "@/domain/entities/Location";

interface LocationCardProps {
  location: Location;
}

export const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  return (
    <div className="bg-gray-50 rounded-md shadow-md p-4">
      <h2 className="text-xl font-bold mb-2">{location.name}</h2>
      <p className="text-gray-500">{location.dimension}</p>
      <p className="text-gray-500">{location.type}</p>
    </div>
  );
};