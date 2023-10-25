import { GetEpisodes } from "../../domain/usecases/GetEpisodes";
import { Episode } from "../../domain/entities/Episode";
import { EpisodeRepositoryAPI } from "@/infrastructure/repositories/EpisodeRepositoryAPI";

type EpisodesProps = {
  episodes: Episode[];
};

export default function Episodes({ episodes }: EpisodesProps) {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Episodes</h1>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id} className="mb-4">
            <h2 className="text-xl font-bold">{episode.name}</h2>
            <p className="text-gray-500">
              {episode.episode} | {episode.airDate}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const repository = new EpisodeRepositoryAPI();
  const useCase = new GetEpisodes(repository);
  const episodes = await useCase.execute();
  return {
    props: {
      episodes: JSON.parse(JSON.stringify(episodes)),
    },
  };
}