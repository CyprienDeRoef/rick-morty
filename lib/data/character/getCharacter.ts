import { Character } from "@/lib/types";

/**
 * Retrieves a character from the Rick and Morty API by its ID.
 * @see https://rickandmortyapi.com/documentation/#get-a-single-character
 *
 * @param id - The ID of the character to retrieve.
 * @returns A Promise that resolves to the retrieved character.
 * @throws An error if the character retrieval fails.
 */
export async function getCharacter(id: string): Promise<Character> {
  try {
    const res: Response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch character");
  }
}
