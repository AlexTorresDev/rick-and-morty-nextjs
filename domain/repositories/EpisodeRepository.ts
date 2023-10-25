import { Episode } from "@/domain/entities/Episode";

export interface EpisodeRepository {
  getEpisodeById(id: number): Promise<Episode>;
  getEpisodes(): Promise<Episode[]>;
}