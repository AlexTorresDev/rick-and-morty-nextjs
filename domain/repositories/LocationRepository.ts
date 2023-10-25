import { Location } from "../entities/Location";

export interface LocationRepository {
  getLocationById(id: number): Promise<Location>;
  getLocations(): Promise<Location[]>;
}