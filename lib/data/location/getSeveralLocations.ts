import { Location } from "@/lib/types";

export default async function getSeveralLocations(
  ids: string[]
): Promise<Location[]> {
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
