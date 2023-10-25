import { Episode } from "../../domain/entities/Episode";
import { EpisodeRepository } from "../../domain/repositories/EpisodeRepository";
import { fetcher } from "../utils/fetcher";

export class EpisodeRepositoryAPI implements EpisodeRepository {
  async getEpisodeById(id: number): Promise<Episode> {
    const data = await fetcher(`https://rickandmortyapi.com/api/episode/${id}`);
    return new Episode(data.id, data.name, data.air_date, data.episode);
  }

  async getEpisodes(): Promise<Episode[]> {
    const data = await fetcher(`https://rickandmortyapi.com/api/episode`);
    return data.results.map((episode: any) => new Episode(episode.id, episode.name, episode.air_date, episode.episode));
  }
}