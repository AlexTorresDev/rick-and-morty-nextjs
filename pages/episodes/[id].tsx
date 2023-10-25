import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Episode } from '../../domain/entities/Episode';
import { GetEpisodeById } from '../../domain/usecases/GetEpisodeById';
import { EpisodeRepositoryAPI } from '@/infrastructure/repositories/EpisodeRepositoryAPI';
import { GetEpisodes } from '@/domain/usecases/GetEpisodes';

interface EpisodeProps {
  episode: Episode;
}

export default function EpisodePage({ episode }: EpisodeProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">{episode.name}</h1>
      <p className="mt-4 text-gray-500">{episode.airDate}</p>
      <p className="mt-4 text-gray-500">{episode.episode}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const repository = new EpisodeRepositoryAPI();
  const usecase = new GetEpisodes(repository);
  const episodes = await usecase.execute();

  const paths = episodes.map((character) => ({
    params: { id: character.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const repository = new EpisodeRepositoryAPI();
  const usecase = new GetEpisodeById(repository);
  const episode = await usecase.execute(parseInt(params?.id as string));

  return { props: { episode: JSON.parse(JSON.stringify(episode)) } };
};