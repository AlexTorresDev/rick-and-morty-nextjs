import { Character } from "@/domain/entities/Character";
import { CharacterRepository } from "@/domain/repositories/CharacterRepository";

export class GetCharacters {
  constructor(private readonly characterRepository: CharacterRepository) {}

  async execute(): Promise<Character[]> {
    return await this.characterRepository.getCharacters();
  }
}