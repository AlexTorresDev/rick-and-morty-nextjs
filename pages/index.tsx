import { GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '@/components/Layout';
import CharacterList from '@/components/CharacterList';
import { GetCharacters } from '@/domain/usecases/GetCharacters';
import { Character } from '@/domain/entities/Character';
import { CharacterRepositoryAPI } from '@/infrastructure/repositories/CharacterRepositoryAPI';

type Props = {
  characters: Character[];
};

export default function Home({ characters }: Props) {
  return (
    <main className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Rick and Morty Characters</h1>
      <CharacterList characters={characters} />
    </main>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const characterRepository = new CharacterRepositoryAPI();
  const getCharacters = new GetCharacters(characterRepository);
  const characters = await getCharacters.execute();

  return {
    props: {
      characters: JSON.parse(JSON.stringify(characters)),
    },
  };
};