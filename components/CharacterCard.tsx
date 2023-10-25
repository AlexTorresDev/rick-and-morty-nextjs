import { Character } from "../domain/entities/Character";

interface CharacterCardProps {
  character: Character;
}

import Image from 'next/image';

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="relative h-48 rounded-md overflow-hidden">
        <Image
          src={character.image}
          alt={character.name}
          height={192}
          width={192}
        />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">{character.name}</h2>
        <p className="text-gray-500">{character.species} - {character.status}</p>
        <p className="text-gray-500">{character.location.name}</p>
      </div>
    </div>
  );
};