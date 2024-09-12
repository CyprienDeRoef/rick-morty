import { Location } from "@/lib/types";

/**
 * Fetches several locations from the Rick and Morty API based on the provided IDs.
 * @see https://rickandmortyapi.com/documentation/#get-multiple-locations
 *
 * @param ids - An array of strings representing the IDs of the locations to fetch.
 * @returns A promise that resolves to an array of Location objects or a single Location object.
 * @throws An error if the fetch operation fails.
 */
export async function getSeveralLocations(
  ids: string[]
): Promise<Location[] | Location> {
  try {
    const res: Response = await fetch(
      `https://rickandmortyapi.com/api/location/${ids}`
    );
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch locations");
  }
}
