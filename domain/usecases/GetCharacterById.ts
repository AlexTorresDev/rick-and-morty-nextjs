import { Character } from "@/domain/entities/Character"
import { CharacterRepository } from "@/domain/repositories/CharacterRepository"

export class GetCharacterById {
  constructor(private readonly characterRepository: CharacterRepository) {}

  async execute(id: number): Promise<Character | null> {
    return await this.characterRepository.getCharacterById(id)
  }
}