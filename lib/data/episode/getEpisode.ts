import { Episode } from "@/lib/types";

/**
 * Retrieves an episode from the Rick and Morty API by its ID.
 * @see https://rickandmortyapi.com/documentation/#get-a-single-episode
 *
 * @param id - The ID of the episode.
 * @returns A Promise that resolves to the retrieved episode.
 * @throws An error if the episode fetch fails.
 */
export async function getEpisode(id: string): Promise<Episode> {
  try {
    const res: Response = await fetch(
      `https://rickandmortyapi.com/api/episode/${id}`
    );
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch episode");
  }
}
