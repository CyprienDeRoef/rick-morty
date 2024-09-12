import { Episode } from "@/lib/types";

/**
 * Retrieves episodes from the Rick and Morty API by their IDs.
 * @see https://rickandmortyapi.com/documentation/#get-multiple-episodes
 *
 * @param ids - An array of episode IDs.
 * @returns A promise that resolves to an array of episodes or a single episode.
 * @throws An error if the episodes fail to be fetched.
 */
export async function getSeveralEpisodes(
  ids: string[]
): Promise<Episode[] | Episode> {
  try {
    console.log(ids);
    const res: Response = await fetch(
      `https://rickandmortyapi.com/api/episode/${ids}`
    );
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch episodes");
  }
}
