import { Location } from "../entities/Location";
import { LocationRepository } from "../repositories/LocationRepository";

export class GetLocationById {
  constructor(private readonly locationRepository: LocationRepository) {}

  async execute(id: number): Promise<Location | null> {
    return await this.locationRepository.getLocationById(id);
  }
}