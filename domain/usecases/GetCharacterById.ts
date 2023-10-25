import { Character } from "../entities/Character"
import { CharacterRepository } from "../repositories/CharacterRepository"

export class GetCharacterById {
  constructor(private readonly characterRepository: CharacterRepository) {}

  async execute(id: number): Promise<Character | null> {
    return await this.characterRepository.getCharacterById(id)
  }
}