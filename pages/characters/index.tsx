import { GetStaticProps } from 'next';
import CharacterList from '@/components/CharacterList';
import { GetCharacters } from '@/domain/usecases/GetCharacters';
import { Character } from '@/domain/entities/Character';
import { CharacterRepositoryAPI } from '@/infrastructure/repositories/CharacterRepositoryAPI';

type Props = {
  characters: Character[];
};

export default function CharactersPage({ characters }: Props) {
  return <CharacterList characters={characters} />;
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