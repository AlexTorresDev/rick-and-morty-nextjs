import { Character } from "../../domain/entities/Character";
import { CharacterRepository } from "../../domain/repositories/CharacterRepository";
import { fetcher } from "../utils/fetcher";

export class CharacterRepositoryAPI implements CharacterRepository {
  async getCharacters(): Promise<Character[]> {
    const data = await fetcher("https://rickandmortyapi.com/api/character");
    return data.results.map((characterData: any) => new Character(
      characterData.id,
      characterData.name,
      characterData.status,
      characterData.species,
      characterData.type,
      characterData.gender,
      { name: characterData.origin.name, url: characterData.origin.url },
      { name: characterData.location.name, url: characterData.location.url },
      characterData.image,
      characterData.episode,
      characterData.url,
      characterData.created
    ));
  }

  async getCharacterById(id: number): Promise<Character> {
    const data = await fetcher(`https://rickandmortyapi.com/api/character/${id}`);
    return new Character(
      data.id,
      data.name,
      data.status,
      data.species,
      data.type,
      data.gender,
      { name: data.origin.name, url: data.origin.url },
      { name: data.location.name, url: data.location.url },
      data.image,
      data.episode,
      data.url,
      data.created
    );
  }
}