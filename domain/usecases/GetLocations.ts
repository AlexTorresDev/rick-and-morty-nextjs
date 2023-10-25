import { Location } from "@/domain/entities/Location";
import { LocationRepository } from "@/domain/repositories/LocationRepository";

export class GetLocations {
  constructor(private readonly locationRepository: LocationRepository) {}

  async execute(): Promise<Location[]> {
    return await this.locationRepository.getLocations();
  }
}