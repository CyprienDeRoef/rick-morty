import { Character, Paging } from "@/lib/types";

/**
 * Retrieves all characters from the Rick and Morty API.
 * @see https://rickandmortyapi.com/documentation/#get-all-characters
 *
 * @param page - The page number to retrieve.
 * @param status - The status of the characters ("Alive", "Dead", or "" for all).
 * @param name - The name of the characters to filter by.
 * @returns A promise that resolves to a paginated list of character objects.
 * @throws An error if the characters failed to fetch.
 */
export async function getCharacters(
  page?: number,
  status?: "Alive" | "Dead" | "",
  name?: string
): Promise<Paging<Character>> {
  try {
    const res: Response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&status=${status}&name=${name}`
    );
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch characters");
  }
}
