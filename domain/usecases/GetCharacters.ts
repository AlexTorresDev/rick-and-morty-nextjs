import { Character } from "../entities/Character";
import { CharacterRepository } from "../repositories/CharacterRepository";

export class GetCharacters {
  constructor(private readonly characterRepository: CharacterRepository) {}

  async execute(): Promise<Character[]> {
    return await this.characterRepository.getCharacters();
  }
}