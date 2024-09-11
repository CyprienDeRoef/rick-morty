import { Character, Paging } from "@/lib/types";

export default async function getCharacters(
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
