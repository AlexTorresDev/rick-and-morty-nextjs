import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Character } from '@/domain/entities/Character';
import CharacterCard from '@/components/CharacterCard';
import { CharacterRepositoryAPI } from '@/infrastructure/repositories/CharacterRepositoryAPI';
import { GetCharacters } from '@/domain/usecases/GetCharacters';
import { GetCharacterById } from '@/domain/usecases/GetCharacterById';

type Props = {
  character: Character;
};

export default function CharacterDetail({ character }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <CharacterCard character={character} />
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const repository = new CharacterRepositoryAPI();
  const usecase = new GetCharacters(repository);
  const characters = await usecase.execute();

  const paths = characters.map((character) => ({
    params: { id: character.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const repository = new CharacterRepositoryAPI();
  const usecase = new GetCharacterById(repository);
  const character = await usecase.execute(parseInt(params?.id as string));

  return { props: { character: JSON.parse(JSON.stringify(character)) }, revalidate: 60 };
};