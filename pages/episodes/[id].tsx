import { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Episode } from '../../domain/entities/Episode';
import { GetEpisodeById } from '../../domain/usecases/GetEpisodeById';
import { fetcher } from '../../infrastructure/utils/fetcher';
import { EpisodeRepositoryAPI } from '@/infrastructure/repositories/EpisodeRepositoryAPI';

interface EpisodeProps {
  episode: Episode;
}

export default function EpisodePage({ episode }: EpisodeProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (router.isFallback) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [router.isFallback]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900">{episode.name}</h1>
        <p className="mt-4 text-gray-500">{episode.airDate}</p>
        <p className="mt-4 text-gray-500">{episode.episode}</p>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetcher('https://rickandmortyapi.com/api/episode');
  const episodes = response.results;

  const paths = episodes.map((episode: Episode) => ({
    params: { id: episode.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const repository = new EpisodeRepositoryAPI();
  const usecase = new GetEpisodeById(repository);
  const episode = await usecase.execute(parseInt(params?.id as string));

  return { props: { episode: JSON.parse(JSON.stringify(episode)) } };
};