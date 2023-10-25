import { GetLocations } from "@/domain/usecases/GetLocations";
import { Location } from "@/domain/entities/Location";
import { LocationCard } from "@/components/LocationCard";
import { LocationRepositoryAPI } from "@/infrastructure/repositories/LocationRepositoryAPI";

type LocationsProps = {
  locations: Location[];
}

export default function Locations({ locations }: LocationsProps) {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Locations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {locations.map((location: Location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const repository = new LocationRepositoryAPI();
  const useCase = new GetLocations(repository);
  const locations = await useCase.execute();
  return {
    props: {
      locations: JSON.parse(JSON.stringify(locations)),
    },
  };
};