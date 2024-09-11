import { Character } from "@/lib/types";

export default async function getSeveralCharacters(
  ids: string[] | string
): Promise<Character[]> {
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
