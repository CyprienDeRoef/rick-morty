import { Location } from "@/lib/types";

export default async function getSpecificLocation(
  id: string
): Promise<Location> {
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
