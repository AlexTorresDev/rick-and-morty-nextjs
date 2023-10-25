import { Location } from "../entities/Location";
import { LocationRepository } from "../repositories/LocationRepository";

export class GetLocations {
  constructor(private readonly locationRepository: LocationRepository) {}

  async execute(): Promise<Location[]> {
    return await this.locationRepository.getLocations();
  }
}