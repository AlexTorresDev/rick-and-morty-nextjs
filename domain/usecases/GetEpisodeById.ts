import { Episode } from "../entities/Episode";
import { EpisodeRepository } from "../repositories/EpisodeRepository";

export class GetEpisodeById {
  constructor(private readonly episodeRepository: EpisodeRepository) {}

  async execute(id: number): Promise<Episode | null> {
    return await this.episodeRepository.getEpisodeById(id);
  }
}