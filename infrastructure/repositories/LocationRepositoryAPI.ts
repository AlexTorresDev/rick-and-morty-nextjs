import { Location } from "@/domain/entities/Location";
import { LocationRepository } from "@/domain/repositories/LocationRepository";
import { fetcher } from "@/infrastructure/utils/fetcher";

export class LocationRepositoryAPI implements LocationRepository {
  async getLocationById(id: number): Promise<Location> {
    const data = await fetcher(`/location/${id}`);
    return new Location(data.id, data.name, data.type, data.dimension);
  }

  async getLocations(): Promise<Location[]> {
    const data = await fetcher("/location");
    return data.results.map((locationData: any) => new Location(locationData.id, locationData.name, locationData.type, locationData.dimension));
  }
}