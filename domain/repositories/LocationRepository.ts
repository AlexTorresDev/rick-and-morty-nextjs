import { Location } from "@/domain/entities/Location";

export interface LocationRepository {
  getLocationById(id: number): Promise<Location>;
  getLocations(): Promise<Location[]>;
}