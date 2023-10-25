import { Episode } from "@/domain/entities/Episode";
import { EpisodeRepository } from "@/domain/repositories/EpisodeRepository";

export class GetEpisodes {
  constructor(private readonly episodeRepository: EpisodeRepository) {}

  async execute(): Promise<Episode[]> {
    return await this.episodeRepository.getEpisodes();
  }
}