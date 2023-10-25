import { Character } from "../domain/entities/Character";
import { CharacterCard } from "./CharacterCard";

type CharacterListProps = {
  characters: Character[];
};

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;