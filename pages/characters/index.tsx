import { GetStaticPaths, GetStaticProps } from 'next'
import { GetCharacters } from '@/domain/usecases/GetCharacters'
import { Character } from '@/domain/entities/Character'
import { CharacterRepositoryAPI } from '@/infrastructure/repositories/CharacterRepositoryAPI'
import CharacterCard from '@/components/CharacterCard'

type Props = {
  characters: Character[]
}

export default function CharactersPage({ characters }: Props) {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8">Personajes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const characterRepository = new CharacterRepositoryAPI()
  const getCharacters = new GetCharacters(characterRepository)
  const characters = await getCharacters.execute()

  return {
    props: {
      characters: JSON.parse(JSON.stringify(characters)),
    },
  }
}