import { Episode } from "@/domain/entities/Episode";
import { EpisodeRepository } from "@/domain/repositories/EpisodeRepository";

export class GetEpisodeById {
  constructor(private readonly episodeRepository: EpisodeRepository) {}

  async execute(id: number): Promise<Episode | null> {
    return await this.episodeRepository.getEpisodeById(id);
  }
}