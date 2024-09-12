import { Location } from "@/lib/types";

/**
 * Retrieves a specific location by its ID.
 * @see https://rickandmortyapi.com/documentation/#get-a-single-location
 *
 * @param id - The ID of the location to retrieve.
 * @returns A promise that resolves to the retrieved location.
 * @throws An error if the location retrieval fails.
 */
export async function getLocation(id: string): Promise<Location> {
  try {
    const res: Response = await fetch(
      `https://rickandmortyapi.com/api/location/${id}`
    );
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch location");
  }
}
