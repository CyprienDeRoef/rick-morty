import { Character } from "@/lib/types";

export default async function getSpecificCharacter(
  id: string
): Promise<Character> {
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
