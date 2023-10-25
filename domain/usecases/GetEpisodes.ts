import { Episode } from "../entities/Episode";
import { EpisodeRepository } from "../repositories/EpisodeRepository";

export class GetEpisodes {
  constructor(private readonly episodeRepository: EpisodeRepository) {}

  async execute(): Promise<Episode[]> {
    return await this.episodeRepository.getEpisodes();
  }
}