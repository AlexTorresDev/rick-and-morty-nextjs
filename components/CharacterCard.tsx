import Image from 'next/image';
import { Character } from "@/domain/entities/Character";

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const status = {
    'Alive': 'bg-green-500/20 border-green-500',
    'Dead': 'bg-red-500/20 border-red-500',
    'unknown': 'bg-gray-500/20 border-gray-500',
  }[character.status]

  return (
    <div className={`${status} rounded-sm border-4 border-opacity-40`}>
      <div className="relative w-full rounded-t-sm overflow-hidden">
        <Image
          className='object-cover'
          src={character.image}
          alt={character.name}
          height={500}
          width={500}
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-3">{character.name}</h2>
        <p className="text-gray-700">{character.species} - {character.status}</p>
        <p className="text-gray-700">{character.location.name}</p>
      </div>
    </div>
  )
}