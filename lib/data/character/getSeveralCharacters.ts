import { Character } from "@/lib/types";

/**
 * Retrieves information about characters from the Rick and Morty API by their ID.
 * @see https://rickandmortyapi.com/documentation/#get-multiple-characters
 *
 * @param ids - An array of character IDs or a single character ID.
 * @returns A promise that resolves to an array of characters or a single character.
 * @throws An error if the characters cannot be fetched.
 */
export async function getSeveralCharacters(
  ids: string[] | string
): Promise<Character[] | Character> {
  try {
    const res: Response = await fetch(
      `https://rickandmortyapi.com/api/character/${ids}`
    );
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch characters");
  }
}
